__path = process.cwd()
const express = require('express')
var router = express.Router();
const fs = require('fs')
const fetch = require('node-fetch')
const { getBuffer } = require('../lib/function')
const { maker } = require('../scraper/textproo')
const textpro = require("textproku");
const { photofunia_text } = require("../scraper/photofunia");
const apivisit = require('../visitor/iki')






const UrlTextpro = {
	neon: 'https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html',
    	dgolden: 'https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html',
  	christmas: 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html',
  	drainbow: 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html',
  	halloweenskeleton: 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html',
  	cinematichorror: 'https://textpro.me/create-a-cinematic-horror-text-effect-1045.html',
  	space: 'https://textpro.me/create-space-text-effects-online-free-1042.html',
  	transformer: 'https://textpro.me/create-a-transformer-text-effect-online-1035.html',
  	thunder: 'https://textpro.me/online-thunder-text-effect-generator-1031.html',
  	magma: 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html',
  summer: 'https://textpro.me/create-a-summer-text-effect-with-a-palm-tree-1083.html',
   summer2: 'https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html',
     business: 'https://textpro.me/3d-business-sign-text-effect-1078.html',
  lightglow: 'https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html',
    batman: 'https://textpro.me/make-a-batman-logo-online-free-1066.html',
      sketch: 'https://textpro.me/create-a-sketch-text-effect-online-1044.html',
  
  
	led: 'https://textpro.me/color-led-display-screen-text-effect-1059.html'
}




router.get('/sketch', async (req, res) => {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await textpro.textpro(UrlTextpro.sketch, text)
	try {
		var Buffer = await fetch(hasil.image, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
 res.set({'Content-Type': 'png'})
res.send(getBuffer)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/batman', async (req, res) => {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await textpro.textpro(UrlTextpro.batman, text)
	try {
		var Buffer = await fetch(hasil.image, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
 res.set({'Content-Type': 'png'})
res.send(getBuffer)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/lightglow', async (req, res) => {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await textpro.textpro(UrlTextpro.lightglow, text)
	try {
		var Buffer = await fetch(hasil.image, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
 res.set({'Content-Type': 'png'})
res.send(getBuffer)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/business', async (req, res) => {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await textpro.textpro(UrlTextpro.business, text)
	try {
		var Buffer = await fetch(hasil.image, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
 res.set({'Content-Type': 'png'})
res.send(getBuffer)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/summer2', async (req, res) => {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await textpro.textpro(UrlTextpro.summer2, text)
	try {
		var Buffer = await fetch(hasil.image, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
 res.set({'Content-Type': 'png'})
res.send(getBuffer)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/summer', async (req, res) => {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await textpro.textpro(UrlTextpro.summer, text)
	try {
		var Buffer = await fetch(hasil.image, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
 res.set({'Content-Type': 'png'})
res.send(getBuffer)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})



router.get('/neon-love', async (req, res) => {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await textpro.textpro(UrlTextpro.neon, text)
	try {
		var Buffer = await fetch(hasil.image, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
 res.set({'Content-Type': 'png'})
res.send(getBuffer)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/led', async (req, res) => {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await textpro.textpro(UrlTextpro.led, text)
	try {
		var Buffer = await fetch(hasil.image, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
 res.set({'Content-Type': 'png'})
res.send(getBuffer)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/3dgolden', async (req, res) => {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await textpro.textpro(UrlTextpro.dgolden, text)
	try {
		var Buffer = await fetch(hasil.image, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
 res.set({'Content-Type': 'png'})
res.send(getBuffer)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/christmas', async (req, res) => {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await textpro.textpro(UrlTextpro.christmas, text)
	try {
		var Buffer = await fetch(hasil.image, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
 res.set({'Content-Type': 'png'})
res.send(getBuffer)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/3drainbow', async (req, res) => {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await textpro.textpro(UrlTextpro.drainbow, text)
	try {
		var Buffer = await fetch(hasil.image, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
 res.set({'Content-Type': 'png'})
res.send(getBuffer)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/halloweenskeleton', async (req, res) => {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await textpro.textpro(UrlTextpro.halloweenskeleton, text)
	try {
		var Buffer = await fetch(hasil.image, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
 res.set({'Content-Type': 'png'})
res.send(getBuffer)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/space', async (req, res) => {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await textpro.textpro(UrlTextpro.space, text)
	try {
		var Buffer = await fetch(hasil.image, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
 res.set({'Content-Type': 'png'})
res.send(getBuffer)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/transformer', async (req, res) => {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await textpro.textpro(UrlTextpro.transformer, text)
	try {
		var Buffer = await fetch(hasil.image, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
 res.set({'Content-Type': 'png'})
res.send(getBuffer)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/thunder', async (req, res) => {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await textpro.textpro(UrlTextpro.thunder, text)
	try {
		var Buffer = await fetch(hasil.image, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
 res.set({'Content-Type': 'png'})
res.send(getBuffer)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})


router.get('/magma', async (req, res) => {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await textpro.textpro(UrlTextpro.magma, text)
	try {
		var Buffer = await fetch(hasil.image, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
 res.set({'Content-Type': 'png'})
res.send(getBuffer)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})














//text 2 









router.get('/cinematichorror', async (req, res) => {
	var text = req.query.text
	var text_2 = req.query.text_2
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	if (!text_2) return res.json({ message: 'Masukan parameter Text_2'})
  
		var hasil = await textpro.textpro(UrlTextpro.cinematichorror, 
                            [text, text_2])
      
	try {
		var Buffer = await fetch(hasil.image, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
 res.set({'Content-Type': 'png'})
res.send(getBuffer)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})



router.get('/scraper-1', async (req, res) => {
	var text = req.query.text
  	var link = req.query.link
	if (!text) return res.json({ message: 'masukan parameter Text' })
  	if (!link) return res.json({ message: 'masukan parameter Link' })
  try {
	var hasil = await textpro.textpro(link, text)

	res.json({
      creator: `akuari.my.id`,
      respon: hasil.image
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/scraper-2', async (req, res) => {
	var text = req.query.text
  var text2 = req.query.text2
  	var link = req.query.link
	if (!text) return res.json({ message: 'masukan parameter ?text=' })
  if (!text2) return res.json({ message: 'masukan parameter &text2=' })
  	if (!link) return res.json({ message: 'masukan parameter &link' })
  try {
	var hasil = await textpro.textpro(link, 
                            [text, text2])

	res.json({
      creator: `akuari.my.id`,
      respon: hasil.image
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/textpro-1', async (req, res) => {
	var text = req.query.text
  	var link = req.query.link
	if (!text) return res.json({ message: 'masukan parameter Text' })
  	if (!link) return res.json({ message: 'masukan parameter Link' })
	var hasil = await textpro.textpro(link, text)
	try {
		var Buffer = await fetch(hasil.image, {
		headers: {
		"User-Agent": "Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11"
		}
	})
	var getBuffer = await Buffer.buffer()
	await fs.writeFileSync(__path + '/tmp/image.jpg', getBuffer)
	res.sendFile(__path + '/tmp/image.jpg')
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/textpro-2', async (req, res) => {
	var text = req.query.text
  var text2 = req.query.text2
  	var link = req.query.link
	if (!text) return res.json({ message: 'masukan parameter ?text=' })
  if (!text2) return res.json({ message: 'masukan parameter &text2=' })
  	if (!link) return res.json({ message: 'masukan parameter &link' })
  try {
	var hasil = await textpro.textpro(link, 
                            [text, text2])
	
	res.json({
      creator: `akuari.my.id`,
      respon: hasil.image
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})


module.exports = router
