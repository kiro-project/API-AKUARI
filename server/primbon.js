const express = require('express')
var router = express.Router();
const axios = require('axios')
const { artinama, ramalanJodoh } = require('../scraper/primbon')


const apivisit = require('../visitor/iki')


const {
    tafsirMimpi,
    Jodoh,
    tanggaljadi,
    watakartis,
    ramalanjodoh,
    rejekiweton,
    kecocokannama,
    haribaik,
    harilarangan } = require('../scraper/primbon2')



router.get('/tafsirmimpi', async(req, res) => { 
 try {
	var mimpi = req.query.mimpi
	if (!mimpi) return res.json({ message: 'masukan parameter ?mimpi=' })
	var hasil = await tafsirMimpi(mimpi)
	
		res.json({
      
      creator: `akuari.my.id`,
      hasil: hasil
  } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/tanggaljadian', async(req, res) => { 
 try {
	var tanggal = req.query.tanggal
	if (!tanggal) return res.json({ message: 'masukan parameter ?tanggal=01-10-2021' })
	var hasil = await tanggaljadi(tanggal)
	
		res.json({
      
      creator: `akuari.my.id`,
      hasil: hasil
  } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/watakartis', async(req, res) => { 
 try {
  	var nama = req.query.nama
	var tanggal = req.query.tanggal
	if (!tanggal) return res.json({ message: 'masukan parameter &tanggal=01-10-2021' })
  	if (!nama) return res.json({ message: 'masukan parameter ?nama=raffi ahmad' })
	var hasil = await watakartis(nama, tanggal)
	
		res.json({
      
      creator: `akuari.my.id`,
      hasil: hasil
  } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/rejekiweton', async(req, res) => { 
 try {
	var tanggal = req.query.tanggal
	if (!tanggal) return res.json({ message: 'masukan parameter ?tanggal=01-10-2021' })
	var hasil = await rejekiweton(tanggal)
	
		res.json({
      
      creator: `akuari.my.id`,
      hasil: hasil
  } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/kecocokannama', async(req, res) => { 
 try {
  	var nama = req.query.nama
	var tanggal = req.query.tanggal
	if (!tanggal) return res.json({ message: 'masukan parameter &tanggal=01-10-2021' })
  	if (!nama) return res.json({ message: 'masukan parameter ?nama=raffi ahmad' })
	var hasil = await kecocokannama(nama, tanggal)
	
		res.json({
      
      creator: `akuari.my.id`,
      hasil: hasil
  } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})


router.get('/haribaik', async(req, res) => { 
 try {
	var tanggal = req.query.tanggal
	if (!tanggal) return res.json({ message: 'masukan parameter ?tanggal=01-10-2021' })
	var hasil = await haribaik(tanggal)
	
		res.json({
      
      creator: `akuari.my.id`,
      hasil: hasil
  } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/harilarangan', async(req, res) => { 
 try {
	var tanggal = req.query.tanggal
	if (!tanggal) return res.json({ message: 'masukan parameter ?tanggal=01-10-2021' })
	var hasil = await harilarangan(tanggal)
	
		res.json({
      
      creator: `akuari.my.id`,
      hasil: hasil
  } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})



router.get('/artinama', async(req, res) => { 
 try {
	var nama = req.query.nama
	if (!nama) return res.json({ message: 'masukan parameter nama' })
	var hasil = await artinama(nama)
		res.json(hasil)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})


router.get('/ramalanjodoh', async(req, res) => { 
 try {
	var nama = req.query.nama
  var pasangan = req.query.pasangan
	if (!nama) return res.json({ message: 'masukan parameter nama' })
  if (!pasangan) return res.json({ message: 'masukan parameter pasangan' })
	var hasil = await ramalanJodoh(nama, pasangan)
	
		res.json({
      
      creator: `akuari.my.id`,
      hasil: hasil
  } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

module.exports = router
