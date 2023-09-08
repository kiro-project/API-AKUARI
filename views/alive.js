const axios = require('axios')
async function apivisit() {
  try {
  axios.get(`https://akuari.my.id/visitor/tambah.php`)
  } catch (err) {
    console.log(err)
  }
}
  await apivisit()