const express = require('express')
var router = express.Router();
const { getBuffer } = require('../lib/function')
const axios = require('axios')
const fetch = require('node-fetch')
var cheerio = require('cheerio');
var request = require('request');
const scrap = require("@bochilteam/scraper")
const { ttp, attp } = require('../scraper/info')
const { merdekaNews } = require('../scraper/merdekanews')
const fs = require('fs')
const remove = require('remove.bg')
const type = require("file-type");
__path = process.cwd()

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const FormData = require('form-data');

const ran = [1,2,3,4,5,6,7,8,9,0,11,22,33,44,55,66,77,88,99,00,12,23,34,45,56,67,78,90]
const randoma = Math.floor(Math.random() * ran.length)


const apivisit = require('../visitor/iki')


router.get('/removebg3', async(req, res) => { 

  var link = req.query.link
  if (!link) return res.json({ 'message': 'masukan parameter ?link='})
  
   const aaas = await getBuffer(`https://violetics.pw/api/media/removebg?apikey=3052-8f1f-72b5&img=${link}`)
  
    res.set({'Content-Type': 'png'})
    res.send(aaas)
    await apivisit()
})

router.get('/removhebg3', async(req, res) => { 

  var link = req.query.link
  if (!link) return res.json({ 'message': 'masukan parameter ?link='})
  const rann = randoma
  const aaasa = await getBuffer(link)

const data = new FormData();
data.append("file", fs.createReadStream(__path +`/tmp/remoebgmentah18.png`));
  
  const optionads = {
  method: 'POST',
  url: 'https://remove-bground.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '847f1d20d1mshfbbad191c5c6d13p10a3afjsn2cccd2a874f3',
    'X-RapidAPI-Host': 'remove-bground.p.rapidapi.com',
    ...data.getHeaders()
  },
  data: data
};

   const aaas = await axios.request(optionads)
  const aaasasr = getBuffer(aaas.data)
    await fs.writeFileSync(__path +`/tmp/remoebg3${rann}.png`, aaas)
    await res.sendFile(__path +`/tmp/remoebg3${rann}.png`)
  await sleep(9000)
  await fs.unlinkSync(__path +`/tmp/remoebg3${rann}.png`)
  
  await apivisit()
})


router.get('/removebg2', async(req, res) => { 

  var link = req.query.link
  if (!link) return res.json({ 'message': 'masukan parameter ?link='})
  
   const aaas = await getBuffer(`https://removebg.api.akuari.my.id/other/removebgg?gambar=${link}`)
  
    await fs.writeFileSync(__path +`/tmp/remoebg${randoma}.png`, aaas)
    await res.sendFile(__path +`/tmp/remoebg${randoma}.png`)
  await sleep(9000)
  await fs.unlinkSync(__path +`/tmp/remoebg${randoma}.png`)
  await apivisit()
})

router.get('/removebggg', async(req, res) => { 

  var link = req.query.link
  if (!link) return res.json({ 'message': 'masukan parameter ?link='})
    var buffer = await getBuffer(link)
 let { ext } = await type.fromBuffer(buffer);
var data = new FormData();
data.append("image_file", buffer, "image_file." + ext);

var config = {
  method: 'post',
  url: 'https://api.removal.ai/3.0/remove',
  headers: { 
    'Rm-Token': '64d36df2c06d08.85162098', 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
 
  await apivisit()
})


router.get('/removebg22', async(req, res) => { 

  var gambar = req.query.gambar
  if (!gambar) return res.json({ 'message': 'masukan parameter ?gambar!'})


  
const url = gambar
const outputFile = __path +`/tmp/img-removed-from-file.png`;

remove.removeBackgroundFromImageUrl({
  url,
  apiKey: "HP9J3hNFxprWwzdH4Vmo8a45",
  size: "regular",
  type: "person",
  outputFile
}).then((result) => {
 console.log(`File saved to ${outputFile}`)
  const base64img = result.base64img;

}).catch((errors) => {
 console.log(JSON.stringify(errors));
})

await res.redirect(remove.RemoveBgResult.base64img)

  await apivisit()
})
















async function shorts(url) {
  const res = await axios.get('https://tinyurl.com/api-create.php?url=' + url)
  return res.data
}

router.get('/nulis', async(req, res) => { 

  var text = req.query.text
  if (!text) return res.json({ 'message': 'masukan parameter text!'})
    const data = await getBuffer(`https://rya-kun.herokuapp.com/api/nulis?text=${text}`)
    await fs.writeFileSync(__path +'/tmp/nulis.png', data)
    await res.sendFile(__path +'/tmp/nulis.png')
  await apivisit()
})


router.get('/tiktokviews', async(req, res) => { 
 try {
  var link = req.query.link
  if (!link) return res.json({ 'message': 'masukan parameter ?link=https://www.tiktok.com/@bot-ari/video/701364345478173826'})
  	get_result = (await axios.get(`https://beli-followers-shop.ga/bot/proses.php?target=${link}&jmh=1000&idd=2241`)).data
       
             res.json({
                 status : true,
                 creator: `akuari.my.id`,
                 result : get_result
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidLink)
         }
  await apivisit()
})

router.get('/ttp', async(req, res) => { 

  var text = req.query.text
  if (!text) return res.json({ 'message': 'masukan parameter text!'})
    const data = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${encodeURI(text)}`)
    await fs.writeFileSync(__path +'/tmp/ttp.png', data)
    await res.sendFile(__path +'/tmp/ttp.png')
  await apivisit()
})

router.get('/ttp2', async(req, res) => { 
  var text = req.query.text
  if (!text) return res.json({ 'message': 'masukan parameter text!'})
 const kdfsl = await ttp(text)
    const data = await getBuffer(kdfsl.result)
    await fs.writeFileSync(__path +'/tmp/ttp.png', data)
    await res.sendFile(__path +'/tmp/ttp.png')
  await apivisit()
})


router.get('/attp3333', async (req, res) => { 

	var text = req.query.text
	if (!text ) return res.json({ status : false, message : "[!] masukan parameter ?text="})

const file = "./asset/attp.gif"

let length = text.length
		
var font = 90
if (length>12){ font = 68}
if (length>15){ font = 58}
if (length>18){ font = 55}
if (length>19){ font = 50}
if (length>22){ font = 48}
if (length>24){ font = 38}
if (length>27){ font = 35}
if (length>30){ font = 30}
if (length>35){ font = 26}
if (length>39){ font = 25}
if (length>40){ font = 20}
if (length>49){ font = 10}
Canvas.registerFont('./asset/SF-Pro.ttf', { family: 'SF-Pro' })
canvasGif(
	file,
	(ctx, width, height, totalFrames, currentFrame) => {

		var couler = ["#ff0000","#ffe100","#33ff00","#00ffcc","#0033ff","#9500ff","#ff00ff"]
		let jadi = couler[Math.floor(Math.random() * couler.length)]
	
	
		function drawStroked(text, x, y) {
			ctx.font = `${font}px SF-Pro`
			ctx.strokeStyle = 'black'
			ctx.lineWidth = 3
			ctx.textAlign = 'center'
			ctx.strokeText(text, x, y)
			ctx.fillStyle = jadi
			ctx.fillText(text, x, y)
		}
		
		drawStroked(text,290,300)

	},
	{
		coalesce: false, // whether the gif should be coalesced first (requires graphicsmagick), default: false
		delay: 0, // the delay between each frame in ms, default: 0
		repeat: 0, // how many times the GIF should repeat, default: 0 (runs forever)
		algorithm: 'neuquant', // the algorithm the encoder should use, default: 'neuquant',
		optimiser: false, // whether the encoder should use the in-built optimiser, default: false,
		fps: 7, // the amount of frames to render per second, default: 60
		quality: 1, // the quality of the gif, a value between 1 and 100, default: 100
	}
).then((buffer) =>{
res.set({'Content-Type': 'gif'})
res.send(buffer)

})
})






router.get('/attp', async(req, res) => { 
 try {
  var text = req.query.text
  if (!text) return res.json({ 'message': 'masukan parameter text!'})
    const data = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(text)}`)
     res.set({'Content-Type': 'gif'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})

router.get('/attp3', async(req, res) => { 
 try {
  var text = req.query.text
  if (!text) return res.json({ 'message': 'masukan parameter text!'})
    const data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/attp?text=${text}`)
    res.set({'Content-Type': 'gif'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})

router.get('/attp2', async(req, res) => { 
 try {
  var text = req.query.text
  if (!text) return res.json({ 'message': 'masukan parameter text!'})
   const data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/attp2?text=${text}`)
     res.set({'Content-Type': 'gif'})
res.send(data)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})



router.get('/removebg', async(req, res) => { 
 try {
  var link = req.query.link
  if (!link) return res.json({ 'message': 'masukan parameter link!'})
  let payload = { url: link };

    let resss = await axios.post('https://freemediatools.com/removebackgroundfromurl', payload)
 
resss = resss.data.path
  iki = await shorts(`https://freemediatools.com/download?path=${resss}`)
    
    res.json({
       creator: `akuari.my.id`,
      hasil: iki})
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})


router.get('/sshp', async(req, res) => { 
 try {
  var link = req.query.link
  if (!link) return res.json({ 'message': 'masukan parameter link!'})
    const dataao = (await axios.get(`https://shot.screenshotapi.net/screenshot?&url=https://api.akuari.my.id&width=400&height=667`)).data
   const afafd = await getBuffer(dataao.screenshot)
    await fs.writeFileSync(__path +'/tmp/ssweb1.png', afafd)
    await res.sendFile(__path +'/tmp/ssweb1.png')
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})

router.get('/ssweb', async(req, res) => { 
 try {
  var link = req.query.link
  if (!link) return res.json({ 'message': 'masukan parameter link!'})
    const dataa = (await axios.get(`https://shot.screenshotapi.net/screenshot?&url=${link}`)).data
    const afafd = await getBuffer(dataa.screenshot)
    await fs.writeFileSync(__path +'/tmp/ssweb.png', afafd)
    await res.sendFile(__path +'/tmp/ssweb.png')
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})

//Qrcode
router.get("/qrcode", (req, res) => { 

 var qr = require('qr-image')
 var text = req.query.text
 if(!text) return res.json({ message: 'Masukan Kata!' })
 var img = qr.image(text,{size :13});
 res.writeHead(200, {'Content-Type': 'image/png'});
 img.pipe(res);
});

//Meme
router.get('/meme', async (req, res) => { 
 try {
     const fetch = require('node-fetch')
     const subReddits = ["dankmeme", "meme", "memes"];
     const random = Math.floor(Math.random() * subReddits.length)
     var body = await fetch('https://www.reddit.com/r/' + subReddits[random] + '/random/.json')
     body = await body.json()
     const a = body[0]
     const title = a.data.children[0].data.title
     const url = 'https://reddit.com'+a.data.children[0].data.permalink
     const link = a.data.children[0].data.url_overridden_by_dest
     const ups = a.data.children[0].data.ups
     const comments = a.data.children[0].data.num_comments
     const sub = a.data.children[0].data.subreddit_name_prefixed
     const preview = a.data.children[0].data.preview
     return res.json({
         status: true,
         title: title, 
         url: url, 
         image: link, 
         ups: ups, 
         comments: comments 
    })
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
 })




router.get('/latinkeaksara', async (req, res) => { 
 try {
  var query = req.query.query
  if (!query) return res.json({ message: 'masukan parameter ?query=' })
  var hasil = await scrap.latinToAksara(query)
  
    res.json({
       creator: `akuari.my.id`,
      hasil: hasil})
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
   await apivisit()
})

router.get('/aksarakelatin', async (req, res) => { 
 try {
  var query = req.query.query
  if (!query) return res.json({ message: 'masukan parameter ?query=' })
  var hasil = await scrap.aksaraToLatin(query)
  
    res.json({
       creator: `akuari.my.id`,
      hasil: hasil})
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
module.exports = router
