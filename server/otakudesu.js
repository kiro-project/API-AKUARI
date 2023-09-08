const express = require('express')
var router = express.Router();
const axios = require('axios')
const otaku = require('../scraper/otakudesu')


const apivisit = require('../visitor/iki')



router.get('/search', async(req, res) => {
  try {
	var anime = req.query.anime
	if (!anime) return res.json({ message: 'masukan parameter Anime' })
	var hasil = await otaku.Search(anime)
	
		res.json(hasil)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/animeDetail', async(req, res) => {
  try {
	var link = req.query.link
	if (!link) return res.json({ message: 'masukan parameter Link' })
	var hasil = await otaku.getInfo(link)

		res.json(hasil)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/dl', async(req, res) => {
  try {
	var link = req.query.link
	if (!link) return res.json({ message: 'masukan parameter Link' })
	var hasil = await otaku.Getdownload(link)

		res.json(hasil)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

module.exports = router
