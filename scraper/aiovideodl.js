const axios = require('axios')
const cheerio = require('cheerio')
const qs = require('qs')

let is = {
    headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
        "cookie": "pll_language=en; PHPSESSID=58578e38aa296f5a12a495fc5e5f0c2e"
    }
}

function _token(host) {
    return new Promise(async (resolve, reject) => {
        axios.request({
            url: host, method: 'GET', headers: {
                "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
                "cookie": "pll_language=en; PHPSESSID=58578e38aa296f5a12a495fc5e5f0c2e"
            }
        }).then(({ data }) => {
            let $ = cheerio.load(data)
            let token = $('#token').attr('value')
            resolve(token)
        })
    })
}

function dl(url) {
    return new Promise(async (resolve, reject) => {
        let host = 'https://aiovideodl.ml/'
        let form = { data: { 'url': url, 'token': (await _token(host)) } }
        axios.post(host + 'wp-json/aio-dl/video-data/', qs.stringify(form.data), { headers: is.headers })
          await page.waitForElement(`body`)
            .then(({ data }) => {
                if (data == 'error') return resolve({ message: 'Error!' })
				resolve(data)
				console.log(data)
			})
    })
}


function facebookd(url) {
    return new Promise(async (resolve, reject) => {
        let host = 'http://aiovideodl.ml/'
        let form = { data: { 'url': url, 'token': (await _token(host)) } }
        axios.post(host + '/system/action.php', qs.stringify(form.data), { headers: is.headers })
          
            .then(({ data }) => {
                if (data.links.lenght == 0) return resolve({ creator: '@neoxrs – Wildan Izzudin', status: false })
                resolve({ creator: '@neoxrs – Wildan Izzudin', status: true, data: data.links })
            })
    })
}




async function likeee(url)  {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios.request("https://likeedownloader.com/results", {
            method: "post",
            data: new URLSearchParams(Object.entries({id: url})),
            headers: {
                "cookie": "_ga=GA1.2.553951407.1656223884; _gid=GA1.2.1157362698.1656223884; __gads=ID=0fc4d44a6b01b1bc-22880a0efed2008c:T=1656223884:RT=1656223884:S=ALNI_MYp2ZXD2vQmWnXc2WprkU_p6ynfug; __gpi=UID=0000069517bf965e:T=1656223884:RT=1656223884:S=ALNI_Map47wQbMbbf7TaZLm3TvZ1eI3hZw; PHPSESSID=e3oenugljjabut9egf1gsji7re; _gat_UA-3524196-10=1",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
            },
        });
        const $ = cheerio.load(data)
        result = {
            title: $('body > div.page-wrapper > div.container > div > div.quote-box > p.quote-text > span').text(),
            thumbnail: $('body > div.page-wrapper > div.container > div > div.quote-box > div > img').attr('src'),
            watermark: $('body > div.page-wrapper > div.container > table > tbody > tr:nth-child(1) > td:nth-child(2) > a').attr('href'),
            no_watermark: $('body > div.page-wrapper > div.container > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').attr('href')
        }
        resolve(result)
    });
};




async function cocofun(url) {
  return new Promise((resolve, reject) => {
    axios({url, method: "get",
      headers: {
        "Cookie": "client_id=1a5afdcd-5574-4cfd-b43b-b30ad14c230e",
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
      }
    }).then(data => {
      $ = cheerio.load(data.data)
      let json
      const res = $('script#appState').get()
      for(let i of res){
        if(i.children && i.children[0] && i.children[0].data){
          ress = i.children[0].data.split('window.APP_INITIAL_STATE=')[1]
          json = JSON.parse(ress)
        }
        const result = {
          topic: json.share.post.post.content ? json.share.post.post.content : json.share.post.post.topic.topic,
          caption: $("meta[property='og:description']").attr('content'),
          play: json.share.post.post.playCount,
          like: json.share.post.post.likes,
          share: json.share.post.post.share,
          duration: json.share.post.post.videos[json.share.post.post.imgs[0].id].dur,
          thumbnail: json.share.post.post.videos[json.share.post.post.imgs[0].id].coverUrls[0],
          watermark: json.share.post.post.videos[json.share.post.post.imgs[0].id].urlwm,
          no_watermark: json.share.post.post.videos[json.share.post.post.imgs[0].id].url
        }
        resolve(result)
      }
    }).catch(reject)
  })
}





module.exports = { dl,facebookd, likeee, cocofun }