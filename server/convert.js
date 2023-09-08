__path = process.cwd()
const express = require("express");
const fs = require('fs');
const fetch = require('node-fetch')
const FileType = require('file-type')
const router = express.Router()
const { ffmpeg, toAudio } = require('../lib/converter')
const axios = require('axios')
const { getBuffer } = require('../lib/function')

const deepai = require('deepai');
deepai.setApiKey('8d4a8257-af38-4502-a2bb-af1d1938090e');

const apivisit = require('../visitor/iki')

//Get Buffer
async function getFile(path) {
      let res
      let data = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (res = await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : typeof path === 'string' ? path : Buffer.alloc(0)
      if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
      let type = await FileType.fromBuffer(data) || {
        mime: 'application/octet-stream',
        ext: '.bin'
      }

      return {
        res,
        ...type,
        data
      }
    }

/**
 * Image to Webp
 * @param {String} url Image/Video URL
 */
 async function sticker(url) {
    if (url) {
      let res = await fetch(url)
      if (res.status !== 200) throw await res.text()
      img = await res.buffer()
    }
    return await ffmpeg(img, [
      '-vf', 'scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1'
    ], 'jpeg', 'webp')
   await apivisit()
  }

router.get('/towebp', async(req, res) => {
    var url = req.query.url
    var packname = req.query.packname
    var creator = req.query.creator
    var stc = await sticker(url)
    await fs.writeFileSync(__path + '/tmp/stc.webp', stc)
	await res.sendFile(__path + '/tmp/stc.webp')
   await apivisit()
})
router.get('/tomp3', async(req, res) => {
    var url = req.query.url 
    const Buffer = await fetch(url)
	  const getBuffer = await Buffer.buffer()
    let audio = await toAudio(getBuffer, 'mp4')
    await fs.writeFileSync(__path + '/tmp/audio.mp3', audio)
	await res.sendFile(__path + '/tmp/audio.mp3')
   await apivisit()
})
router.get('/toFile', async(req, res) => {
     var url = req.query.url 
     const buffer2 = await getFile(url)
     fs.writeFileSync(__path+ `/tmp/temp.${buffer2.ext}`, buffer2.data)
     res.sendFile(__path+ `/tmp/temp.${buffer2.ext}`)
  await sleep(3000)
    await fs.unlinkSync(__path + `/tmp/temp.${buffer2.ext}`)
   await apivisit()
})
router.get('/toFilezippy', async(req, res) => {
     var url = req.query.url 
   var filename = req.query.filename 
     const buffer2 = await getFile(url)
     fs.writeFileSync(__path+ `/tmp/${filename}`, buffer2.data)
  res.set('Content-Disposition', `attachment; filename="${filename}"`);
     res.sendFile(__path+ `/tmp/${filename}`)
  await sleep(3000)
    await fs.unlinkSync(__path+ `/tmp/${filename}`)
   await apivisit()
})



//Hilih Generator
router.get('/hilih', async(req, res) => {
var kata = req.query.kata 
if(!kata) return res.json({ message: `Masukan Parameter ?kata=` })
const lower = /[aiueo]/g
const upper = /[AIUEO]/g
const good = kata.replace(lower, 'i').replace(upper, 'I')
res.json({ status: 200, message: good })
   await apivisit()
})
//Hilih Generator
router.get('/heleh', async(req, res) => {
var kata = req.query.kata 
if(!kata) return res.json({ message: `Masukan Parameter ?kata=` })
const lower = /[aiueo]/g
const upper = /[AIUEO]/g
const good = kata.replace(lower, 'e').replace(upper, 'E')
res.json({ status: 200, message: good })
   await apivisit()
})

//Hilih Generator
router.get('/holoh', async(req, res) => {
var kata = req.query.kata 
if(!kata) return res.json({ message: `Masukan Parameter ?kata=` })
const lower = /[aiueo]/g
const upper = /[AIUEO]/g
const good = kata.replace(lower, 'o').replace(upper, 'O')
res.json({ status: 200, message: good })
   await apivisit()
})
//Hilih Generator
router.get('/halah', async(req, res) => {
var kata = req.query.kata 
if(!kata) return res.json({ message: `Masukan Parameter ?kata=` })
const lower = /[aiueo]/g
const upper = /[AIUEO]/g
const good = kata.replace(lower, 'a').replace(upper, 'A')
res.json({ status: 200, message: good })
   await apivisit()
})
router.get('/huluh', async(req, res) => {
var kata = req.query.kata 
if(!kata) return res.json({ message: `Masukan Parameter ?kata=` })
const lower = /[aiueo]/g
const upper = /[AIUEO]/g
const good = kata.replace(lower, 'a').replace(upper, 'A')
res.json({ status: 200, message: good })
   await apivisit()
})



router.get('/isporn', async(req, res) => {
  var img = req.query.img
  if (!img) return res.json({ 'message': 'masukan parameter img!'})
  var result = await axios.post(`https://api.deepai.org/api/nsfw-detector`, {
    image: img
});
   try {
    res.json({
       creator: `akuari.my.id`,
      hasil: result})
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  
  await apivisit()
})


module.exports = router
