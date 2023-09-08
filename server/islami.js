const express = require('express')
var router = express.Router();
const { getBuffer } = require('../lib/function')
const axios = require('axios')
const fetch = require('node-fetch')
const scrap = require("@bochilteam/scraper")
const fs = require('fs')
const moment = require('moment-timezone')
const atime = moment.tz('Asia/Jakarta').format('YYYY-MM-DD')
__path = process.cwd()

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const apivisit = require('../visitor/iki')

router.get('/asmaulhusna', async(req, res) => { 
 try {
	var waif = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/asmaulhusna.json`)).data
	var result = waif.result
  var result = waif.result[Math.floor(Math.random() * (waif.result.length))]

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

router.get('/ayatkursi', async(req, res) => { 
 try {
	var waif = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/ayatkursi.json`)).data

		res.json(
      
      waif
      )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/tahlil', async(req, res) => { 
 try {
	var waif = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/tahlil.json`)).data

		res.json(
      
      waif
      )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/niatshalat', async(req, res) => { 
 try {
	var waif = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/niatsahalat.json`)).data
  

		res.json(
      
      waif
      )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/kisahnabi', async(req, res) => { 
 try {
	var waif = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/kisahnabi.json`)).data
  var  get_result = waif[Math.floor(Math.random() * waif.length)]

		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_result
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/alquran', async(req, res) => { 
 try {
  var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
	var quran = (await axios.get(`https://raw.githubusercontent.com/orderku/QuranJSON/master/surah/${query}.json`)).data

		res.json({
      creator: `akuari.my.id`,
      result: quran
    })
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})


router.get('/jadwalshalat', async(req, res) => { 
 try {
  var query = req.query.query

  sdsf = `ambarawa, ambon, amlapura, amuntai, argamakmur, atambua, babo, bagan siapiapi, bahaur, kalteng, bajawa, balige, balikpapan, banda aceh, bandarlampung, bandung, bangkalan, bangkinang, bangko, bangli, banjar, banjar baru, banjarmasin, banjarnegara, bantaeng, banten, bantul, banyuwangi, barabai, barito, barru, batam, batang, batu, baturaja, batusangkar, baubau, bekasi, bengkalis, bengkulu, benteng, biak, bima, binjai, bireuen, bitung, blitar, blora, bogor, bojonegoro, bondowoso, bontang, boyolali, brebes, bukit tinggi, bula sbt, maluku, bulukumba, buntok, cepu, ciamis, cianjur, cibinong, cilacap, cilegon, cimahi, cirebon, curup, demak, denpasar, depok, dili, dompu, donggala, dumai, ende, enggano, enrekang, fakfak, garut, gianyar, gombong, gorontalo, gresik, gunung sitoli, indramayu, jakarta barat, jakarta pusat, jakarta selatan, jakarta timur, jakarta utara, jambi, jayapura, jember, jeneponto, jepara, jombang, kabanjahe, kalabahi, kalianda, kandangan, karanganyar, karawang, kasungan, kayuagung, kebumen, kediri, kefamenanu, kendal, kendari, kertosono, ketapang, kisaran, klaten, kolaka, kota baru pulau laut, kota bumi, kota jantho, kotamobagu, kuala kapuas, kuala kurun, kuala pembuang, kuala tungkal, kudus, kuningan, kupang, kutacane, kutoarjo, labuhan, lahat, lamongan, langsa, larantuka, lawang, lhoseumawe, limboto, lubuk basung, lubuk linggau, lubuk pakam, lubuk sikaping, lumajang, luwuk, madiun, magelang, magetan, majalengka, majene, makale, makassar, malang, mamuju, manna, manokwari, marabahan, maros, martapura kalsel, masamba, sulsel, masohi, mataram, maumere, medan, mempawah, menado, mentok, merauke, metro, meulaboh, mojokerto, muara bulian, muara bungo, muara enim, muara teweh, muaro sijunjung, muntilan, nabire, negara, nganjuk, ngawi, nunukan, pacitan, padang, padang panjang, padang sidempuan, pagaralam, painan, palangkaraya, palembang, palopo, palu, pamekasan, pandeglang, pangka_, pangkajene sidenreng, pangkalan bun, pangkalpinang, panyabungan, par_, parepare, pariaman, pasuruan, pati, payakumbuh, pekalongan, pekan baru, pemalang, pematangsiantar, pendopo, pinrang, pleihari, polewali, pondok gede, ponorogo, pontianak, poso, prabumulih, praya, probolinggo, purbalingga, purukcahu, purwakarta, purwodadigrobogan, purwokerto, purworejo, putussibau, raha, rangkasbitung, rantau, rantauprapat, rantepao, rembang, rengat, ruteng, sabang, salatiga, samarinda, sambas, kalbar, sampang, sampit, sanggau, sawahlunto, sekayu, selong, semarang, sengkang, serang, serui, sibolga, sidikalang, sidoarjo, sigli, singaparna, singaraja, singkawang, sinjai, sintang, situbondo, slawi, sleman, soasiu, soe, solo, solok, soreang, sorong, sragen, stabat, subang, sukabumi, sukoharjo, sumbawa besar, sumedang, sumenep, sungai liat, sungai penuh, sungguminasa, surabaya, surakarta, tabanan, tahuna, takalar, takengon, tamiang layang, tanah grogot, tangerang, tanjung balai, tanjung enim, tanjung pandan, tanjung pinang, tanjung redep, tanjung selor, tapak tuan, tarakan, tarutung, tasikmalaya, tebing tinggi, tegal, temanggung, tembilahan, tenggarong, ternate, tolitoli, tondano, trenggalek, tual, tuban, tulung agung, ujung berung, ungaran, waikabubak, waingapu, wamena, watampone, watansoppeng, wates, wonogiri, wonosari, wonosobo, yogyakarta`
  	if (!query) return res.json({ message: 'masukan parameter ?query=nama daerah',
                              list_daerah: sdsf})
	var quran = await scrap.jadwalsholat(query)

		res.json({
      creator: `akuari.my.id`,
      list_daerah: sdsf,
      hasil: quran
    })
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/listjadwalshalat', async(req, res) => { 
 try {
 sdsf = `ambarawa, ambon, amlapura, amuntai, argamakmur, atambua, babo, bagan siapiapi, bahaur, kalteng, bajawa, balige, balikpapan, banda aceh, bandarlampung, bandung, bangkalan, bangkinang, bangko, bangli, banjar, banjar baru, banjarmasin, banjarnegara, bantaeng, banten, bantul, banyuwangi, barabai, barito, barru, batam, batang, batu, baturaja, batusangkar, baubau, bekasi, bengkalis, bengkulu, benteng, biak, bima, binjai, bireuen, bitung, blitar, blora, bogor, bojonegoro, bondowoso, bontang, boyolali, brebes, bukit tinggi, bula sbt, maluku, bulukumba, buntok, cepu, ciamis, cianjur, cibinong, cilacap, cilegon, cimahi, cirebon, curup, demak, denpasar, depok, dili, dompu, donggala, dumai, ende, enggano, enrekang, fakfak, garut, gianyar, gombong, gorontalo, gresik, gunung sitoli, indramayu, jakarta barat, jakarta pusat, jakarta selatan, jakarta timur, jakarta utara, jambi, jayapura, jember, jeneponto, jepara, jombang, kabanjahe, kalabahi, kalianda, kandangan, karanganyar, karawang, kasungan, kayuagung, kebumen, kediri, kefamenanu, kendal, kendari, kertosono, ketapang, kisaran, klaten, kolaka, kota baru pulau laut, kota bumi, kota jantho, kotamobagu, kuala kapuas, kuala kurun, kuala pembuang, kuala tungkal, kudus, kuningan, kupang, kutacane, kutoarjo, labuhan, lahat, lamongan, langsa, larantuka, lawang, lhoseumawe, limboto, lubuk basung, lubuk linggau, lubuk pakam, lubuk sikaping, lumajang, luwuk, madiun, magelang, magetan, majalengka, majene, makale, makassar, malang, mamuju, manna, manokwari, marabahan, maros, martapura kalsel, masamba, sulsel, masohi, mataram, maumere, medan, mempawah, menado, mentok, merauke, metro, meulaboh, mojokerto, muara bulian, muara bungo, muara enim, muara teweh, muaro sijunjung, muntilan, nabire, negara, nganjuk, ngawi, nunukan, pacitan, padang, padang panjang, padang sidempuan, pagaralam, painan, palangkaraya, palembang, palopo, palu, pamekasan, pandeglang, pangka_, pangkajene sidenreng, pangkalan bun, pangkalpinang, panyabungan, par_, parepare, pariaman, pasuruan, pati, payakumbuh, pekalongan, pekan baru, pemalang, pematangsiantar, pendopo, pinrang, pleihari, polewali, pondok gede, ponorogo, pontianak, poso, prabumulih, praya, probolinggo, purbalingga, purukcahu, purwakarta, purwodadigrobogan, purwokerto, purworejo, putussibau, raha, rangkasbitung, rantau, rantauprapat, rantepao, rembang, rengat, ruteng, sabang, salatiga, samarinda, sambas, kalbar, sampang, sampit, sanggau, sawahlunto, sekayu, selong, semarang, sengkang, serang, serui, sibolga, sidikalang, sidoarjo, sigli, singaparna, singaraja, singkawang, sinjai, sintang, situbondo, slawi, sleman, soasiu, soe, solo, solok, soreang, sorong, sragen, stabat, subang, sukabumi, sukoharjo, sumbawa besar, sumedang, sumenep, sungai liat, sungai penuh, sungguminasa, surabaya, surakarta, tabanan, tahuna, takalar, takengon, tamiang layang, tanah grogot, tangerang, tanjung balai, tanjung enim, tanjung pandan, tanjung pinang, tanjung redep, tanjung selor, tapak tuan, tarakan, tarutung, tasikmalaya, tebing tinggi, tegal, temanggung, tembilahan, tenggarong, ternate, tolitoli, tondano, trenggalek, tual, tuban, tulung agung, ujung berung, ungaran, waikabubak, waingapu, wamena, watampone, watansoppeng, wates, wonogiri, wonosari, wonosobo, yogyakarta`

		res.json({
      creator: `akuari.my.id`,
      nama: sdsf
    })
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/doa', async(req, res) => { 
 try {
	var waif = (await axios.get(`https://raw.githubusercontent.com/akuwaee/dbku/main/randomdoa.json`)).data
	var result = waif.result
  var result = waif.result[Math.floor(Math.random() * (waif.result.length))]

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

router.get('/doa2', async(req, res) => { 
 try {
  var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter ?query=sebelum makan' })
	var quran = (await axios.get(`https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/${query}`)).data

		res.json({
      creator: `akuari.my.id`,
      hasil: quran
    })
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})



router.get('/renunganislam', async(req, res) => { 

	var waif = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/random/renunganislan.json`)).data
  var result = waif[Math.floor(Math.random() * (waif.length))]
	var data = await getBuffer(result.data)
    await fs.writeFileSync(__path +'/tmp/renunganislam.png', data)
    await res.sendFile(__path +'/tmp/renunganislam.png')
    await sleep(3000)
    await fs.unlinkSync(__path + '/tmp/renunganislam.png')
  await apivisit()
})

module.exports = router
