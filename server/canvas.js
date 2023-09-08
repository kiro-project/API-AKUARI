const express = require('express')
var router = express.Router();
const { getBuffer } = require('../lib/function')
const axios = require('axios')
const fetch = require('node-fetch')
const knights = require("knights-canvas");
const fs = require('fs')
const hikki = require('canvas-hikki')
const moment = require('moment-timezone')

//discord canvas


//akhir

const atime = moment.tz('Asia/Jakarta').format('YYYY-MM-DD')
__path = process.cwd()

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const apivisit = require('../visitor/iki')

const kayy = ["",""]




router.get('/rank', async(req, res) => {
  try {
  var avatar = req.query.avatar
   var username = req.query.username
    var needxp = req.query.needxp
     var currxp = req.query.currxp
  var level = req.query.level
      var bg = req.query.bg
       var rank = req.query.rank

	if (!avatar) return res.json({ message: 'Masukan parameter avatar?='})
  if (!username) return res.json({ message: 'Masukan parameter &username?='})
if (!needxp) return res.json({ message: 'Masukan parameter &needxp?='})
if (!bg) return res.json({ message: 'Masukan parameter &bg?='})
if (!level) return res.json({ message: 'Masukan parameter &level?='})
  if (!currxp) return res.json({ message: 'Masukan parameter &currxp?='})
   if (!rank) return res.json({ message: 'Masukan parameter &rank?='})

const image = await new knights.Rank()
    .setAvatar(avatar)
    .setUsername(username)
    .setBg(bg)
    .setNeedxp(needxp)
    .setCurrxp(currxp)
    .setLevel(level)
    .setRank(rank)
    .toAttachment();
 data = image.toBuffer();
    res.set({'Content-Type': 'png'})
res.send(data)
  
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/rankup', async(req, res) => {
  try {
  var avatar = req.query.avatar

	if (!avatar) return res.json({ message: 'Masukan parameter avatar?='})

const image = await new knights.Up()
    .setAvatar(avatar)
    .toAttachment();
 data = image.toBuffer();
    res.set({'Content-Type': 'png'})
res.send(data)
  
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/welcome2', async(req, res) => {
  try {
  var name = req.query.name
   var gcname = req.query.gcname
    var ppgc = req.query.ppgc
     var member = req.query.member
      var bg = req.query.bg
       var pp = req.query.pp

	if (!name) return res.json({ message: 'Masukan parameter name?='})
  if (!gcname) return res.json({ message: 'Masukan parameter &gcname?='})
if (!bg) return res.json({ message: 'Masukan parameter &bg?='})
if (!pp) return res.json({ message: 'Masukan parameter &pp?='})
  if (!member) return res.json({ message: 'Masukan parameter &member?='})
const image = await new hikki.Welcome2()
    .setUsername(name)
    .setGroupname(gcname)
    .setMember(member)
    .setAvatar(pp)
    .setBg(bg)
    .toAttachment();
 data = image.toBuffer();
    res.set({'Content-Type': 'png'})
res.send(data)
  
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/welcome3', async(req, res) => {
  try {
  var name = req.query.name
       var pp = req.query.pp

	if (!name) return res.json({ message: 'Masukan parameter name?='})
if (!pp) return res.json({ message: 'Masukan parameter &pp?='})
const image = await new hikki.Welcome3()
    .setUsername(name)
    .setAvatar(pp)
    .toAttachment();
 data = image.toBuffer();
    res.set({'Content-Type': 'png'})
res.send(data)
  
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})


router.get('/welcome', async(req, res) => {
  try {
  var name = req.query.name
   var gcname = req.query.gcname
    var ppgc = req.query.ppgc
     var member = req.query.member
      var bg = req.query.bg
       var pp = req.query.pp

	if (!name) return res.json({ message: 'Masukan parameter name?='})
  if (!gcname) return res.json({ message: 'Masukan parameter &gcname?='})
if (!ppgc) return res.json({ message: 'Masukan parameter &ppgc?='})
if (!bg) return res.json({ message: 'Masukan parameter &bg?='})
if (!pp) return res.json({ message: 'Masukan parameter &pp?='})
  if (!member) return res.json({ message: 'Masukan parameter &member?='})
const image = await new knights.Welcome()
    .setUsername(name)
    .setGuildName(gcname)
    .setGuildIcon(ppgc)
    .setMemberCount(member)
    .setAvatar(pp)
    .setBackground(bg)
    .toAttachment();
 data = image.toBuffer();
    res.set({'Content-Type': 'png'})
res.send(data)
  
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/goodbye', async(req, res) => {
  try {
  var name = req.query.name
   var gcname = req.query.gcname
    var ppgc = req.query.ppgc
     var member = req.query.member
      var bg = req.query.bg
       var pp = req.query.pp

	if (!name) return res.json({ message: 'Masukan parameter name?='})
  if (!gcname) return res.json({ message: 'Masukan parameter &gcname?='})
if (!ppgc) return res.json({ message: 'Masukan parameter &ppgc?='})
if (!bg) return res.json({ message: 'Masukan parameter &bg?='})
if (!pp) return res.json({ message: 'Masukan parameter &pp?='})
  if (!member) return res.json({ message: 'Masukan parameter &member?='})
const image = await new knights.Goodbye()
    .setUsername(name)
    .setGuildName(gcname)
    .setGuildIcon(ppgc)
    .setMemberCount(member)
    .setAvatar(pp)
    .setBackground(bg)
    .toAttachment();
 data = image.toBuffer();
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/hacker', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 const image = await new knights.Hacker2()
   .setAvatar(link)
    .toAttachment();
   data = image.toBuffer();
     res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})


router.get('/photo-to-cartoon', async(req, res) => {
  try {
  var img = req.query.img

	if (!img) return res.json({ message: 'Masukan parameter ?img='})
 data = await getBuffer(`https://violetics.pw/api/converter/photo-to-cartoon?apikey=8adb-4017-6b00&img=${img}`)
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})


router.get('/hartatahta', async(req, res) => {
  try {
  var text = req.query.text

	if (!text) return res.json({ message: 'Masukan parameter ?text='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/maker/hartatahta?text=${text}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/hartatahtacustom', async(req, res) => {
  try {
  var text = req.query.text

	if (!text) return res.json({ message: 'Masukan parameter ?text='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/maker/hartacustom?text=${text}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})


router.get('/hacker2', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
const image = await new knights.Hacker3()
   .setAvatar(link)
    .toAttachment();
   data = image.toBuffer();
     res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})


router.get('/gay', async(req, res) => {
  try {
  var link = req.query.link
  var nama = req.query.nama
  var persen = req.query.persen

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
  	if (!nama) return res.json({ message: 'Masukan parameter &nama='})
  	if (!persen) return res.json({ message: 'Masukan parameter &persen='})
 const image = await new knights.Gay()
   .setAvatar(link)
    .setName(nama)
   .setNum(persen)
   
    .toAttachment();
   data = image.toBuffer();
     res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/glass', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://some-random-api.ml/canvas/glass?avatar=${link}`)
   res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/wasted', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://some-random-api.ml/canvas/wasted?avatar=${link}`)
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/passed', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://some-random-api.ml/canvas/passed?avatar=${link}`)
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/greyscale', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/?url=${link}`)
     res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/invert', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/invert?url=${link}`)
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/wanted', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/wanted?url=${link}`)
     res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/sepia', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
  data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/sepia?url=${link}`)
     res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/triggered', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://some-random-api.ml/canvas/triggered?avatar=${link}`)
    res.set({'Content-Type': 'gif'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/triggered2', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/trigger?url=${link}`)
    res.set({'Content-Type': 'gif'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/crush', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/crush?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/approved', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/approved?img=${link}&apikey=LtbbOWQj2W`)
   res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/airpods', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/airpods?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/meth', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/meth?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})


router.get('/communism', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://some-random-api.ml/canvas/comrade?avatar=${link}`)
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/bjp', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/bjp?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/captcha', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/captcha?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/continued', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/continued?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/police', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/police?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/linus', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/linus?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/what', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/what?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/ad', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/ad?img=${link}&apikey=LtbbOWQj2W`)
     res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/bobross', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/bobross?img=${link}&apikey=LtbbOWQj2W`)
     res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/confusedstonk', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/confusedstonk?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/delete', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/delete?url=${link}`)
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/discordblack', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/discordblack?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/discordblue', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/discordblue?img=${link}&apikey=LtbbOWQj2W`)
     res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/facepalm', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/facepalm?url=${link}`)
   res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/hitler', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/hitler?url=${link}`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/jail', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://some-random-api.ml/canvas/jail?avatar=${link}`)
   res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/karaba', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/karaba?img=${link}&apikey=LtbbOWQj2W`)
     res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/mms', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/mms?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/stonk', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/stonk?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/notstonk', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/notstonk?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/tatoo', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/tatoo?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/rip', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/rip?url=${link}`)
     res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/circle', async(req, res) => {
  try {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api.akuari.my.id/canvas/circle?link=${link}`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/blur', async(req, res) => {
  try {
  var link = req.query.link


	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`hhttps://attp.api.akuari.my.id/cek/maker/blur?url=${link}`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/beautiful', async(req, res) => {
  try {
 var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/beautiful?url=${link}`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})


router.get('/affect', async(req, res) => {
  try {
 var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/affect?url=${link}`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/joke', async(req, res) => {
  try {
 var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/joke?url=${link}`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})
router.get('/shit', async(req, res) => {
  try {
 var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/shit?url=${link}`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/trash', async(req, res) => {
  try {
 var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/trash?url=${link}`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})











router.get('/ohno', async(req, res) => {
  try {
 var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter ?text='})
 
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/ohno?url=${text}`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})




router.get('/kiss', async(req, res) => {
  try {


var link1 = req.query.link1
  var link2 = req.query.link2

	if (!link1) return res.json({ message: 'Masukan parameter ?link1='})
  if (!link2) return res.json({ message: 'Masukan parameter &link2='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/kiss?url=${link1}&url2=${link2}`)
  res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/slap', async(req, res) => {
  try {


var link1 = req.query.link1
  var link2 = req.query.link2

	if (!link1) return res.json({ message: 'Masukan parameter ?link1='})
  if (!link2) return res.json({ message: 'Masukan parameter &link2='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/slap?url=${link1}&url2=${link2}`)
  res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})

router.get('/bed', async(req, res) => {
  try {


var link1 = req.query.link1
  var link2 = req.query.link2

	if (!link1) return res.json({ message: 'Masukan parameter ?link1='})
  if (!link2) return res.json({ message: 'Masukan parameter &link2='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/bed?url=${link1}&url2=${link2}`)
  res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})




router.get('/spank', async(req, res) => {
  try {
    var link1 = req.query.link1
  var link2 = req.query.link2


	if (!link1) return res.json({ message: 'Masukan parameter ?link1='})
  if (!link2) return res.json({ message: 'Masukan parameter &link2='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/spank?url=${link1}&url2=${link2}`)
     res.set({'Content-Type': 'png'}) 
       res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
   await apivisit()
})




module.exports = router
