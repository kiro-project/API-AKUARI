const express = require('express')
const axios = require('axios').default;
var router = express.Router();
const { getBuffer } = require('../lib/function')
const { RandomCerpen } = require('../scraper/ytdl3')
const api = require("caliph-api")
const fs = require('fs')
__path = process.cwd()

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const apivisit = require('../visitor/iki')
router.get('/quotespubg', async(req, res) => { 
 try {
   
	get_result = JSON.parse(fs.readFileSync(__path +'/lib/quostespubg.json'))
  get_resultas = get_result[Math.floor(Math.random() * get_result.length)]

		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resultas
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/bucin', async(req, res) => { 
 try {
   
	get_result = JSON.parse(fs.readFileSync(__path +'/lib/bucin.json'))
  get_resultas = get_result[Math.floor(Math.random() * get_result.length)]

		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resultas
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/pantun', async(req, res) => { 
 try {
   
	get_result = JSON.parse(fs.readFileSync(__path +'/lib/pantun.json'))
  get_resultas = get_result[Math.floor(Math.random() * get_result.length)]

		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resultas
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/truth', async(req, res) => { 
 try {
   
	get_result = JSON.parse(fs.readFileSync(__path +'/lib/truth.json'))
  get_resultas = get_result[Math.floor(Math.random() * get_result.length)]

		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resultas
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/dare', async(req, res) => { 
 try {
   
	get_result = JSON.parse(fs.readFileSync(__path +'/lib/dare.json'))
  get_resultas = get_result[Math.floor(Math.random() * get_result.length)]

		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resultas
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/faktaunik', async(req, res) => { 
 try {
   
	get_result = JSON.parse(fs.readFileSync(__path +'/lib/faktaunik.json'))
  get_resultas = get_result[Math.floor(Math.random() * get_result.length)]

		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resultas
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})



router.get('/quotesanime', async(req, res) => { 
 try {
	var result = await api.random.quotesanime()
	res.json({ 
    creator: `akuari.my.id`,
    result: result.result })
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})

router.get('/randomcerpen', async(req, res) => { 
 try {
  var result = await RandomCerpen()
  if (result > 1) return res.json({ message: 'error bro!' })
  res.json(result)
} catch(err) {
console.log(err) 
res.json({ message: 'Ups, error' }) 
}
  await apivisit()
})

router.get('/nickepep', async(req, res) => { 
 try {
	get_result = (await axios.get(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=MIMINGANZ`)).data

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

router.get('/cerpen', async(req, res) => { 
 try {
	get_result = (await axios.get(`https://leyscoders-api.herokuapp.com/api/cerpen?apikey=MIMINGANZ`)).data

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

router.get('/cerpen', async(req, res) => { 
 try {
	get_result = (await axios.get(`https://leyscoders-api.herokuapp.com/api/cerpen?apikey=MIMINGANZ`)).data

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

router.get('/faktaunik', async(req, res) => { 
 try {
	get_result = (await axios.get(`https://raw.githubusercontent.com/akuwaee/dbku/main/faktaunik.json`)).data
  get_resultasfaktaunik = get_result[Math.floor(Math.random() * get_result.length)]

		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resultasfaktaunik.data
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
"${vid[0].image}"

router.get('/bacott', async(req, res) => { 
 try {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/random/bacot.json`)).data
  get_resultas = get_result[Math.floor(Math.random() * get_result.length)]

  res.setHeader('Content-Type', '');
    res.send(`
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Rensponse API AKUARI</title>
  <link rel="stylesheet" href="https://cdn-api.akuari.my.id/result/style.css">

</head>
<body>

<main class="bsod container">
  <h1 class="neg title"><span class="bg">Response type Json:</span></h1>
  </main>
 <pre id="json">
{
  "creator": "akuari.my.id",
  "hasil": {
    "result": "${get_resultas.result}"
  }
}

 </pre>


  <script>
  (function() {
        var element = document.getElementById("json");
        var obj = JSON.parse(element.innerText);
        element.innerHTML = JSON.stringify(obj, undefined, 2);
    })();
    </script>

  
</body>
</html>
`);
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})


router.get('/bacot', async(req, res) => { 
 try {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/random/bacot.json`)).data
  get_resultas = get_result[Math.floor(Math.random() * get_result.length)]

		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resultas
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/katabijak', async(req, res) => { 
 try {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/random/katabijak.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]

		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resulta
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/katailham', async(req, res) => { 
 try {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/random/katailham.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]

		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resulta
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/pantunpakboy', async(req, res) => { 
 try {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/random/pantunpakboy.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]

		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resulta
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/sindiran', async(req, res) => { 
 try {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/random/sindiran.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]

		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resulta
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/tokohindo', async(req, res) => { 
 try {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/random/tokohindo.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]

		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resulta
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit() 
})

module.exports = router


