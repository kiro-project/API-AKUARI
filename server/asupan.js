const express = require('express')
var router = express.Router();
const { getBuffer } = require('../lib/function')
const axios = require('axios')
const fetch = require('node-fetch')
const fs = require('fs')
const moment = require('moment-timezone')
const atime = moment.tz('Asia/Jakarta').format('YYYY-MM-DD')
__path = process.cwd()

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const apivisit = require('../visitor/iki')

const rann = [1,2,3,4,5,6,7,8,9,0,11,22,33,44,55,66,77,88,99,00,12,23,34,45,56,67,78,90]
const randomaa = Math.floor(Math.random() * rann.length)

router.get('/tiktok', async(req, res) => {

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
  angk =  getRandomInt(200)

    
try {
       res.redirect(`https://raw.githubusercontent.com/akuwaee/asupan-tiktok/main/${angk}.mp4`)
		
	
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
   await apivisit()
})


router.get('/62', async(req, res) => {

  try {
data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/asupan/asupan?apikey=LtbbOWQj2W`)
     res.set({'Content-Type': 'video/mp4'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/santuy', async(req, res) => {
  try {
	get_result = (await axios.get(`https://raw.githubusercontent.com/akuwaee/dbku/main/asupan/santuy.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]

	res.json({
      creator: `akuari.my.id`,
      respon: get_resulta.data
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
   await apivisit()
})

router.get('/bocil', async(req, res) => {
  try {
 		get_result = (await axios.get(`https://raw.githubusercontent.com/akuwaee/dbku/main/asupan/bocil.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]

	res.json({
      creator: `akuari.my.id`,
      respon: get_resulta.data
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
   await apivisit()
})

router.get('/ukhty', async(req, res) => {
  try {
	 		get_result = (await axios.get(`https://raw.githubusercontent.com/akuwaee/dbku/main/asupan/ukhty.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]

	res.json({
      creator: `akuari.my.id`,
      respon: get_resulta.data
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
   await apivisit()
})

router.get('/rika', async(req, res) => {
  try {
data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/asupan/asupanrikagusriani?apikey=LtbbOWQj2W`)
     res.set({'Content-Type': 'mp4'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/ghea', async(req, res) => {
  try {
 	 		get_result = (await axios.get(`https://raw.githubusercontent.com/akuwaee/dbku/main/asupan/gheayubi.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]

	res.json({
      creator: `akuari.my.id`,
      respon: get_resulta.data
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
   await apivisit()
})

router.get('/cecan', async(req, res) => {
  try {
 	 		get_result = (await axios.get(`https://raw.githubusercontent.com/akuwaee/dbku/main/asupan/cecan.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]

	res.json({
      creator: `akuari.my.id`,
      respon: get_resulta.data
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
   await apivisit()
})

router.get('/hijab', async(req, res) => {
  try {
 	 		get_result = (await axios.get(`https://raw.githubusercontent.com/akuwaee/dbku/main/asupan/hijab.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]

	res.json({
      creator: `akuari.my.id`,
      respon: get_resulta.data
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
   await apivisit()
})

router.get('/cersex', async(req, res) => {
  try {
	get_result = (await axios.get(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=MIMINGANZ`)).data

		res.json({
      
      creator: `akuari.my.id`,
      img: get_result.gambar,
      hasil: get_result.result
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
   await apivisit()
})

module.exports = router
