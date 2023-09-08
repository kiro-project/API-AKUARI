const axios = require("axios");
const cheerio = require("cheerio");
const fakeUa = require("./ephoto/alat/fakeUa");
const qs = require("qs");
const FormData = require("form-data");

async function photofunia_text(url, text) {
  return new Promise(async (resolve, reject) => {
    await axios({
      method: "POST",
      url,
      data: qs.stringify({ text: text }),
      headers: {
        "User-Agent": fakeUa(),
      },
    })
      .then(({ data }) => {
        const $ = cheerio.load(data);
        let result = $("div.image-container > div.image > img").attr("src");
        resolve(result);
      })
      .catch(reject);
  });
}



async function photofunia_textt(url, text1, text2) {
  return new Promise(async (resolve, reject) => {
    const form = new FormData();
    form.append("text", text1);
    form.append("text1", text1);
    form.append("text2", text2);

    await axios({
      method: "POST",
      url,
      data: form, // Use the FormData object as the data
      headers: {
        "User-Agent": fakeUa(),
        ...form.getHeaders(), // Set appropriate Content-Type headers for the form data
      },
    })
      .then(({ data }) => {
        const $ = cheerio.load(data);
        let result = $("div.image-container > div.image > img").attr("src");
        resolve(result);
      })
      .catch(reject);
  });
}


module.exports = { photofunia_text , photofunia_textt };
