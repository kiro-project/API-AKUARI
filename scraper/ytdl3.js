const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const { spawn, exec } = require("child_process");
const yt = require("yt-search");
const FormData = require("form-data");



async function ytplay3(querry) {
	const videos = await yt(querry)
	const result = []
	const Format = {
		q: videos.all[0].url,
		vt: 'mp3'
	}
	await axios('https://yt1s.com/api/ajaxSearch/index', {
		method: 'POST',
		data: new URLSearchParams(Object.entries(Format)),
		headers: {
			"accept": "*/*",
			"accept-language": "en-US,en;q=0.9,id;q=0.8",
			"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
			"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
			"cookie": "_ga=GA1.2.586773459.1621481788; _gid=GA1.2.1576517376.1621481788; _gat_gtag_UA_173445049_1=1"
		},
		referrerPolicy: "strict-origin-when-cross-origin"
	}).then(async res => {
		const FormatData = {
			vid: res.data.vid,
			k: res.data.kc
		}
		await axios('https://yt1s.com/api/ajaxConvert/convert', {
			method: 'POST',
			data: new URLSearchParams(Object.entries(FormatData)),
			headers: {
				"accept": "*/*",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				"sec-ch-ua-mobile": "?0",
				"cookie": "_ga=GA1.2.586773459.1621481788; _gid=GA1.2.1576517376.1621481788; _gat_gtag_UA_173445049_1=1"
			},
			referrerPolicy: "strict-origin-when-cross-origin"
		}).then(respon => {
			result.push(respon.data)
		})
	})
	return result[0]
}

async function RandomCerpen() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const link = yield axios_1.default.get(`http://cerpenmu.com/`);
            if (link.status !== 200)
                return;
            const $ = cheerio_1.default.load(link.data);
            const link_input = [];
            $('#sidebar > div:nth-child(9) > ul').each(function (_a, b) {
                $(b).find('li').each(function (_tyu, zu) {
                    const url = $(zu).find('a').attr('href');
                    link_input.push(url);
                });
            });
            const random = link_input[Math.floor(Math.random() * (link_input.length))];
            const Url = yield axios_1.default.get(random);
            if (Url.status !== 200)
                resolve({ status: Url.status, mess: "ERROR" });
            const ch = cheerio_1.default.load(Url.data);
            const Data = [];
            ch('#content > article').each(function (_hm, to) {
                ch(to).find('article').each(function (_chu, chuwi) {
                    const Url = ch(chuwi).find('h2 > a').attr('href');
                    Data.push(Url);
                });
            });
            const acak = Data[Math.floor(Math.random() * (Data.length))];
            yield axios_1.default.get(acak).then(respon => {
                if (respon.status !== 200)
                    return;
                const $ = cheerio_1.default.load(respon.data);
                const judul = $('#content').find('article > h1').text().trim();
                const kategori = $('#content').find('article > a:nth-child(4)').text().trim();
                const cerita = $('#content').find('article').text().trim();
                const res = {
                    status: respon.status,
                    author: "I`am RA",
                    data: {
                        judul: judul,
                        kategori: kategori,
                        cerita: cerita
                    }
                };
                resolve(res);
            }).catch(reject);
        }));
    });
}


module.exports = { ytplay3, RandomCerpen };