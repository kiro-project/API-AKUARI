__path = process.cwd()
const express = require('express')
var router = express.Router();
const fs = require('fs')
const fetch = require('node-fetch')
const { getBuffer } = require('../lib/function')

const { photofunia_text, photofunia_textt } = require("../scraper/photofunia");
const apivisit = require('../visitor/iki')







const Urlnya = {
	snow: 'https://m.photofunia.com/effects/snow_writing',
    	treecarving: 'https://m.photofunia.com/effects/tree_carving',
  	
  
	typewriter: 'https://m.photofunia.com/effects/typewriter'
}

router.get('/typewriter', async (req, res) => {
  try{
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })


  await photofunia_text(Urlnya.typewriter, text)
  .then(async (result) => {
    await getBuffer(result)
      .then((buff) => res.type("png").send(buff))
      .catch(() => res.json(loghandler.error));
  })
  .catch((e) => res.send(e));

    }catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  
  await apivisit()
})













//text 2 









router.get('/snow', async (req, res) => {
  try{
	var text1 = req.query.text1

	if (!text1) return res.json({ message: 'masukan parameter Text' })
    var text2 = req.query.text2

	if (!text2) return res.json({ message: 'masukan parameter &text2' })
  await photofunia_textt(Urlnya.snow, text1, text2)
  .then(async (result) => {
    await getBuffer(result)
      .then((buff) => res.type("png").send(buff))
      .catch(() => res.json(loghandler.error));
  })
  .catch((e) => res.send(e));

    }catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  
  await apivisit()
})

router.get('/treecarving', async (req, res) => {
  try{
	var text1 = req.query.text1

	if (!text1) return res.json({ message: 'masukan parameter Text' })
    var text2 = req.query.text2

	if (!text2) return res.json({ message: 'masukan parameter &text2' })
  await photofunia_textt(Urlnya.treecarving, text1, text2)
  .then(async (result) => {
    await getBuffer(result)
      .then((buff) => res.type("png").send(buff))
      .catch(() => res.json(loghandler.error));
  })
  .catch((e) => res.send(e));

    }catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  
  await apivisit()
})


router.get('/scraper-1', async (req, res) => {
	var text = req.query.text
  	var link = req.query.link
	if (!text) return res.json({ message: 'masukan parameter Text' })
  	if (!link) return res.json({ message: 'masukan parameter Link' })
  try {
	var hasil = await photofunia_text(link, text)

	res.json({
      creator: `akuari.my.id`,
      respon: hasil
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/scraper-2', async (req, res) => {
	var text1 = req.query.text1
  var text2 = req.query.text2
  	var link = req.query.link
	if (!text1) return res.json({ message: 'masukan parameter ?text1=' })
  if (!text2) return res.json({ message: 'masukan parameter &text2=' })
  	if (!link) return res.json({ message: 'masukan parameter &link' })
  try {
	var hasil = await photofunia_textt(link, text1, text2)

	res.json({
      creator: `akuari.my.id`,
      respon: hasil
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})



module.exports = router
