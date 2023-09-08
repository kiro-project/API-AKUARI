__path = process.cwd()

var express = require('express');
var router = express.Router();
const axios = require('axios')
async function apivisit() {
  try {
  axios.get(`https://akuari.my.id/visitor/gg.php`)
  } catch (err) {
    console.log(`error visitor`)
  }
}

router.get('/status', async(req, res) => {
	res.send(`<iframe src="https://stats.uptimerobot.com/YqXRpF3MPJ" height="100px"></iframe>`)
})

router.get('/cronjob-cpanel', async(req, res) => {
	res.send({status: `GG Server Tidak merespon`})
    await apivisit()
})

router.get('/req/admin', async(req, res) => {
	res.sendFile(__path + '/views/req-admin.html')
})

router.get('/req', async(req, res) => {
	res.sendFile(__path + '/views/req.html')
})

router.get('/docs', async(req, res) => {
	res.sendFile(__path + '/views/index.html')
})

router.get('/upload', async(req, res) => {
	res.sendFile(__path + '/views/upload.html')
})

router.get('/sitemap.xml', async(req, res) => {
	res.sendFile(__path + '/views/sitemap.xml')
})

router.get('/tessc', async(req, res) => {
	res.sendFile(__path + '/views/tessc.html')
})


router.get('/kolamm.mp3', async(req, res) => {
	res.sendFile(__path + '/views/kolamm.mp3')
})

router.get('/atom.xml', async(req, res) => {
	res.sendFile(__path + '/views/atom.xml')
})
router.get('/main.js', async(req, res) => {
	res.sendFile(__path + '/views/main.js')
})
router.get('/', async(req, res) => {
	res.sendFile(__path + '/views/welcom.html')
})
router.get('/contac', async(req, res) => {
	res.sendFile(__path + '/views/contac.html')
})
router.get('/h-removeng.png', async(req, res) => {
	res.sendFile(__path + '/tmp/img-removed-from-file.png')
})
router.get('/welcome.gif', async(req, res) => {
	res.sendFile(__path + '/views/welcome.gif')
})
router.get('/sewa.png', async(req, res) => {
	res.sendFile(__path + '/views/sewa.png')
})
router.get('/slider.css', async(req, res) => {
	res.sendFile(__path + '/views/slider.css')
})

router.get('/logo.jpg', async(req, res) => {
	res.sendFile(__path + '/views/logo.jpg')
})
router.get('/nicepage.css', async(req, res) => {
	res.sendFile(__path + '/views/nicepage.css')
})
router.get('/faq', async(req, res) => {
	res.sendFile(__path + '/views/faq.html')
})
router.get('/akses', async(req, res) => {
	res.sendFile(__path + '/akses/index.php')
})
router.get('/googlecd1952beb010ed3c.html', async(req, res) => {
	res.sendFile(__path + '/views/googlecd1952beb010ed3c.html')
})


//Kalo page yang di cari engga ada, nanti muncul ini:v




router.use(function (req, res) {
res.status(404)
.sendFile(__path + '/views/404.html')
});

router.use(function (req, res) {
res.status(408)
.sendFile(__path + '/views/iki.html')
});

router.use(function (req, res) {
res.status(400)
.sendFile(__path + '/views/iki.html')
});

router.use(function (req, res) {
res.status(500).send({status: `500 Server Tidak merespon`})
});

router.use(function (req, res) {
res.status(501).send({status: `500 Server Tidak merespon`})
});


router.use(function (req, res) {
res.status(502).send({status: `500 Server Tidak merespon`})
});

router.use(function (req, res) {
res.status(503).send({status: `500 Server Tidak merespon`})
});

router.use(function (req, res) {
res.status(504).send({status: `500 Server Tidak merespon`})
});

router.use(function (req, res) {
res.status(505).send({status: `500 Server Tidak merespon`})
});

router.use(function (req, res) {
res.status(524).send({status: `500 Server Tidak merespon`})
});







router.use(function (req, res) {
res.status(522).send('522 Server Tidak merespon')
});

  
module.exports = router
