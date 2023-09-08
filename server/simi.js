const express = require('express')
var router = express.Router();
const { getBuffer } = require('../lib/function')
const axios = require('axios')
const fetch = require('node-fetch')
const fs = require('fs')
const moment = require('moment-timezone')
const atime = moment.tz('Asia/Jakarta').format('YYYY-MM-DD')
__path = process.cwd()
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const apivisit = require('../visitor/iki')



router.get('/simi2', async(req, res) => {
  var query = req.query.query
	if (!query) return res.json({ message: 'Masukan parameter query?=hai simi'})
  try {

  let options = new URLSearchParams();
  options.append('text', query);
  options.append('lc', 'id');

    const responsef = await axios.post('https://api.simsimi.vn/v2/simtalk', options);
    let ress = await responsef.data;
  

    

		res.json({
      creator: `akuari.my.id`,
      respon: ress.message
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await  apivisit()
})


router.get('/simi', async(req, res) => {
  var query = req.query.query
	if (!query) return res.json({ message: 'Masukan parameter query?=hai simi'})
  try {
	var waif = (await axios.get(`http://api.simsimi.net/v2/?text=${query}&lc=id&cf=false`)).data

		res.json({
      creator: `akuari.my.id`,
      respon: waif.success
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await  apivisit()
})

module.exports = router
