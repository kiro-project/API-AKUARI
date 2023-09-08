const express = require('express')
var router = express.Router();
const { getBuffer } = require('../lib/function')
const axios = require('axios')
const fetch = require('node-fetch')
const fs = require('fs')
__path = process.cwd()

const apivisit = require('../visitor/iki')




router.get('/tinyurl', async(req, res) => {
  var link = req.query.link
  if (!link) return res.json({ 'message': 'masukan parameter link!'})
 try {
  var iki = (await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)).data
   
    res.json({
       creator: `akuari.my.id`,
      url_asli: link,
        hasil: iki})
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

router.get('/clp', async(req, res) => {
  var link = req.query.link
  if (!link) return res.json({ 'message': 'masukan parameter link!'})
 try {
  var akk =  (await axios.get(`https://clp.pw/api/v1/create?url=${link}`)).data


    res.json({
      creator: `akuari.my.id`,
      url_asli: link,
      hasil: akk.result
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/isgd', async(req, res) => {
  var link = req.query.link
  if (!link) return res.json({ 'message': 'masukan parameter link!'})
 try {
  var akk =  (await axios.get(`https://is.gd/create.php?format=json&url=${link}`)).data

   
    res.json({
       creator: `akuari.my.id`,
      url_asli: link,
      hasil: akk
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

router.get('/vgd', async(req, res) => {
  var link = req.query.link
  if (!link) return res.json({ 'message': 'masukan parameter link!'})
   try {
  var headerss = {
    'User-Agent': 'Chrome/62.0 (BSD x86_64; rv:71.0) Gecko/20100101 Firefox/71.0',
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.5',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    'Origin': 'https://v.gd/',
    'Connection': 'keep-alive',
    'Referer': 'https://v.gd/'
};
  
  var akk =  (await axios.get(`https://v.gd/create.php?format=json&url=${link}`,{
                  headers: headerss 
  })).data
   

    res.json({
       creator: `akuari.my.id`,
      url_asli: link,
      hasil: akk
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

router.get('/vurl', async(req, res) => {
  var link = req.query.link
  if (!link) return res.json({ 'message': 'masukan parameter link!'})

   try {
  var iki = (await axios.get(`https://vurl.com/api.php?url=${link}`)).data


    res.json({
       creator: `akuari.my.id`,
      url_asli: link,
      hasil: iki})
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})














router.get('/sid', async(req, res) => {
  var link = req.query.link
  if (!link) return res.json({ 'message': 'masukan parameter link!'})
  var headers = {
    'User-Agent': 'Chrome/62.0 (BSD x86_64; rv:71.0) Gecko/20100101 Firefox/71.0',
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.5',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    'Origin': 'https://s.id',
    'Connection': 'keep-alive',
    'Referer': 'https://s.id/'
};
  let payload = { headers: headers,
    body: link };

    let resss = await axios.post('https://s.id/api/public/link/shorten', payload)
 
resss = resss.data
    try {
    res.json({
       creator: `akuari.my.id`,
      hasil: resss})
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

module.exports = router