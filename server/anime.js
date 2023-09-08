const express = require('express')
var router = express.Router();
const axios = require('axios')
const fetch = require('node-fetch')
const fs = require('fs')
const { getBuffer } = require('../lib/function')
const { dl } = require('../scraper/aiovideodl')

const mynimeku = require('../scraper/mynime')
const { igStory, igdl } = require('../scraper/igdl')
const { igdll } = require('../scraper/musicaldown')
const instagramGetUrl = require("instagram-url-direct")
const socialDownloaderCherry = require("social-downloader-cherry")
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const apivisit = require('../visitor/iki')

router.get('/mynimekuSearch', async(req, res) => {
  var query = req.query.query
  if (!query) return res.json({ message: 'masukan parameter query' })
  try {
  var result = await mynimeku.Search(query)
  if (result > 1) return res.json({ message: 'anime not found!' })
  res.json(result)
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/mynimekuDetail', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'masukan parameter Link' })
  try {
   var result = await mynimeku.animeDetail(link)
   res.json(result)
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/mynimekuDownload', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'masukan parameter Link' })
  try {
   var result = await mynimeku.downloadEps(link)
   res.json(result)
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
           await apivisit()
})

router.get('/storyanime', async(req, res) => {
  try {
  let res_ = await fetch('https://raw.githubusercontent.com/akuwaee/dbku/main/storyanime.json')
  let data = await res_.json()
  let json = data[Math.floor(Math.random() * data.length)]
  var dl_link = await  socialDownloaderCherry.Instagram.getAny(json)

		res.redirect(dl_link.data.body.link)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
	await apivisit()
})


router.get('/storysad', async(req, res) => {
  try {
  let res_l = await fetch('https://raw.githubusercontent.com/akuwaee/dbku/main/storysad.json')
  let datal = await res_l.json()
  let jsonl = datal[Math.floor(Math.random() * datal.length)]
  var hasil = await musicaldown(jsonl)

		var data = await getBuffer(hasil.result.nowm)
		await fs.writeFileSync(__path +'/tmp/tiktok.mp4', data)
   		await res.sendFile(__path +'/tmp/tiktok.mp4')
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

module.exports = router
