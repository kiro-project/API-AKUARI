const express = require('express')
var router = express.Router();
const { getBuffer } = require('../lib/function')
const { uploadFile3, uploadari } = require('../scraper/uploadfile')
const axios = require('axios')
const fetch = require('node-fetch')
const fs = require('fs')
const moment = require('moment-timezone')
const api = require("caliph-api");
const {uploadByUrl, uploadByUrlanon} = require('../scraper/upload-telegrap')
const atime = moment.tz('Asia/Jakarta').format('YYYY-MM-DD')
__path = process.cwd()

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const apivisit = require('../visitor/iki')




router.get('/uploadfile', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
  try {
    var buf = await getBuffer(link)
	var waif = await api.tools.uploadFile(buf)



		res.json({
      creator: `akuari.my.id`,
      respon: waif.result.url
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/uploadfile2', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
  try {
    var buf = await getBuffer(link)
	var waif = await api.tools.uploadFile2(buf)


		res.json({
      creator: `akuari.my.id`,
      respon: waif.result.url
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/uploadfile3', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
  try {
    var buf = await getBuffer(link)
	var waif = await uploadFile3(buf)


		res.json({
      creator: `akuari.my.id`,
      source: `dani`,
      respon: waif.result
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})


router.get('/imgbb', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
  try {
	var waif = (await axios.get(`https://api.dapuhy.xyz/api/others/imgbb?img=${link}&apikey=LtbbOWQj2W`)).data

		res.json({
      creator: `akuari.my.id`,
      respon: waif
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/freeimage', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
  try {
	var waif = (await axios.get(`https://api.dapuhy.xyz/api/others/freeimage?img=${link}&apikey=LtbbOWQj2W`)).data

		res.json({
      creator: `akuari.my.id`,
      respon: waif
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/postimages', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
  try {
	var waif = (await axios.get(`https://api.dapuhy.xyz/api/others/postimages?img=${link}&apikey=LtbbOWQj2W`)).data

		res.json({
      creator: `akuari.my.id`,
      respon: waif
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/telegraph', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
  try {
  anu = await uploadByUrl(link)

		res.json({
      creator: `akuari.my.id`,
      respon: anu
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/akuari', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
  try {
  var buf = await getBuffer(link)
  anu = await uploadari(buf)

		res.json(anu)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/anonfiles2', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
  try {
  anu = await uploadByUrlanon(link)

		res.json({
      creator: `akuari.my.id`,
      respon: anu
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/anonfiles1', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
  try {
	var waif = (await axios.get(`https://api.dapuhy.xyz/api/others/anonfiles?file=${link}&apikey=LtbbOWQj2W`)).data

		res.json({
      creator: `akuari.my.id`,
      respon: waif
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

module.exports = router
