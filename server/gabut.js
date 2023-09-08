const express = require('express')
var router = express.Router();
const axios = require('axios')
const fetch = require('node-fetch')
const scrap = require("@bochilteam/scraper")
const fs = require('fs')
const { getBuffer } = require('../lib/function')
const gempa = require('../scraper/cuaca')
const { jadwaltv, turnbackhoax } = require('../scraper/info')
const { merdekaNews, cnn } = require('../scraper/merdekanews')
const resapiAkuari = require("resapi-akuari")
const speed = require('performance-now')

const apivisit = require('../visitor/iki')

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					let teng = gan[Math.floor(Math.random() * gan.length)]
let tengg = gan[Math.floor(Math.random() * gan.length)]
let tenggg = gan[Math.floor(Math.random() * gan.length)]

	const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					const ya = gimana[Math.floor(Math.random() * gimana.length)]

const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]

const siapa = ['Gaby','Yoan','Naya','bapakmu','Jeremy','Natan','Setan','Dajjal','Shine','Tuhan','Jokowi','Ibumu','Nicho','Ezelio','Raja Inggris','Malaikat maut','Eline','Ga ada','Panji','Bot','Nenekmu','Prabowo','Megawatzy','Malaikat surga','Kim Jong Un','Putin']
					const gatau = siapa[Math.floor(Math.random() * siapa.length)]

const sifaat = ['Baik','penyayang','jahat','tidak setia','hebat','pintar','setia','buruk','bijaksana','bijak','cantik','menggemaskan','jelek','dingin','keren','bersih','serakah','rakus','ramah','dermawan','tinggi hati','sombong','rendah hati','penyabar','pemalas','nakal','rajin','imut','ceroboh','mudah marah','sopan','baik hati']
					const elinee = sifaat[Math.floor(Math.random() * sifaat.length)]

const dimanas = ['Neraka','Kuburan','Gereja','Got','Tempat tidur','Istana presiden','Surga','Rumah gaby','Rumah jeremy','Laut','peti mati','Jepang','Kantor polisi','Rumah mu','Rumah zio','Kalkud','Mulut mu','Hati mu','Rumah eline']
					const kemanas = dimanas[Math.floor(Math.random() * dimanas.length)]

const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul','Pastilah','Pasti bisa kack!']
					const kah = apa[Math.floor(Math.random() * apa.length)]

router.get('/cekganteng', async(req, res) => { 
 try {
  var nama = req.query.nama
	if (!nama) return res.json({ message: 'Masukan parameter ?nama='}) 

		res.json(
      { 
      creator: `akuari.my.id`,
      query: `Cek Gantengnya ${nama}`,
      hasil: `${teng}%` 
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/cekgila', async(req, res) => { 
 try {
  var nama = req.query.nama
	if (!nama) return res.json({ message: 'Masukan parameter ?nama='}) 

		res.json(
      { 
      creator: `akuari.my.id`,
      query: `Cek Gilanya ${nama}`,
      hasil: `${tengg}%` 
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/cekcantik', async(req, res) => { 
 try {
  var nama = req.query.nama
	if (!nama) return res.json({ message: 'Masukan parameter ?nama='}) 

		res.json(
      { 
      creator: `akuari.my.id`,
      query: `Cek Cantiknya ${nama}`,
      hasil: `${tenggg}%` 
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/kapankah', async(req, res) => { 
 try {
  var query = req.query.query
	if (!query) return res.json({ message: 'Masukan parameter ?query='}) 

		res.json(
      { 
      creator: `akuari.my.id`,
      query: `Kapankah ${query}`,
      hasil: kapankah 
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/siapakah', async(req, res) => { 
 try {
  var query = req.query.query
	if (!query) return res.json({ message: 'Masukan parameter ?query='}) 

		res.json(
      { 
      creator: `akuari.my.id`,
      query: `Siapakah ${query}`,
      hasil: kah 
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/gimana', async(req, res) => { 
 try {
  var query = req.query.query
	if (!query) return res.json({ message: 'Masukan parameter ?query='}) 

		res.json(
      { 
      creator: `akuari.my.id`,
      query: `Gimana ${query}`,
      hasil: ya 
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/siapakah', async(req, res) => { 
 try {
  var query = req.query.query
	if (!query) return res.json({ message: 'Masukan parameter ?query='}) 

		res.json(
      { 
      creator: `akuari.my.id`,
      query: `Siapakah ${query}`,
      hasil: gatau 
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/ceksifat', async(req, res) => { 
 try {
  var query = req.query.query
	if (!query) return res.json({ message: 'Masukan parameter ?query='}) 

		res.json(
      { 
      creator: `akuari.my.id`,
      query: `Cek Sifat ${query}`,
      hasil: elinee 
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/dimana', async(req, res) => { 
 try {
  var query = req.query.query
	if (!query) return res.json({ message: 'Masukan parameter ?query='}) 

		res.json(
      { 
      creator: `akuari.my.id`,
      query: `Dimana ${query}`,
      hasil: kemanas  
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

module.exports = router
