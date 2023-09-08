const express = require('express')
const axios = require('axios').default;
var router = express.Router();
const { getBuffer } = require('../lib/function')
const fs = require('fs')
const { memeku } = require('../scraper/info')
const katopack = require('kato-pack');
__path = process.cwd()

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



const apivisit = require('../visitor/iki')


router.get('/quotesyt', async(req, res) => {
	
datas = await getBuffer(`https://api.dapuhy.xyz/api/randomimage/quotesyt?apikey=apiakuari`)
    await fs.writeFileSync(__path +'/tmp/darkmeme171.png', datas)
    await res.sendFile(__path +'/tmp/darkmeme171.png')
    await sleep(3000)
    await fs.unlinkSync(__path + '/tmp/darkmeme171.png')
  await apivisit()
})
router.get('/darkmemelord', async(req, res) => {
	try {
 const randomsd = await memeku();

  res.set
		res.json({
      
      creator: `akuari.my.id`,
      hasil: randomsd
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/darkmeme17', async(req, res) => {
	try {
 const randomsd = await katopack.Pack(`meme`);

  res.set
		res.json({
      
      creator: `akuari.my.id`,
      hasil: randomsd
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/ppcouple', async(req, res) => {
  try {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/random/ppcouple.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]

		res.json({
      
      creator: `akuari.my.id`,
      hasil: {
        cewek: get_resulta.female,
        cowok: get_resulta.male
             }
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})



router.get('/darkjokes1', async(req, res) => {
	var get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/random/darkjokes.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
datas = await getBuffer(get_resulta.bos)
    await fs.writeFileSync(__path +'/tmp/darkmeme17.png', datas)
    await res.sendFile(__path +'/tmp/darkmeme17.png')
    await sleep(3000)
    await fs.unlinkSync(__path + '/tmp/darkmeme17.png')
  await apivisit()
})






router.get('/joker', async(req, res) => {
try {
	var get_result = (await axios.get(`https://raw.githubusercontent.com/akuwaee/asupan/master/joker.json`)).data
   get_resulta = get_result[Math.floor(Math.random() * get_result.length)]

	res.json({
      creator: `akuari.my.id`,
      respon: get_resulta.url
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}

  await apivisit()
})

router.get('/harley', async(req, res) => {
try {
	var get_result = (await axios.get(`https://raw.githubusercontent.com/akuwaee/asupan/master/harley.json`)).data
   get_resulta = get_result[Math.floor(Math.random() * get_result.length)]


	res.json({
      creator: `akuari.my.id`,
      respon: get_resulta.url
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/anonymous', async(req, res) => {
try {
	var get_result = (await axios.get(`https://raw.githubusercontent.com/akuwaee/asupan/master/anony.json`)).data
   get_resulta = get_result[Math.floor(Math.random() * get_result.length)]


	res.json({
      creator: `akuari.my.id`,
      respon: get_resulta.url
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})



module.exports = router
