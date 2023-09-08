const FormData = require("form-data");
const type = require("file-type");
const fetch = require("node-fetch");

async function uploadFile3(buffer) {
  let { ext } = await type.fromBuffer(buffer);
  bodyForm = new FormData();
  bodyForm.append("file", buffer, "file." + ext);

  response = await fetch("https://uploader-dani.herokuapp.com/api/upload.php", {
    method: "post",
    body: bodyForm,
  });

  return {
    status: response.status,
    thanks: "dani",
    result: (await response.json()).result,
  };
}

async function uploadari(buffer) {
  let { ext } = await type.fromBuffer(buffer);
  bodyForm = new FormData();
  bodyForm.append("file", buffer, "file." + ext);

  response = await fetch("https://file.api.akuari.my.id/api/upload.php", {
    method: "post",
    body: bodyForm,
  });

  return {
    status: response.status,
    creator: "akuari.my.id",
    result: (await response.json()).result,
  };
}




module.exports = { uploadFile3, uploadari }