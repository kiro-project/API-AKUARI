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


router.get('/ping', async(req, res) => { 
 
  const timestamp = speed();
        const latensi = speed() - timestamp;
 res.json({ 
   creator: `akuari.my.id`,
   server: `Online`,
   status: `${latensi.toFixed(4)} /Detik` })
})


router.get('/server', async(req, res) => { 

 res.json({ 
   creator: `akuari.my.id`,
   status: `online` })
})

router.get('/jadwaltv', async(req, res) => { 
 try {
     var tv = req.query.tv

	if (!tv) return res.json({ message: 'Masukan parameter ?tv= \nContoh \n jadwaltv/?tv=sctv \n\n Berikut list tv yang tersedia: sctv, rcti, antv, gtv, indosiar, inewstv, kompastv, metrotv, mnctv, nettv, rtv, trans7, transtv, tvone, jaktv, daaitv, beritasatu, tvri'})
 const result = await jadwaltv(tv)
 res.json({ 
   creator: `akuari.my.id`,
   list_tv: `Berikut list tv yang tersedia: sctv, rcti, antv, gtv, indosiar, inewstv, kompastv, metrotv, mnctv, nettv, rtv, trans7, transtv, tvone, jaktv, daaitv, beritasatu, tvri`,
   result,})
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error/ tv tidak tersedia!!' }) 
}
  await apivisit()
})

router.get('/merdeka', async(req, res) => { 
 try {
 const result = await merdekaNews()
 res.json({ 
   creator: `akuari.my.id`,
   result })
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})
router.get('/antaranews', async(req, res) => { 
 try {
 const result = await scrap.antaranews()
 res.json({ 
   creator: `akuari.my.id`,
   result })
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})
router.get('/kompas', async(req, res) => { 
 try {
 const result = await scrap.kompas()
 res.json({ 
   creator: `akuari.my.id`,
   result })
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})
router.get('/cnbindonesia', async(req, res) => { 
 try {
 const result = await scrap.cnbindonesia()
 res.json({ 
   creator: `akuari.my.id`,
   result })
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})

router.get('/liputan6', async(req, res) => { 
 try {
 const result = await scrap.liputan6()
 res.json({ 
   creator: `akuari.my.id`,
   result })
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})

router.get('/suaracom', async(req, res) => { 
 try {
 const result = await scrap.suaracom()
 res.json({ 
   creator: `akuari.my.id`,
   result })
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})

router.get('/cnn', async(req, res) => { 
 try {
 const result = await cnn()
 res.json({
   creator: `akuari.my.id`,
   result})
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})

router.get('/turnbackhoax', async(req, res) => { 
 try {
 const result = await turnbackhoax()
 res.json({
   creator: `akuari.my.id`,
   result})
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})

router.get('/gempa', async(req, res) => { 
 try {
   var result = await gempa()
   res.json(result)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})

router.get('/cuaca-bandara', async(req, res) => { 
 try {

	var waif = (await axios.get(`https://cuaca.api.akuari.my.id/api/cuaca/bandara`)).data

		res.json(
      { 
      creator: `akuari.my.id`,
      result: waif.daftar_bandara
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})


router.get('/tsunami', async(req, res) => { 
 try {

	var waif = (await axios.get(`https://cuaca.api.akuari.my.id/api/tsunami`)).data

		res.json(
      { 
      creator: `akuari.my.id`,
      result: waif.daftar_tsunami
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/covid', async(req, res) => { 
 try {
  var negara = req.query.negara

	if (!negara) return res.json({ message: 'Masukan parameter ?negara='})
 
	var waif = (await axios.get(`https://covid19.mathdro.id/api/countries/${negara}`)).data

		res.json(
      { 
      creator: `akuari.my.id`,
      kasus: waif.confirmed.value,
      sembuh: waif.recovered.value,
      meninggal: waif.deaths.value,
      update: waif.lastUpdate
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

module.exports = router
