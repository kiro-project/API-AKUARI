const axios = require('axios')
const cheerio = require('cheerio')
const withDNS = require('axios-with-dns');


withDNS(axios);

async function remoo(url) {
	return new Promise(async (resolve, reject) => {

  let payload = { url: url };

    let res = await axios.get('http://freemediatools.com/removebackgroundfromurl', payload , { dnsServer: '1.1.1.1' }).then(res => {
      const iki = res.data
			const result = {
				link: iki.path,
        linkk: iki.data.path

			}
			resolve(result)
		}).catch(reject)
})
}









module.exports = { remoo }
