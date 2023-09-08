const axios = require('axios');
const cheerio = require('cheerio');

async function shortener(url) {
	return url
};

async function musicaldown(url){
return new Promise(async(resolve, reject) => {
    try {
      const { data, status, headers } = await axios.get('https://musicaldown.com/id', {
        headers: {
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0'
        }
      })
      const $ = cheerio.load(data)
      const url_name = $("#link_url").attr("name")
      const token_name = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("name")
      const token_ = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("value")
      const verify = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(3)").attr("value")
      const _data = {
        [`${url_name}`]: url,
        [`${token_name}`]: token_,
        verify: verify
      }
      const respon = await axios.request({
        url: 'https://musicaldown.com/id/download',
        method: 'post',
        data: new URLSearchParams(Object.entries(_data)),
        headers: {
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0',
          'cookie': headers["set-cookie"]
        }
      })
      const ch = cheerio.load(respon.data)
      const resaudio = await axios.request({
        url: 'https://musicaldown.com/id/mp3',
        method: 'post',
        headers: {
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0',
          'cookie': headers["set-cookie"]
        }
      })
      let vdlk = ch('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(5)').attr('href')
      if (typeof vdlk === 'undefined') return resolve({ developer: '@xorizn', mess: 'Infalid link, no result found' })
      const hc = cheerio.load(resaudio.data)
   // Judul-judul yang ingin dicari
    const titlesToFind = ['DOWNLOAD MP4 NOW', 'Download MP4 [HD]', 'DOWNLOAD MP3 NOW'];

    // Objek untuk menyimpan hasil pencarian
    const foundLinks = {};

    // Loop melalui setiap judul yang ingin dicari
    titlesToFind.forEach((title) => {
      // Menggunakan Cheerio untuk mencari tautan yang sesuai dengan judul
      const links = [];
      $(`a:contains("${title}")`).each((index, element) => {
        const href = $(element).attr('href');
        links.push(href);
      });

 foundLinks[title] = links;
    });

      
      const result_ = {
        user: ch('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l4.center-align > div.col.s12 > h2.white-text').find('b').text(),
        desk: ch('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l4.center-align > div.col.s12 > h2.white-text:nth-child(3)').text(),
        profile: ch('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l4.center-align > div.col.s12 > div.img-area > img').attr('src'),
     hasil: foundLinks
      }
      resolve(result_)
    } catch (error) {
      console.error(error)
    }
  })
}  
module.exports = { musicaldown }
