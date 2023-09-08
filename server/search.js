const express = require('express')
var router = express.Router();
const axios = require('axios').default;
__path = process.cwd()
const fs = require('fs')
const yts = require('yt-search')
var api = require("caliph-api")
const scrap = require("@bochilteam/scraper")
const { getBuffer } = require('../lib/function')
const youtubee = require('scrape-youtube');
const gplay = require("google-play-scraper");

const apivisit = require('../visitor/iki')




//scraper
const { pinterest, randomTiktok, konachan } = require('../scraper/index') 
const { wallpapercave, wallpaperscraft, wallpaperflare, alphacoders } = require('../scraper/wallpaper')
const { stickerSearch } = require('../scraper/stickerpack')
const { savetikVideo } = require('../scraper/savetik')
const { happymodSearch } = require('../scraper/happymod')
const { searchIlust } = require('../scraper/pixiv')
const { tiktokHastag } = require('../scraper/tiktok_search')
const { xnsearch } = require('../scraper/xnsearch')
const { quotes } = require('../scraper/cariquotes')
const { film , bingsearch , bingimage, drakor, wallpaperggpa } = require('../scraper/info')
const { wiki, wikimedia } = require('../scraper/wiki')
const { lirikLagu } = require('../scraper/lirik')
const { cerpen } = require('../scraper/cerpen')
const { carigc, sfilesearch, cariresep, bacaresep, palingmurah } = require('../scraper/scrapper')


async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
router.get('/gbard', async(req, res) => {
  
	var chat = req.query.chat
	if (!chat) return res.json({ message: 'masukan parameter ?chat=apa itu bot' })
   try {
     var result = await axios.get(`https://attp.api.akuari.my.id/cek/gbard?chat=${chat}`)
	res.json(
    {
       creator: `akuari.my.id`,
      respon: result.data.link
    })
   } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

router.get('/gpt', async(req, res) => {
  
	var chat = req.query.chat
	if (!chat) return res.json({ message: 'masukan parameter ?chat=apa itu bot' })
    try {
     var result = await axios.get(`https://attp.api.akuari.my.id/cek/gpt?chat=${chat}`)
	res.json(
    {
       creator: `akuari.my.id`,
      respon: result.data.link
    })
    } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})


router.get('/searchapk2', async (req, res) => {
  var query = req.query.query
  if (!query) return res.json({ message: 'masukan parameter query' })
  try {
      const era = await axios.get(`https://androidapksfree.com/?s=${query}`, {
              withCredentials: true
            })

  var sedarch = []
 const $gs = cheerio.load(era.data)
   $gs('html > body > div.main-wrap > div.main.wrap.cf > div > div > div > div > div.boxed-content > div.devapk-apps-list > section').each(function(a, b) {
    const link = $gs(b).find('h1 > a').attr('href')
      const title = $gs(b).find('h1').text()
       const update = $gs(b).find('div.date-on-tax').text()
  
  sedarch.push({ link, title , update })
     })

    res.json({
       creator: `akuari.my.id`,
      respon: sedarch
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
              
})


router.get('/searchmod2', async (req, res) => {
  var query = req.query.query
  if (!query) return res.json({ message: 'masukan parameter Link' })
try {
const eras = await axios.get(`https://rexdl.com/?s=${query}`, {
              withCredentials: true
            })
  var sedarch = []
 const $gs = cheerio.load(eras.data)
   $gs('#grid-wrapper > article > div.post-inner.post-hover > div.post-content > h2.post-title.entry-title').each(function(a, b) {
    const link = $gs(b).find('a').attr('href')
      const title = $gs(b).find('a').text()
  
  sedarch.push({ link, title })
     })

  
    res.json({
       creator: `akuari.my.id`,
      respon: sedarch
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})




router.get('/searchmod', async (req, res) => {
  var query = req.query.query
  if (!query) return res.json({ message: 'masukan parameter Link' })
  try {
const APIKEY = "6f070f15d0ba7756ac9e168b86ace9e0b5d6f696";
const eras = await axios.get(`https://latestmodapks.com/?s=${query}`, {
    headers: {
 'accept': 'application/json, text/plain, */*',
 'accept-language': 'en-US,en;q=0.9',
 'if-none-match': 'W/"2666-Zk3Sie7K34jZXASeZMxutI02+C4"',
 'origin': 'https://latestmodapks.com',
 'referer': 'https://latestmodapks.com/',
 'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
 'sec-ch-ua-mobile': '?0',
 'sec-ch-ua-platform': "Windows",
 'sec-fetch-dest': 'empty',
 'sec-fetch-mode': 'cors',
 'sec-fetch-site': 'same-site',
 'user-agent': 
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
}})
  var sedarch = []
 const $gs = cheerio.load(eras.data)
   $gs('#content > main > section.blog-section > div.container > div.flex-container > div.flex-item').each(function(a, b) {
    const link = $gs(b).find('a').attr('href')
const version = $gs(b).find('span.appver.dot').text()
      const title = $gs(b).find('h2').text()
  
  sedarch.push({ link, version, title })
     })


    res.json({
       creator: `akuari.my.id`,
      respon: sedarch
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})




router.get('/playstoresearch', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter ?query=' })
    try {
	var result = await gplay.search({
    term: query,
    num: 20
  })
	res.json({  
    creator: `akuari.my.id`,
    hasil: result
  })
      } catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})

router.get('/searchsoundcloud', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter ?query=' })
    try {
	var result = await api.search.soundcloud(query)
	res.json({  
    creator: `akuari.my.id`,
    hasil: result.result
  })
    	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})


router.get('/whatmusic', async(req, res) => {
	var link = req.query.link
	if (!link) return res.json({ message: 'masukan parameter ?link=' })
  try {
	var waif = (await axios.get(`https://violetics.pw/api/search/music-finder?apikey=df84-9d58-d034&audio=${link}`)).data

		res.json(
      { 
      creator: `akuari.my.id`,
      respon: waif.result
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/chord', async(req, res) => {
	var judul = req.query.judul
	if (!judul) return res.json({ message: 'masukan parameter ?judul=' })
  try {
	var waif = (await axios.get(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${judul}`)).data

		res.json(
      { 
      creator: `akuari.my.id`,
      respon: waif
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})



router.get('/google-reverse-image', async(req, res) => {
	var gambar = req.query.gambar
	if (!gambar) return res.json({ message: 'masukan parameter ?gambar=' })
    try {
	const options = {
  method: 'GET',
  url: 'https://google-reverse-image-search.p.rapidapi.com/imgSearch',
  params: {url: gambar},
  headers: {
    'X-RapidAPI-Key': 'c24f588507msh752b2ba6b917262p1e6615jsnf2360e6dc692',
    'X-RapidAPI-Host': 'google-reverse-image-search.p.rapidapi.com'
  }
};

result = (await axios.request(options)).data

	res.json({  
    creator: `akuari.my.id`,
    hasil: {
      imageurl: result.imgUrl,
      reversegoogle: result.googleSearchResult
    }
  })
  } catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})




router.get('/yandex-reverse-image', async(req, res) => {
	var gambar = req.query.gambar
	if (!gambar) return res.json({ message: 'masukan parameter ?gambar=' })
    try {
 sleep(2000)
	res.json({  
    imageurl: gambar,
      reverseyandex: `https://yandex.com/images/search?rpt=imageview&retpath=https%3A//%3Furw_794ef75b79b2fd7a3a7212139fbd1cf9&t=2/1620018739/0eaaf43acb786c634d717b775270b22e&s=17deee6df53be2903fbaaab4381894fe&url=${gambar}&rpt=imageview&fafgx=Furw_794ef75b79b2fd7a3a7212139fbd1cf9&t=2/1620018739/0eaaf43acb786c634d717b775270b22e&s=17deee6df53be2903fbaaab4381894fe`
  })
  } catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/whatmusic', async(req, res) => {
	var link = req.query.link
	if (!link) return res.json({ message: 'masukan parameter ?link=' })
  try {
     var result = await axios.get(`https://attp.api.akuari.my.id/cek/whatmusic?link=${link}`)
	res.json(result)
  } catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/whatanime', async(req, res) => {
	var link = req.query.link
	if (!link) return res.json({ message: 'masukan parameter ?link=' })
    try {
     var result = await axios.get(`https://api.trace.moe/search?cutBorders&url=${link}`)
	res.json({  
    creator: `akuari.my.id`,
    hasil: result.data
  })
  } catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/linestickerdl', async(req, res) => {
  
	var link = req.query.link
	if (!link) return res.json({ message: 'masukan parameter ?link=' })
    if (!link.match(/(https:\/\/store.line.me\/stickershop\/product\/)/gi)) return res.json({ message: 'link harus dari https://store.line.me/stickershop/product/ ' })
    try {
     var result = await axios.get(`https://attp.api.akuari.my.id/cek/linestickerdownloader?link=${link}`)
	res.json(result.data)} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})


router.get('/film', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter ?query=' })
      try {
	var result = await film(query)
	res.json({  
    creator: `akuari.my.id`,
    hasil: result
  })} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/cerpen', async(req, res) => {
	var kategori = req.query.kategori
	if (!kategori) return res.json({ message: 'masukan parameter ?query=' })
   try {
	var result = await cerpen(kategori)
	res.json({  
    creator: `akuari.my.id`,
    hasil: result
  })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/drakor', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter ?query=' })
   try {
	var result = await drakor(query)
	res.json({  
    creator: `akuari.my.id`,
    hasil: result
  })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/bingsearch', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter ?query=' })
    try {
	var result = await bingsearch(query)
	res.json({  
    creator: `akuari.my.id`,
    hasil: result
  })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/bingimage', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter ?query=' })
   try {
	var result = await bingimage(query)
	res.json({  
    creator: `akuari.my.id`,
    hasil: result
  })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/wikimedia', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter ?query=' })
  try {
	var result = await wikimedia(query)
	res.json({  
    creator: `akuari.my.id`,
    hasil: result
  }) 
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/wallpaper', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter ?query=' })
  try {
	var result = await wallpaperggpa(query)
	res.json({  
    creator: `akuari.my.id`,
    hasil: result
  })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/youtube', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter ?query=' })
  try {
	var result = await yts(query)
	res.json({  
    creator: `akuari.my.id`,
    hasil: result.all
  })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})


router.get('/palingmurah', async(req, res) => {
	var produk = req.query.produk
	if (!produk) return res.json({ message: 'masukan parameter ?produk=' })
  try {
	var result = await palingmurah(produk)
	res.json({  
    creator: `akuari.my.id`,
    hasil: result 
  })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/arti-kata', async(req, res) => {
  	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter ?query=' })
  try {
	get_result = (await axios.get(`https://leyscoders-api.herokuapp.com/api/arti-kata?q=${query}&apikey=MIMINGANZ`)).data

		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_result.result
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})



router.get('/cariresep', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter ?query=' })
  try {
	var result = await cariresep(query)
	res.json({  
    creator: `akuari.my.id`,
    hasil: result 
  })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/bacaresep', async(req, res) => {
	var link = req.query.link
	if (!link) return res.json({ message: 'masukan parameter ?link=' })
  try {
	var result = await bacaresep (link)
	res.json({  
    creator: `akuari.my.id`,
    hasil: result 
  })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/caribacaresep', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter ?query=' })
  try {
  var result = await cariresep(query)
    	const result1 = result.data[Math.floor(Math.random() * (result.data.length))]
	var result2 = await bacaresep (result1.link)

	res.json({ 
    creator: `akuari.my.id`,
    hasil: result2 
  })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/nik-checker', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter ?query=' })
try {
  var resultt = (await   axios.get(`https://leyscoders-api.herokuapp.com/api/nik-checker?q=${query}&apikey=MIMINGANZ`)).data

	res.json({
      creator: `akuari.my.id`,
      respon: resultt.result
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()

})





//Biar Result nya 20
//Disable Console Log


router.get('/google', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
  try {
	var google = require('google-it')
	var result = google({'query' : `${query}`, limit: 20 }).then(result => {
	res.json({ 
    creator: `akuari.my.id`,
    result: result 
    })
	})
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})     


router.get('/xnxxsearch', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
	var result = await xnsearch(query)
	res.json({ result })
})

router.get('/quotes', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
  try {
	var result = await quotes(query)
	res.json({ result })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/lirik', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
    try {
	var result = await lirikLagu(query)
	res.json({ 
    creator: `akuari.my.id`,
    result: result 
    })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/carigc', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
  try {
	var result = await carigc(query)
	res.json({ 
    creator: `akuari.my.id`,
    result: result 
    })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/sfilesearch', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
  try {
	var result = await sfilesearch(query)
	res.json({ 
    creator: `akuari.my.id`,
    result: result 
    })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/wiki', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
   try {
	var result = await wiki(query)
	res.json({ 
    creator: `akuari.my.id`,
    result: result 
    })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})


router.get('/pinterest', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
   try {
	var result = await pinterest(query)
	res.json({ 
    creator: `akuari.my.id`,
    result: result })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/pixiv', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
   try {
	var result = await searchIlust(query)
	res.json({ 
    creator: `akuari.my.id`,
    result: result })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/konachan', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
   try {
	var img = await konachan(query)
	const result = img[Math.floor(Math.random() * (img.length))]
	var data = await getBuffer(result)
    	await fs.writeFileSync(__path +'/tmp/konachan.png', data)
   	await res.sendFile(__path +'/tmp/konachan.png')
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/alphacoders', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
   try {
	var img = await alphacoders(query)
	const result = img[Math.floor(Math.random() * (img.length))]
	var data = await getBuffer(result)
    	await fs.writeFileSync(__path +'/tmp/image.png', data)
   	await res.sendFile(__path +'/tmp/image.png')
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/wallpapercave', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
   try {
	var img = await wallpapercave(query)
	const result = img[Math.floor(Math.random() * (img.length))]
	var data = await getBuffer(result)
    	await fs.writeFileSync(__path +'/tmp/image.png', data)
   	await res.sendFile(__path +'/tmp/image.png')
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/wallpaperr', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
  try {
	var img = await scrap.wallpaperv3(query)
	const result = img[Math.floor(Math.random() * (img.length))]
	var data = await getBuffer(result)
    	await fs.writeFileSync(__path +'/tmp/image.png', data)
   	await res.sendFile(__path +'/tmp/image.png')
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/wallpaperflare', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
  try {
	var img = await wallpaperflare(query)
	const result = img[Math.floor(Math.random() * (img.length))]
	var data = await getBuffer(result)
    	await fs.writeFileSync(__path +'/tmp/image.png', data)
   	await res.sendFile(__path +'/tmp/image.png')
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/tiktok', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
  try {
	var result = await tiktokHastag(query)
	res.json({ result })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/tiktokHastag', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
  try {
	var result = await randomTiktok(query)
	res.json({ result })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/randomtiktok', async(req, res) => {
  try {
	var result = await savetikVideo()
	res.json({ result })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/happymod', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
  try {
	var result = await happymodSearch(query)
	res.json({ 
    creator: `akuari.my.id`,
    result: result })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/sticker', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
  try {
	var result = await stickerSearch(query)
	res.json({ 
    creator: `akuari.my.id`,
    result: result })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/stickertelegram', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
  try {
	var result = await scrap.stickerTelegram(query)
	res.json({ 
    creator: `akuari.my.id`,
    result: result })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/googleimage', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
  try {
	var result = await scrap.googleImage(query)
	res.json({ 
    creator: `akuari.my.id`,
    result: result })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/wallpaper3', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
  try {
	var result = await scrap.wallpaperv3(query)
	res.json({ 
    creator: `akuari.my.id`,
    result: result })
} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

module.exports = router
