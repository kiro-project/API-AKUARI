const request = require('request')
const cheerio = require('cheerio')
const axios = require('axios')
const fetch = require('node-fetch')
const fs = require('fs')
const puppeteer = require('puppeteer')
const qs = require("qs")


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

async function ytku(url) {
    try {
        const host = 'https://freedownloadvideo.net/';
        
        // Fetch the token asynchronously
        const token = await _token(host);
        
        const form = { data: { 'url': url, 'token': token } };

        // Perform a POST request using axios
        const response = await axios.post(host + 'wp-json/aio-dl/video-data/', form.data);
        
        const data = response.data;
        
        if (data === 'error') {
            return { message: 'Error!' };
        }
        
        return data;
    } catch (error) {
        // Handle any errors that might occur during the process
        console.error(error);
        return { message: 'An error occurred.' };
    }
}



module.exports = { ytku };