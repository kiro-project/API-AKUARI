const express = require('express')
var router = express.Router();
const axios = require('axios')
const fetch = require('node-fetch')
const scrap = require("@bochilteam/scraper")
const fs = require('fs')
const { getBuffer } = require('../lib/function')
const { cerpen } = require('../scraper/cerpen')
const brainly = require('brainly-scraper');
const translate = require('translate-google')
const cheerio = require('cheerio');


async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const apivisit = require('../visitor/iki')

router.get('/kbbi', async(req, res) => { 

    try {
     var query = req.query.query

	if (!query) return res.json({ message: 'Masukan parameter ?query='})


   
 let dataError = {
   creator: `akuari.my.id`,
        message: 'Kata tidak ditemukan!',
        error: true,
        hasil: {}
    };

    var _format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (_format.test(query)) return res.json(dataError);

        const response = await axios.get(`https://kbbi.kemdikbud.go.id/entri/${query}`);

        if (response.status === 200) {
            const resData = response.data;
            const $ = cheerio.load(resData);
            let hasil = {
                arti: null,
                title: null
            };

            $('.container').filter(function (a, b) {
                hasil.title = $(this).find('h2').text().trim() == ''
                    ? null
                    : $(this).find('h2').text().trim();

                hasil.arti = $(this).find('li').eq(0).text().replace(/\s+/g, ' ').trim() == ''
                    ? null
                    : $(this).find('li').eq(0).text().replace(/\s+/g, ' ').trim();
            });

            let finalHasil = {
                creator: `akuari.my.id`,
                error: false,
                hasil: hasil
            };

            if (hasil.arti !== 'memudahkan pencarian Anda melalui berbagai fitur yang hanya tersedia bagi pengguna terdaftar') {
                if (hasil.arti === null || hasil.title === null) return res.json(dataError);
                res.json(finalHasil);
            } else {
                res.json(dataError);
            }
        } else {
            res.status(response.status).json(dataError);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
 

  await apivisit()
})

router.get('/cerpen/anak', async(req, res) => { 
 try {

  hasil = await cerpen(`cerpen-anak`)
	

		res.json(
      { 
      creator: `akuari.my.id`,
      hasil
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/cerpen/bahasa-daerah', async(req, res) => { 
 try {

  hasil = await cerpen(`cerpen-bahasa-daerah`)
	

		res.json(
      { 
      creator: `akuari.my.id`,
      hasil
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/cerpen/bahasa-inggris', async(req, res) => { 
 try {

  hasil = await cerpen(`cerpen-bahasa-inggris`)
	

		res.json(
      { 
      creator: `akuari.my.id`,
      hasil
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/cerpen/jawa', async(req, res) => { 
 try {

  hasil = await cerpen(`cerpen-jawa`)
	

		res.json(
      { 
      creator: `akuari.my.id`,
      hasil
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/cerpen/sunda', async(req, res) => { 
 try {

  hasil = await cerpen(`cerpen-sunda`)
	

		res.json(
      { 
      creator: `akuari.my.id`,
      hasil
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/cerpen/budaya', async(req, res) => { 
 try {

  hasil = await cerpen(`cerpen-budaya`)
	

		res.json(
      { 
      creator: `akuari.my.id`,
      hasil
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/cerpen/cinta', async(req, res) => { 
 try {

  hasil = await cerpen(`cerpen-cinta`)
	

		res.json(
      { 
      creator: `akuari.my.id`,
      hasil
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/cerpen/islami', async(req, res) => { 
 try {

  hasil = await cerpen(`cerpen-cinta-islami`)
	

		res.json(
      { 
      creator: `akuari.my.id`,
      hasil
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/cerpen/fantasi-fiksi', async(req, res) => { 
 try {

  hasil = await cerpen(`cerpen-fantasi-fiksi`)
	

		res.json(
      { 
      creator: `akuari.my.id`,
      hasil
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/cerpen/galau', async(req, res) => { 
 try {

  hasil = await cerpen(`cerpen-galau`)
	

		res.json(
      { 
      creator: `akuari.my.id`,
      hasil
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/cerpen/horor', async(req, res) => { 
 try {

  hasil = await cerpen(`cerpen-horor-hantu`)
	

		res.json(
      { 
      creator: `akuari.my.id`,
      hasil
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/cerpen/inspiratif', async(req, res) => { 
 try {

  hasil = await cerpen(`cerpen-inspiratif`)
	

		res.json(
      { 
      creator: `akuari.my.id`,
      hasil
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/cerpen/kristen', async(req, res) => { 
 try {

  hasil = await cerpen(`cerpen-kristen`)
	

		res.json(
      { 
      creator: `akuari.my.id`,
      hasil
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/cerpen/remaja', async(req, res) => { 
 try {

  hasil = await cerpen(`cerpen-remaja`)
	

		res.json(
      { 
      creator: `akuari.my.id`,
      hasil
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/cerpen/persahabatan', async(req, res) => { 
 try {

  hasil = await cerpen(`cerpen-persahabatan`)
	

		res.json(
      { 
      creator: `akuari.my.id`,
      hasil
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/cerpen/misteri', async(req, res) => { 
 try {

  hasil = await cerpen(`cerpen-misteri`)
	

		res.json(
      { 
      creator: `akuari.my.id`,
      hasil
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})











router.get('/brainly', async(req, res) => { 
 try {
  var query = req.query.query

	if (!query) return res.json({ message: 'Masukan parameter ?query='})

  hasil = await brainly(query)
	

		res.json(
      { 
      creator: `akuari.my.id`,
      hasil
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/tambah', async(req, res) => { 
 try {
  var angka1 = req.query.angka1
if (!angka1) return res.json({ message: 'Masukan parameter ?angka1='})
    var angka2 = req.query.angka2
if (!angka2) return res.json({ message: 'Masukan parameter &angka2='})

  hasil = angka1 + angka2
	

		res.json(
      { 
      creator: `akuari.my.id`,
      soal: `Penjumlahan ${angka1} + ${angka2}`,
      hasil: `${hasil}`
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/kurang', async(req, res) => { 
 try {
  var angka1 = req.query.angka1
if (!angka1) return res.json({ message: 'Masukan parameter ?angka1='})
    var angka2 = req.query.angka2
if (!angka2) return res.json({ message: 'Masukan parameter &angka2='})

  hasil = angka1 - angka2
	

		res.json(
      { 
      creator: `akuari.my.id`,
      soal: `Pengurangan ${angka1} - ${angka2}`,
      hasil: `${hasil}`
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/kali', async(req, res) => { 
 try {
  var angka1 = req.query.angka1
if (!angka1) return res.json({ message: 'Masukan parameter ?angka1='})
    var angka2 = req.query.angka2
if (!angka2) return res.json({ message: 'Masukan parameter &angka2='})

  hasil = angka1 * angka2
	

		res.json(
      { 
      creator: `akuari.my.id`,
      soal: `Perkalian ${angka1} x ${angka2}`,
      hasil: `${hasil}`
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/bagi', async(req, res) => { 
 try {
  var angka1 = req.query.angka1
if (!angka1) return res.json({ message: 'Masukan parameter ?angka1='})
    var angka2 = req.query.angka2
if (!angka2) return res.json({ message: 'Masukan parameter &angka2='})

  hasil = angka1 / angka2
	

		res.json(
      { 
      creator: `akuari.my.id`,
      soal: `Pembagian ${angka1} : ${angka2}`,
      hasil: `${hasil}`
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})


router.get('/akar', async(req, res) => { 
 try {
  var angka = req.query.angka
if (!angka) return res.json({ message: 'Masukan parameter ?angka='})
 

  hasil = Math.sqrt(angka)
	

		res.json(
      { 
      creator: `akuari.my.id`,
      soal: `Akar Quadrat dari ${angka}`,
      hasil: `${hasil}`
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/pangkat', async(req, res) => { 
 try {
  var angka = req.query.angka
if (!angka) return res.json({ message: 'Masukan parameter ?angka='})

   var pangkat = req.query.pangkat
if (!pangkat) return res.json({ message: 'Masukan parameter ?pangkat='})
 

  hasil = Math.pow(angka,pangkat)
	

		res.json(
      { 
      creator: `akuari.my.id`,
      soal: `Nilai dari ${angka} pangkat ${pangkat}`,
      hasil: `${hasil}`
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/terjemah', async(req, res) => { 
 try {
  var query = req.query.query
if (!query) return res.json({ message: 'Masukan parameter ?query='})
  var kode = req.query.kode
if (!kode) return res.json({ message: 'Masukan parameter &kode='})


 iki = await translate(query, {to: kode})
	

		res.json(
      { 
      creator: `akuari.my.id`,
      query: `${query}`,
      terjemah: `${iki}`,
      list_kode_negara: `AF : Afghanistan, AX : Åland Islands, AL : Albania, DZ : Algeria, AS : American Samoa, AD : Andorra, AO : Angola, AI : Anguilla, AQ : Antarctica, AG : Antigua and Barbuda, AR : Argentina, AM : Armenia, AW : Aruba, AU : Australia, AT : Austria, AZ : Azerbaijan, BS : Bahamas, BH : Bahrain, BD : Bangladesh, BB : Barbados, BY : Belarus, BE : Belgium, BZ : Belize, BJ : Benin, BM : Bermuda, BT : Bhutan, BO : Bolivia, BA : Bosnia and Herzegovina, BW : Botswana, BV : Bouvet Island, BR : Brazil, IO : British Indian Ocean Territory, BN : Brunei Darussalam, BG : Bulgaria, BF : Burkina Faso, BI : Burundi, KH : Cambodia, CM : Cameroon, CA : Canada, CV : Cape Verde, KY : Cayman Islands, CF : Central African Republic, TD : Chad, CL : Chile, CN : China, CX : Christmas Island, CC : Cocos (Keeling) Islands, CO : Colombia, KM : Comoros, CG : Congo, CD : Congo, The Democratic Republic of the, CK : Cook Islands, CR : Costa Rica, CI : Cote D'Ivoire, HR : Croatia, CU : Cuba, CY : Cyprus, CZ : Czech Republic, DK : Denmark, DJ : Djibouti, DM : Dominica, DO : Dominican Republic, EC : Ecuador, EG : Egypt, SV : El Salvador, GQ : Equatorial Guinea, ER : Eritrea, EE : Estonia, ET : Ethiopia, FK : Falkland Islands (Malvinas), FO : Faroe Islands, FJ : Fiji, FI : Finland, FR : France, GF : French Guiana, PF : French Polynesia, TF : French Southern Territories, GA : Gabon, GM : Gambia, GE : Georgia, DE : Germany, GH : Ghana, GI : Gibraltar, GR : Greece, GL : Greenland, GD : Grenada, GP : Guadeloupe, GU : Guam, GT : Guatemala, GG : Guernsey, GN : Guinea, GW : Guinea-Bissau, GY : Guyana, HT : Haiti, HM : Heard Island and Mcdonald Islands, VA : Holy See (Vatican City State), HN : Honduras, HK : Hong Kong, HU : Hungary, IS : Iceland, IN : India, ID : Indonesia, IR : Iran, Islamic Republic Of, IQ : Iraq, IE : Ireland, IM : Isle of Man, IL : Israel, IT : Italy, JM : Jamaica, JP : Japan, JE : Jersey, JO : Jordan, KZ : Kazakhstan, KE : Kenya, KI : Kiribati, KP : Democratic People's Republic of Korea, KR : Korea, Republic of, XK : Kosovo, KW : Kuwait, KG : Kyrgyzstan, LA : Lao People's Democratic Republic, LV : Latvia, LB : Lebanon, LS : Lesotho, LR : Liberia, LY : Libyan Arab Jamahiriya, LI : Liechtenstein, LT : Lithuania, LU : Luxembourg, MO : Macao, MK : Macedonia, The Former Yugoslav Republic of, MG : Madagascar, MW : Malawi, MY : Malaysia, MV : Maldives, ML : Mali, MT : Malta, MH : Marshall Islands, MQ : Martinique, MR : Mauritania, MU : Mauritius, YT : Mayotte, MX : Mexico, FM : Micronesia, Federated States of, MD : Moldova, Republic of, MC : Monaco, MN : Mongolia, ME : Montenegro, MS : Montserrat, MA : Morocco, MZ : Mozambique, MM : Myanmar, NA : Namibia, NR : Nauru, NP : Nepal, NL : Netherlands, AN : Netherlands Antilles, NC : New Caledonia, NZ : New Zealand, NI : Nicaragua, NE : Niger, NG : Nigeria, NU : Niue, NF : Norfolk Island, MP : Northern Mariana Islands, NO : Norway, OM : Oman, PK : Pakistan, PW : Palau, PS : Palestinian Territory, Occupied, PA : Panama, PG : Papua New Guinea, PY : Paraguay, PE : Peru, PH : Philippines, PN : Pitcairn, PL : Poland, PT : Portugal, PR : Puerto Rico, QA : Qatar, RE : Reunion, RO : Romania, RU : Russian Federation, RW : Rwanda, SH : Saint Helena, KN : Saint Kitts and Nevis, LC : Saint Lucia, PM : Saint Pierre and Miquelon, VC : Saint Vincent and the Grenadines, WS : Samoa, SM : San Marino, ST : Sao Tome and Principe, SA : Saudi Arabia, SN : Senegal, RS : Serbia, SC : Seychelles, SL : Sierra Leone, SG : Singapore, SK : Slovakia, SI : Slovenia, SB : Solomon Islands, SO : Somalia, ZA : South Africa, GS : South Georgia and the South Sandwich Islands, ES : Spain, LK : Sri Lanka, SD : Sudan, SR : Suriname, SJ : Svalbard and Jan Mayen, SZ : Swaziland, SE : Sweden, CH : Switzerland, SY : Syrian Arab Republic, TW : Taiwan, TJ : Tajikistan, TZ : Tanzania, United Republic of, TH : Thailand, TL : Timor-Leste, TG : Togo, TK : Tokelau, TO : Tonga, TT : Trinidad and Tobago, TN : Tunisia, TR : Turkey, TM : Turkmenistan, TC : Turks and Caicos Islands, TV : Tuvalu, UG : Uganda, UA : Ukraine, AE : United Arab Emirates, GB : United Kingdom, US : United States, UM : United States Minor Outlying Islands, UY : Uruguay, UZ : Uzbekistan, VU : Vanuatu, VE : Venezuela, VN : Viet Nam, VG : Virgin Islands, British, VI : Virgin Islands, U.S., WF : Wallis and Futuna, EH : Western Sahara, YE : Yemen, ZM : Zambia, ZW : Zimbabwe`
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})




module.exports = router
