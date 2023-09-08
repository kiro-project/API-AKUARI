const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require("node-fetch");
const cookie = require("cookie");
const FormData = require("form-data");

async function photooxy(url,text) {
  return new Promise(async(resolve,reject) => {
    if (!/^https:\/\/photooxy\.com\/.+\.html$/.test(url)) throw new Error("Url Salah!")
        axios({url: url,
            method: 'get',
            headers: {
                'cookie': '_gid=GA1.2.1885119409.1656864706; __gads=ID=dc094aa760fdfc92-22b4a69967d30082:T=1656864706:RT=1656864706:S=ALNI_MapJhFNdgQujQ-avWct-u3snYXntQ; __gpi=UID=000006c0c6809d99:T=1656864706:RT=1656864706:S=ALNI_MbNlply1Ric98nkJqC81m4LussWaw; PHPSESSID=qasusfb11958k62t0cv3u0pim2; _gat_gtag_UA_114571019_11=1; _ga_SK0KDDQM5P=GS1.1.1656864706.1.1.1656867224.0; _ga=GA1.1.359514262.1656864706',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
            }
        }).then(da => {
            const $ = cheerio.load(da.data)
            const form = new FormData()
            form.append('text[]',text)
            form.append('submit','GO')
            form.append('token',$('#token').val())
            form.append('build_server',$('#build_server').val())
            form.append('build_server_id',$('#build_server_id').val())
            axios({url: url,
                method: 'POST',
                data: form,
                headers: {
                    'cookie': '_gid=GA1.2.1885119409.1656864706; __gads=ID=dc094aa760fdfc92-22b4a69967d30082:T=1656864706:RT=1656864706:S=ALNI_MapJhFNdgQujQ-avWct-u3snYXntQ; __gpi=UID=000006c0c6809d99:T=1656864706:RT=1656864706:S=ALNI_MbNlply1Ric98nkJqC81m4LussWaw; PHPSESSID=qasusfb11958k62t0cv3u0pim2; _gat_gtag_UA_114571019_11=1; _ga_SK0KDDQM5P=GS1.1.1656864706.1.1.1656867224.0; _ga=GA1.1.359514262.1656864706',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
                }
    }).then(da =>{
    const $ = cheerio.load(da.data)
    const p = JSON.parse($('#form_value').text().replace(/\[/g,'').replace(/\]/g,'').replace(/text/g,'text[]'))
    axios({url: 'https://photooxy.com/effect/create-image',
        method: 'POST',
        data: new URLSearchParams(p),
        headers: {
            'cookie': '_gid=GA1.2.1885119409.1656864706; __gads=ID=dc094aa760fdfc92-22b4a69967d30082:T=1656864706:RT=1656864706:S=ALNI_MapJhFNdgQujQ-avWct-u3snYXntQ; __gpi=UID=000006c0c6809d99:T=1656864706:RT=1656864706:S=ALNI_MbNlply1Ric98nkJqC81m4LussWaw; PHPSESSID=qasusfb11958k62t0cv3u0pim2; _gat_gtag_UA_114571019_11=1; _ga_SK0KDDQM5P=GS1.1.1656864706.1.1.1656867224.0; _ga=GA1.1.359514262.1656864706',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
        }
    }).then(a => {
        const img = 'https://e2.yotools.net' + a.data.image
        
        resolve(img)
    }).catch(reject)
  }).catch(reject)
})
})
}



async function photoXy_1(URL, text_1) {
	return new Promise((resolve, reject) => {
		axios.request({
			url: URL,
			method: "POST",
			data: new URLSearchParams(Object.entries({ text_1: text_1, login: "OK"})),
			headers: {
				"content-type": "application/x-www-form-urlencoded",
				"user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36"
			}
		}).then(res => {
			const $ = cheerio.load(res.data)
			const img = 'https://photooxy.com'+$('#wrapper > div.content-wrapper > section > div > div.col-md-9 > div.view-image-wrapper > div.thumbnail > img').attr('src')
			resolve(img)
		}).catch(reject)
	})
}
async function photoXy_2(URL, text_1, text_2) {
	return new Promise((resolve, reject) => {
		axios.request({
			url: URL,
			method: "POST",
			data: new URLSearchParams(Object.entries({ text_1: text_1, text_2: text_2, login: "OK"})),
			headers: {
				"content-type": "application/x-www-form-urlencoded",
				"user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36"
			}
		}).then(res => {
			const $ = cheerio.load(res.data)
			const img = 'https://photooxy.com'+$('#wrapper > div.content-wrapper > section > div > div.col-md-9 > div.thumbnail > img').attr('src')
			resolve(img)
		}).catch(reject)
	})
}


/*
   TextPro By NaufalCream
*/


async function post(url, formdata = {}, cookies) {
  let encode = encodeURIComponent;
  let body = Object.keys(formdata)
    .map((key) => {
      let vals = formdata[key];
      let isArray = Array.isArray(vals);
      let keys = encode(key + (isArray ? "[]" : ""));
      if (!isArray) vals = [vals];
      let out = [];
      for (let valq of vals) out.push(keys + "=" + encode(valq));
      return out.join("&");
    })
    .join("&");
  return await fetch(`${url}?${body}`, {
    method: "GET",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: cookies,
    },
  });
}

/**
 * TextPro Scraper
 * @function
 * @param {String} url - Your phootoxy url, example https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html.
 * @param {String[]} text - Text (required). example ["text", "text 2 if any"]
 */

async function lolos(url, text) {
  if (!/^https:\/\/photooxy\.com\/.+\.html$/.test(url))
    throw new Error("Url Salah!!");
  const geturl = await fetch(url, {
    method: "GET",
    headers: {
      "User-Agent": "GoogleBot",
    },
  });
  const caritoken = await geturl.text();
  let hasilcookie = geturl.headers
    .get("set-cookie")
    .split(",")
    .map((v) => cookie.parse(v))
    .reduce((a, c) => {
      return { ...a, ...c };
    }, {});
  hasilcookie = {
    __cfduid: hasilcookie.__cfduid,
    PHPSESSID: hasilcookie.PHPSESSID,
  };
  hasilcookie = Object.entries(hasilcookie)
    .map(([name, value]) => cookie.serialize(name, value))
    .join("; ");
  const $ = cheerio.load(caritoken);
  const token = $('input[name="token"]').attr("value");
  const form = new FormData();
  if (typeof text === "string") text = [text];
  for (let texts of text) form.append("text[]", texts);
  form.append("submit", "Go");
  form.append("token", token);
  form.append("build_server", "https://e2.yotools.net");
  form.append("build_server_id", 1);
  const geturl2 = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
      ...form.getHeaders(),
    },
    body: form.getBuffer(),
  });
  const caritoken2 = await geturl2.text();
  const token2 = /<div.*?id="form_value".+>(.*?)<\/div>/.exec(caritoken2);
  if (!token2) throw new Error("Token Tidak Ditemukan!!");
  const prosesimage = await post(
    "https://photooxy.com/effect/create-image",
    JSON.parse(token2[1]),
    hasilcookie
  );
  const hasil = await prosesimage.json();
  return `https://photooxy.com${hasil.fullsize_image}`;
}




module.exports = { photoXy_1, photoXy_2, lolos, photooxy }
