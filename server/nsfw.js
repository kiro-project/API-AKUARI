const express = require('express')
var router = express.Router();
__path = process.cwd()
var nhentai = require('nhentai-js');
const NanaAPI = require('nana-api')
const nana = new NanaAPI()
const axios = require('axios')
const { toPDF } = require(__path + '/lib/img2pdf')
const fs = require('fs')

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const apivisit = require('../visitor/iki')

const { doujindesu } = require('../scraper/index') 

router.get('/nHentai', async (req, res) => {
    try {
        var code = req.query.code
        var result = await nhentai.getDoujin(`${code}`)
		    res.json({ result })
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})
router.get('/nHentaiSearch', async (req, res) => {
    try {
        var query = req.query.query
        var hasil = await nana.search(`${query}`)
        var result = hasil.results
		    res.json({ result })
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})
router.get('/doujindesuSearch', async (req, res) => {
    try {
        var query = req.query.query
        var hasil = await doujindesu(`${query}`)
	res.json(hasil)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})
router.get('/nhentaipdf', async (req, res) => {
    try {
	var code = req.query.code
	var nhres = `https://bisakah.herokuapp.com/nsfw/nhcode?query=${code}`
	res.json({
		result: nhres,
		note: 'dosa di tanggung sendiri!'
	})
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})
router.get('/nhcode', async (req, res) => {
        try {
	var query = req.query.query
	let data = await axios.get('https://bisakah.herokuapp.com/nsfw/nHentai?code='+query)
    	let restjson = data.data.result.pages
	let title = data.data.result.title
    	let duckJson = await restjson.map(a => 'https://external-content.duckduckgo.com/iu/?u=' + a)
   	let jsonTopdf = await toPDF(duckJson)
    	await fs.writeFileSync(__path + `/tmp/${title}.pdf`, jsonTopdf)
    	await res.sendFile(__path + `/tmp/${title}.pdf`)
    	await sleep(3000)
    	await fs.unlinkSync(__path + `/tmp/${title}.pdf`)
     } catch(err) {
       res.json({ error: err.message }) 
     }
  await apivisit()
})
module.exports = router
