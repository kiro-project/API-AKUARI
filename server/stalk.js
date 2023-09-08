const express = require('express')
var router = express.Router();
__path = process.cwd()
const fs = require('fs')
const { getBuffer } = require('../lib/function')

const apivisit = require('../visitor/iki')


//scraper
const { pinterest, randomTiktok, konachan } = require('../scraper/index') 

const { igstalk, sfilesearch } = require('../scraper/scrapper')


//Biar Result nya 20
//Disable Console Log


router.get('/sfilesearch', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
	var result = await sfilesearch(query)
	res.json({ 
    creator: `akuari.my.id`,
    result: result 
    })
})


router.get('/  ', async(req, res) => {
	var username = req.query.username
	if (!username) return res.json({ message: 'masukan parameter username' })
	var result = await igstalk(username)
	res.json({ result })
})


module.exports = router
