__path = process.cwd()
const express = require('express')
var router = express.Router();
const fs = require('fs')
const axios = require('axios')
const fetch = require('node-fetch')
const { getBuffer } = require('../lib/function')
const { ephoto1 } = require('../scraper/ephoto/ephoto1')
const { ephoto3 } = require('../scraper/ephoto/ephoto2')
const { ephotoradio1 } = require('../scraper/ephoto/ephotoradio1')

const apivisit = require('../visitor/iki')


const UrlEphoto = {
	captainamerica: 'https://en.ephoto360.com/create-a-cinematic-captain-america-text-effect-online-715.html',
    	blackpink: 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html',
  	angel: 'https://en.ephoto360.com/create-colorful-angel-wing-avatars-731.html',
  	queen: 'https://en.ephoto360.com/create-a-personalized-queen-card-avatar-730.html',
  	anonymous: 'https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html',
  	graffiti: 'https://en.ephoto360.com/create-a-graffiti-text-effect-on-the-wall-online-665.html',
  	mountain: 'https://en.ephoto360.com/triangle-mountain-logo-black-white-566.html',
  	pornhub: 'https://en.ephoto360.com/create-pornhub-style-logos-online-free-549.html',
  	teamlogo: 'https://en.ephoto360.com/create-an-online-team-logo-in-black-and-white-style-689.html',
  	bear: 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html',
  avengers: 'https://en.ephoto360.com/create-logo-3d-style-avengers-online-427.html',
  
	teamlogoninja: 'https://en.ephoto360.com/create-logo-team-logo-gaming-assassin-style-574.html',
  futuristictechnology: 'https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html',
  style1917: 'https://en.ephoto360.com/1917-style-text-effect-523.html',
    purple: 'https://en.ephoto360.com/purple-text-effect-online-100.html',
  
  pixelglitch: 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
}

router.get('/scraper-1', async (req, res) => { 
 try {
	var text = req.query.text
  	var link = req.query.link
	if (!text) return res.json({ message: 'masukan parameter Text' })
  	if (!link) return res.json({ message: 'masukan parameter Link' })
	var hasil = await ephoto1(link, text)
	
	res.json({
      creator: `akuari.my.id`,
      respon: `https://e1.yotools.net${hasil.image}`
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/scraper-2', async (req, res) => { 
 try {
	var text = req.query.text
  var text2 = req.query.text2
  	var link = req.query.link
	if (!text) return res.json({ message: 'masukan parameter ?text=' })
  if (!text2) return res.json({ message: 'masukan parameter &text2=' })
  	if (!link) return res.json({ message: 'masukan parameter &link' })
	var hasil = await ephoto3(link, 
                            [text, text2])
	
	res.json({
      creator: `akuari.my.id`,
      respon: `https://e1.yotools.net${hasil.image}`
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})



router.get('/blackpink', async (req, res) => { 
 try {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await ephoto1(UrlEphoto.blackpink, text)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
       res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/bear', async (req, res) => { 
 try {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await ephoto1(UrlEphoto.bear, text)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
   res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})


router.get('/pixel-glitch', async (req, res) => { 
 try {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await ephoto1(UrlEphoto.pixelglitch, text)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
    res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/style-1917', async (req, res) => { 
 try {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await ephoto1(UrlEphoto.style1917, text)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
   res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/purple', async (req, res) => { 
 try {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  
	var hasil = await ephoto1(UrlEphoto.purple, text)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
 res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})













// text 1 dengan radio pilihan

router.get('/futuristic-technology', async (req, res) => { 
 try {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  radio = "05acf523-6deb-4b9d-bb28-abc4354d0858"
	var hasil = await ephotoradio1(UrlEphoto.futuristictechnology, [text], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
   res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/futuristic-technology2', async (req, res) => { 
 try {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  radio = "d951e4be-450e-4658-9e73-0f7c82c63ee3"
	var hasil = await ephotoradio1(UrlEphoto.futuristictechnology, [text], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
   res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/futuristic-technology3', async (req, res) => { 
 try {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  radio = "a5b374f3-2f29-4da4-ae15-32dec01198e2"
	var hasil = await ephotoradio1(UrlEphoto.futuristictechnology, [text], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
    res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/angel', async (req, res) => { 
 try {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  radio = "c542dab0-ea54-44a5-9976-c6af66f71d9c"
	var hasil = await ephotoradio1(UrlEphoto.angel, [text], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
   res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/queen', async (req, res) => { 
 try {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  radio = "8ddd2a19-a5b5-4429-b23e-0c80dafa7979"
	var hasil = await ephotoradio1(UrlEphoto.queen, [text], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
    res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/team-logo-ninja-1', async (req, res) => { 
 try {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  radio = "3b127227-eda0-4b85-90b6-d3ebd863335f"
	var hasil = await ephotoradio1(UrlEphoto.teamlogoninja, [text], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
  res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/team-logo-ninja-2', async (req, res) => { 
 try {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  radio = "34f5fb21-98af-4064-b65f-d0fd193e83d2"
	var hasil = await ephotoradio1(UrlEphoto.teamlogoninja, [text], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
   res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/team-logo-ninja-3', async (req, res) => { 
 try {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  radio = "4dba4686-04f7-4e0c-a9bd-d73e51e1ef05"
	var hasil = await ephotoradio1(UrlEphoto.teamlogoninja, [text], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/team-logo-ninja-4', async (req, res) => { 
 try {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  radio = "87f0f8f1-fa23-4417-8a94-ba6c0b371635"
	var hasil = await ephotoradio1(UrlEphoto.teamlogoninja, [text], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
   res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/team-logo-ninja-5', async (req, res) => { 
 try {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  radio = "ced7cbe7-f8e5-4db1-b1cd-cb13d1dd1d52"
	var hasil = await ephotoradio1(UrlEphoto.teamlogoninja, [text], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
 res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/team-logo-ninja-6', async (req, res) => { 
 try {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  radio = "f42255ff-a569-41a0-8f33-acc269a52921"
	var hasil = await ephotoradio1(UrlEphoto.teamlogoninja, [text], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
   res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/team-logo-ninja-7', async (req, res) => { 
 try {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  radio = "8a37f145-b22f-4054-9eb4-113d84129a08"
	var hasil = await ephotoradio1(UrlEphoto.teamlogoninja, [text], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
   res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

  router.get('/team-logo-ninja-8', async (req, res) => { 
 try {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  radio = "5c650d06-328d-486e-8f4a-311eb5942001"
	var hasil = await ephotoradio1(UrlEphoto.teamlogoninja, [text], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
   res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/team-logo-ninja-9', async (req, res) => { 
 try {
	var text = req.query.text

	if (!text) return res.json({ message: 'masukan parameter Text' })
  radio = "387613b1-57d5-4afd-8856-64b4a5aec241"
	var hasil = await ephotoradio1(UrlEphoto.teamlogoninja, [text], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
   res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})










//text 2 







router.get('/avengers', async (req, res) => { 
 try {
	var text = req.query.text
	var text_2 = req.query.text_2
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	if (!text_2) return res.json({ message: 'Masukan parameter Text_2'})
  
		var hasil = await ephoto3(UrlEphoto.avengers, 
                            [text, text_2])
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
  res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/captainamerica', async (req, res) => { 
 try {
	var text = req.query.text
	var text_2 = req.query.text_2
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	if (!text_2) return res.json({ message: 'Masukan parameter Text_2'})
  
		var hasil = await ephoto3(UrlEphoto.captainamerica, 
                            [text, text_2])
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
    res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/graffiti', async (req, res) => { 
 try {
	var text = req.query.text
	var text_2 = req.query.text_2
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	if (!text_2) return res.json({ message: 'Masukan parameter Text_2'})
  
		var hasil = await ephoto3(UrlEphoto.graffiti, 
                            [text, text_2])
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
     res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/pornhub', async (req, res) => { 
 try {
	var text = req.query.text
	var text_2 = req.query.text_2
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	if (!text_2) return res.json({ message: 'Masukan parameter Text_2'})
  
		var hasil = await ephoto3(UrlEphoto.pornhub, 
                            [text, text_2])
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
    res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})








// 2 text dengan radio pilihan


router.get('/mountain', async (req, res) => { 
 try {
	var text = req.query.text
	var text_2 = req.query.text_2
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	if (!text_2) return res.json({ message: 'Masukan parameter Text_2'})
    radio = "c1f65062-2211-415d-9e47-5584f4d73633"
		var hasil = await ephotoradio1(UrlEphoto.mountain, 
                            [text, text_2], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
     res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/team-logo-cobra', async (req, res) => { 
 try {
	var text = req.query.text
	var text_2 = req.query.text_2
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	if (!text_2) return res.json({ message: 'Masukan parameter Text_2'})
    radio = "6443c02a-f4b3-4b78-9f07-c4754167e5c0"
		var hasil = await ephotoradio1(UrlEphoto.teamlogo, 
                            [text, text_2], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
   res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})



router.get('/team-logo-elang', async (req, res) => { 
 try {
	var text = req.query.text
	var text_2 = req.query.text_2
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	if (!text_2) return res.json({ message: 'Masukan parameter Text_2'})
    radio = "3d2f7a4e-611e-412c-8aa9-442593f55c47"
		var hasil = await ephotoradio1(UrlEphoto.teamlogo, 
                            [text, text_2], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
    res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/team-logo-singa', async (req, res) => { 
 try {
	var text = req.query.text
	var text_2 = req.query.text_2
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	if (!text_2) return res.json({ message: 'Masukan parameter Text_2'})
    radio = "5bf8819b-2e7b-4266-ab5d-dfdaca9baf8a"
		var hasil = await ephotoradio1(UrlEphoto.teamlogo, 
                            [text, text_2], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
   res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/team-logo-macan', async (req, res) => { 
 try {
	var text = req.query.text
	var text_2 = req.query.text_2
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	if (!text_2) return res.json({ message: 'Masukan parameter Text_2'})
    radio = "e864926c-8ab5-444b-bfa0-a6841efd29be"
		var hasil = await ephotoradio1(UrlEphoto.teamlogo, 
                            [text, text_2], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
    res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/team-logo-banteng', async (req, res) => { 
 try {
	var text = req.query.text
	var text_2 = req.query.text_2
	if (!text) return res.json({ message: 'Masukan parameter Text'})
	if (!text_2) return res.json({ message: 'Masukan parameter Text_2'})
    radio = "c38debdd-0a68-4380-8632-408b9333a562"
		var hasil = await ephotoradio1(UrlEphoto.teamlogo, 
                            [text, text_2], radio)
	
data = await getBuffer(`https://e1.yotools.net${hasil.image}`)
  res.set({'Content-Type': 'png'})
res.send(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})






module.exports = router
