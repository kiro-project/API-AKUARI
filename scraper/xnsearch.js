const cheerio = require('cheerio')
const axios = require('axios')

const xnsearch = async (query) => {
  const baseurl = 'https://www.xnxx.com'
const res = await axios.get(`https://www.xnxx.com/search/${query}`)
const soup = cheerio.load(res.data)
const hasil = []
link.push = soup('#site').find('.thumb-block > .thumb-inside > .thumb').attr('href')
decs.push = soup('#site').find('.thumb-block > .uploader').text()
title.push = soup('#site').find('.thumb-block > .uploader > .name').text()



hasil.push({ title, decs, link})
return hasil
}

module.exports = { xnsearch }