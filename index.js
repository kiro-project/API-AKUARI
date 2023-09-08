const express = require('express')
const secure = require('ssl-express-www')
const PORT = process.env.PORT || 8080;
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const cors = require('cors')

var app = express();
app.use(secure)
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('client'));
app.set("json spaces",2)
__path = process.cwd()
process.env.TZ = "Asia/Jakarta";

var canvas = require('./server/canvas.js');
var gabut = require('./server/gabut.js');
var topup = require('./server/topup.js');
var asupan = require('./server/asupan.js');
var ephoto = require('./server/ephoto.js');
var simi = require('./server/simi.js');
var stalk = require('./server/stalk.js');
var sticker = require('./server/sticker.js');
var uploader = require('./server/uploader.js');
var randomtext = require('./server/randomtext.js');
var downloader = require('./server/downloader.js');
var search = require('./server/search.js');
var anime = require('./server/anime.js');
var randomimage = require('./server/randomimage.js');
var randomimganime = require('./server/randomimganime.js');
var nsfw = require('./server/nsfw.js');
var textpro = require('./server/textpro.js');
var photooxy = require('./server/photooxy.js');
var photofunia = require('./server/photofunia.js');
var otakudesu = require('./server/otakudesu.js');
var games = require('./server/games.js');
var primbon = require('./server/primbon.js');
var convert = require('./server/convert.js');
var other = require('./server/other.js');
var islami = require('./server/islami.js');
var info = require('./server/info.js');
var edukasi = require('./server/edukasi.js');
var texttovoice = require('./server/texttovoice.js');
var short = require('./server/short.js');
var main = require('./main');


app.use('/gabut', gabut)
app.use('/short', short)
app.use('/texttovoice', texttovoice)
app.use('/topup', topup)
app.use('/edukasi', edukasi)
app.use('/ephoto', ephoto)
app.use('/textpro', textpro)
app.use('/stalk', stalk)
app.use('/asupan', asupan)
app.use('/simi', simi)
app.use('/sticker', sticker)
app.use('/canvas', canvas)
app.use('/uploader', uploader)
app.use('/randomtext', randomtext)
app.use('/info', info)
app.use('/downloader', downloader)
app.use('/islami', islami)
app.use('/ai', search)
app.use('/search', search)
app.use('/anime', anime)
app.use('/randomimage', randomimage)
app.use('/randomimganime', randomimganime)
app.use('/nsfw', nsfw)
app.use('/photooxy', photooxy)
app.use('/photofunia', photofunia)
app.use('/otakudesu', otakudesu)
app.use('/games', games)
app.use('/primbon', primbon)
app.use('/converter', convert)
app.use('/other', other)
app.use('/', main)


app.listen(PORT, () => {
    console.log(`Server urep mazeee neng port ${PORT}`)
});
