const axios = require('axios')
const cheerio = require('cheerio')
const qs = require('qs')
const url = require('url')
const getCookies = {
	"cookie": 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
}

if (!getCookies.cookie) getCookies = {}

async function tiktokdll(link) {
	return new Promise (async (resolve, reject) => {
		try {
		
			const data = await axios({
				url: "https://musicaldown.com/id",
				method: "GET",
				headers: {
					'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
				}
			})
			const $ = cheerio.load(data.data)
			let FORM = {
				[`${$("#link_url").attr("name")}`]: link,
				[`${$("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("name")}`]: $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("value"),
				verify: $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(3)").attr("value")
			}
			const getPost = await axios({
				url: "https://musicaldown.com/id/download",
				method: "POST",
				headers: {
					'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
					"cookie": data.headers["set-cookie"].join("")
				},
				data: new URLSearchParams(Object.entries(FORM))
			})
			const c = cheerio.load(getPost.data)
			const Format = {
				nowm: c("body > div.welcome.section > div").find("div:nth-child(2) > div.col.s12.l8 > a.btn.waves-effect.waves-light.orange.download:nth-child(0)").attr("href"),
				mp4: c("body > div.welcome.section").find("div > div:nth-child(2) > div.col.s12.l8 > a.btn.waves-effect.waves-light.orange.download:nth-child(1)").attr("href"),
				original: c("body > div.welcome.section > div").find("div.col s12 l8 > a.btn.waves-effect.waves-light.orange.download:nth-child(2)").attr("href")
			}
			return resolve(Format)
		} catch(err) {
			throw reject(new Error(String(err)))
		}
	})
}








const fbdon = async (query) => {
const res = await axios.get(`https://keepsaveit.com/download/?url=${query}`)
const sup = cheerio.load(res.data)

const result = sup('body').find('.videoPlay > source:nth-child(2)').attr('src')


hasil.push({result})
return hasil
}

















module.exports = { tiktokdll, fbdon }