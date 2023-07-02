__path = process.cwd()

var express = require('express');
const axios = require('axios')
const { exec } = require('child_process')
const fs = require('fs')
const stream = require('stream')
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var router  = express.Router();
const zrapi = require("zrapi");

router.get('/textpro', async (req, res, next) => {
if (!req.query.text) return 
if (!req.query.number) return 
if (req.query.number == "1"){ var urlpro = "https://textpro.me/blue-gem-text-effect-830.html"} 
if (req.query.number == "2"){ var urlpro = "https://textpro.me/pink-candy-text-effect-832.html"}
if (req.query.number == "3"){ var urlpro = "https://textpro.me/eroded-metal-text-effect-834.html"}
if (req.query.number == "4"){ var urlpro = "https://textpro.me/bronze-glitter-text-effect-835.html"}
if (req.query.number == "5"){ var urlpro = "https://textpro.me/silver-glitter-text-effect-837.html"}
if (req.query.number == "6"){ var urlpro = "https://textpro.me/purple-glitter-text-effect-840.html"}
if (req.query.number == "7"){ var urlpro = "https://textpro.me/blue-glitter-text-effect-841.html"}
if (req.query.number == "8"){ var urlpro = "https://textpro.me/hexa-golden-text-effect-842.html"}
if (req.query.number == "9"){ var urlpro = "https://textpro.me/hot-metal-text-effect-843.html"}
if (req.query.number == "10"){ var urlpro = "https://textpro.me/purple-gem-text-effect-853.html"}
if (req.query.number == "11"){ var urlpro = "https://textpro.me/metal-rainbow-text-effect-854.html"}
if (req.query.number == "12"){ var urlpro = "https://textpro.me/sci-fi-text-effect-855.html"}
if (req.query.number == "13"){ var urlpro = "https://textpro.me/wood-text-effect-856.html"}
if (req.query.number == "14"){ var urlpro = "https://textpro.me/bagel-text-effect-857.html"}
if (req.query.number == "15"){ var urlpro = "https://textpro.me/biscuit-text-effect-858.html"}
if (req.query.number == "16"){ var urlpro = "https://textpro.me/abstra-gold-text-effect-859.html"}
if (req.query.number == "17"){ var urlpro = "https://textpro.me/rusty-metal-text-effect-860.html"}
if (req.query.number == "18"){ var urlpro = "https://textpro.me/fruit-juice-text-effect-861.html"}
if (req.query.number == "19"){ var urlpro = "https://textpro.me/ice-cold-text-effect-862.html"}
if (req.query.number == "20"){ var urlpro = "https://textpro.me/marble-text-effect-863.html"}
if (req.query.number == "21"){ var urlpro = "https://textpro.me/horror-gift-text-effect-866.html"}
if (req.query.number == "22"){ var urlpro = "https://textpro.me/plastic-bag-drug-text-effect-867.html"}
if (req.query.number == "23"){ var urlpro = "https://textpro.me/honey-text-effect-868.html"}
if (req.query.number == "24"){ var urlpro = "https://textpro.me/chrismast-gift-text-effect-869.html"} 
if (req.query.number == "25"){ var urlpro = "https://textpro.me/break-wall-text-effect-871.html"}
if (req.query.number == "26"){ var urlpro = "https://textpro.me/dropwater-text-effect-872.html"}
if (req.query.number == "27"){ var urlpro = "https://textpro.me/free-advanced-glow-text-effect-873.html"}
if (req.query.number == "28"){ var urlpro = "https://textpro.me/green-neon-text-effect-874.html"}
if (req.query.number == "29"){ var urlpro = "https://textpro.me/bokeh-text-effect-876.html"}
if (req.query.number == "30"){ var urlpro = "https://textpro.me/deluxe-silver-text-effect-970.html"}
if (req.query.number == "31"){ var urlpro = "https://textpro.me/road-warning-text-effect-878.html"}
if (req.query.number == "32"){ var urlpro = "https://textpro.me/neon-text-effect-online-879.html"}
if (req.query.number == "33"){ var urlpro = "https://textpro.me/3d-box-text-effect-online-880.html"}
if (req.query.number == "34"){ var urlpro = "https://textpro.me/create-thunder-text-effect-online-881.html"}
if (req.query.number == "35"){ var urlpro = "https://textpro.me/neon-light-text-effect-online-882.html"}
if (req.query.number == "36"){ var urlpro = "https://textpro.me/horror-blood-text-effect-online-883.html"}
if (req.query.number == "37"){ var urlpro = "https://textpro.me/matrix-style-text-effect-online-884.html"}
if (req.query.number == "38"){ var urlpro = "https://textpro.me/bread-text-effect-online-887.html"}
if (req.query.number == "39"){ var urlpro = "https://textpro.me/koi-fish-text-effect-online-888.html"}
if (req.query.number == "40"){ var urlpro = "https://textpro.me/strawberry-text-effect-online-889.html"}
if (req.query.number == "41"){ var urlpro = "https://textpro.me/chocolate-cake-text-effect-890.html"}
if (req.query.number == "42"){ var urlpro = "https://textpro.me/decorative-glass-text-effect-891.html"}
if (req.query.number == "43"){ var urlpro = "https://textpro.me/purple-glass-text-effect-online-892.html"}
if (req.query.number == "44"){ var urlpro = "https://textpro.me/cyan-sparkling-jewelry-text-effect-893.html"}
if (req.query.number == "45"){ var urlpro = "https://textpro.me/red-sparkling-jewelry-text-effect-894.html"}
if (req.query.number == "46"){ var urlpro = "https://textpro.me/toxic-text-effect-online-901.html"}
if (req.query.number == "47"){ var urlpro = "https://textpro.me/rainbow-equalizer-text-effect-902.html"} 
if (req.query.number == "48"){ var urlpro = "https://textpro.me/robot-r2-d2-text-effect-903.html"}
if (req.query.number == "49"){ var urlpro = "https://textpro.me/captain-america-text-effect-905.html"}
if (req.query.number == "50"){ var urlpro = "https://textpro.me/purple-shiny-glass-text-effect-906.html"}
if (req.query.number == "51"){ var urlpro = "https://textpro.me/blue-glass-text-effect-908.html"}
if (req.query.number == "52"){ var urlpro = "https://textpro.me/orange-glass-text-effect-911.html"}
if (req.query.number == "53"){ var urlpro = "https://textpro.me/yellow-glass-text-effect-913.html"}
if (req.query.number == "54"){ var urlpro = "https://textpro.me/lava-text-effect-online-914.html"}
if (req.query.number == "55"){ var urlpro = "https://textpro.me/rock-text-effect-online-915.html"}
if (req.query.number == "56"){ var urlpro = "https://textpro.me/peridot-stone-text-effect-916.html"}
if (req.query.number == "57"){ var urlpro = "https://textpro.me/decorate-purple-text-effect-917.html"}
if (req.query.number == "58"){ var urlpro = "https://textpro.me/denim-text-effect-online-919.html"}
if (req.query.number == "59"){ var urlpro = "https://textpro.me/steel-text-effect-online-921.html"}
if (req.query.number == "60"){ var urlpro = "https://textpro.me/gold-foil-balloon-text-effect-922.html"}
if (req.query.number == "61"){ var urlpro = "https://textpro.me/green-foil-balloon-text-effect-925.html"} 
if (req.query.number == "62"){ var urlpro = "https://textpro.me/purple-foil-balloon-text-effect-927.html"}
if (req.query.number == "63"){ var urlpro = "https://textpro.me/skeleton-text-effect-online-929.html"}
if (req.query.number == "64"){ var urlpro = "https://textpro.me/firework-sparkle-text-effect-930.html"}
if (req.query.number == "65"){ var urlpro = "https://textpro.me/natural-leaves-text-effect-931.html"}
if (req.query.number == "66"){ var urlpro = "https://textpro.me/wicker-text-effect-online-932.html"}
if (req.query.number == "67"){ var urlpro = "https://textpro.me/create-logo-joker-online-934.html"}
if (req.query.number == "68"){ var urlpro = "https://textpro.me/create-wolf-logo-galaxy-online-936.html"}
if (req.query.number == "69"){ var urlpro = "https://textpro.me/create-lion-logo-mascot-online-938.html"}
if (req.query.number == "70"){ var urlpro = "https://textpro.me/metal-dark-gold-text-effect-online-939.html"}
if (req.query.number == "71"){ var urlpro = "https://textpro.me/halloween-fire-text-effect-940.html"}
if (req.query.number == "72"){ var urlpro = "https://textpro.me/blood-text-on-the-frosted-glass-941.html"}
if (req.query.number == "73"){ var urlpro = "https://textpro.me/xmas-cards-3d-online-942.html"}
if (req.query.number == "74"){ var urlpro = "https://textpro.me/text-logo-3d-metal-galaxy-943.html"}
if (req.query.number == "75"){ var urlpro = "https://textpro.me/text-logo-3d-metal-gold-944.html"}
if (req.query.number == "76"){ var urlpro = "https://textpro.me/text-logo-3d-metal-rose-gold-945.html"}
if (req.query.number == "77"){ var urlpro = "https://textpro.me/text-logo-3d-metal-silver-946.html"}
if (req.query.number == "78"){ var urlpro = "https://textpro.me/happ-new-year-card-firework-gif-959.html"}
if (req.query.number == "79"){ var urlpro = "https://textpro.me/new-year-cards-3d-by-name-960.html"}
if (req.query.number == "80"){ var urlpro = "https://textpro.me/neon-text-effect-online-963.html"}
if (req.query.number == "81"){ var urlpro = "https://textpro.me/deluxe-gold-text-effect-966.html"}
if (req.query.number == "82"){ var urlpro = "https://textpro.me/glossy-carbon-text-effect-965.html"}
if (req.query.number == "83"){ var urlpro = "https://textpro.me/holographic-3d-text-effect-975.html"}
if (req.query.number == "84"){ var urlpro = "https://textpro.me/minion-text-effect-3d-online-978.html"} 
if (req.query.number == "85"){ var urlpro = "https://textpro.me/1917-style-text-effect-online-980.html"}
if (req.query.number == "86"){ var urlpro = "https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html"}
if (req.query.number == "87"){ var urlpro = "https://textpro.me/metal-dark-gold-text-effect-984.html"}
if (req.query.number == "88"){ var urlpro = "https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html"}
if (req.query.number == "89"){ var urlpro = "https://textpro.me/create-a-summery-sand-writing-text-effect-988.html"}
if (req.query.number == "90"){ var urlpro = "https://textpro.me/sand-engraved-3d-text-effect-989.html"}
if (req.query.number == "91"){ var urlpro = "https://textpro.me/sand-writing-text-effect-online-990.html"}
if (req.query.number == "92"){ var urlpro = "https://textpro.me/write-in-sand-summer-beach-free-online-991.html"}
if (req.query.number == "93"){ var urlpro = "https://textpro.me/create-a-cloud-text-effect-in-the-sky-online-997.html"}
if (req.query.number == "94"){ var urlpro = "https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html"}
if (req.query.number == "95"){ var urlpro = "https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html"}
if (req.query.number == "96"){ var urlpro = "https://textpro.me/3d-underwater-text-effect-generator-online-1013.html"}
if (req.query.number == "97"){ var urlpro = "https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html"}
if (req.query.number == "98"){ var urlpro = "https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html"}
if (req.query.number == "99"){ var urlpro = "https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html"}
if (req.query.number == "100"){ var urlpro = "https://textpro.me/online-3d-gradient-text-effect-generator-1020.html"}
if (req.query.number == "101"){ var urlpro = "https://textpro.me/create-art-paper-cut-text-effect-online-1022.html"}
if (req.query.number == "102"){ var urlpro = "https://textpro.me/broken-glass-text-effect-free-online-1023.html"}
if (req.query.number == "103"){ var urlpro = "https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html"}
if (req.query.number == "104"){ var urlpro = "https://textpro.me/create-harry-potter-text-effect-1025.html"}
if (req.query.number == "105"){ var urlpro = "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html"}
if (req.query.number == "106"){ var urlpro = "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html"}
if (req.query.number == "107"){ var urlpro = "https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html"} 
if (req.query.number == "108"){ var urlpro = "https://textpro.me/online-thunder-text-effect-generator-1031.html"}
if (req.query.number == "109"){ var urlpro = "https://textpro.me/create-berry-text-effect-online-free-1033.html"}
if (req.query.number == "110"){ var urlpro = "https://textpro.me/create-a-transformer-text-effect-online-1035.html"}
if (req.query.number == "111"){ var urlpro = "https://textpro.me/create-green-horror-style-text-effect-online-1036.html"}
if (req.query.number == "112"){ var urlpro = "https://textpro.me/free-advanced-glow-text-effect-873.html"}
if (req.query.number == "113"){ var urlpro = "https://textpro.me/neon-text-effect-online-963.html"}
if (req.query.number == "114"){ var urlpro = "https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html"}
if (req.query.number == "115"){ var urlpro = "https://textpro.me/3d-christmas-text-effect-by-name-1055.html"}
if (req.query.number == "116"){ var urlpro = "https://textpro.me/create-christmas-candy-cane-text-effect-1056.html"}
if (req.query.number == "117"){ var urlpro = "https://textpro.me/christmas-tree-text-effect-online-free-1057.html"}
if (req.query.number == "118"){ var urlpro = "https://textpro.me/chrismast-gift-text-effect-869.html"}
if (req.query.number == "119"){ var urlpro = "https://textpro.me/road-warning-text-effect-878.html"}
if (req.query.number == "120"){ var urlpro = "https://textpro.me/horror-blood-text-effect-online-883.html"}
if (req.query.number == "121"){ var urlpro = "https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html"} 
if (req.query.number == "122"){ var urlpro = "https://textpro.me/create-3d-sci-fi-text-effect-online-1060.html"}
if (req.query.number == "123"){ var urlpro = "https://textpro.me/online-3d-gradient-text-effect-generator-1020.html"}
if (req.query.number == "124"){ var urlpro = "https://textpro.me/plastic-bag-drug-text-effect-867.html"}
if (req.query.number == "125"){ var urlpro = "https://textpro.me/create-space-text-effects-online-free-1042.html"}
if (req.query.number == "126"){ var urlpro = "https://textpro.me/robot-r2-d2-text-effect-903.html"}
if (req.query.number == "127"){ var urlpro = "https://textpro.me/peridot-stone-text-effect-916.html"}
if (req.query.number == "128"){ var urlpro = "https://textpro.me/gold-foil-balloon-text-effect-922.html"}
if (req.query.number == "129"){ var urlpro = "https://textpro.me/green-foil-balloon-text-effect-925.html"}
if (req.query.number == "130"){ var urlpro = "https://textpro.me/koi-fish-text-effect-online-888.html"}
if (req.query.number == "131"){ var urlpro = "https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html"}
if (req.query.number == "132"){ var urlpro = "https://textpro.me/create-wolf-logo-galaxy-online-936.html"}
if (req.query.number == "133"){ var urlpro = "https://textpro.me/text-logo-3d-metal-silver-946.html"}
if (req.query.number == "134"){ var urlpro = "https://textpro.me/create-a-summery-sand-writing-text-effect-988.html"}
if (req.query.number == "135"){ var urlpro = "https://textpro.me/sand-engraved-3d-text-effect-989.html"}
if (req.query.number == "136"){ var urlpro = "https://textpro.me/blue-gem-text-effect-830.html"}
if (req.query.number == "137"){ var urlpro = "https://textpro.me/biscuit-text-effect-858.html"}
if (req.query.number == "138"){ var urlpro = "https://textpro.me/chocolate-cake-text-effect-890.html"}
if (req.query.number == "139"){ var urlpro = "https://textpro.me/pink-candy-text-effect-832.html"}
if (req.query.number == "140"){ var urlpro = "https://textpro.me/honey-text-effect-868.html"}
if (req.query.number == "141"){ var urlpro = "https://textpro.me/bagel-text-effect-857.html"}
if (req.query.number == "142"){ var urlpro = "https://textpro.me/strawberry-text-effect-online-889.html"}
if (req.query.number == "143"){ var urlpro = "https://textpro.me/bread-text-effect-online-887.html"}
if (req.query.number == "144"){ var urlpro = "https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html"} 
if (req.query.number == "145"){ var urlpro = "https://textpro.me/create-berry-text-effect-online-free-1033.html"}
if (req.query.number == "146"){ var urlpro = "https://textpro.me/eroded-metal-text-effect-834.html"}
if (req.query.number == "147"){ var urlpro = "https://textpro.me/bronze-glitter-text-effect-835.html"}
if (req.query.number == "148"){ var urlpro = "https://textpro.me/marble-text-effect-863.html"}
if (req.query.number == "149"){ var urlpro = "https://textpro.me/hexa-golden-text-effect-842.html"}
if (req.query.number == "150"){ var urlpro = "https://textpro.me/purple-glitter-text-effect-840.html"}
if (req.query.number == "151"){ var urlpro = "https://textpro.me/cyan-sparkling-jewelry-text-effect-893.html"}
if (req.query.number == "152"){ var urlpro = "https://textpro.me/orange-jewelry-text-effect-847.html"}
if (req.query.number == "153"){ var urlpro = "https://textpro.me/red-sparkling-jewelry-text-effect-894.html"}
if (req.query.number == "154"){ var urlpro = "https://textpro.me/abstra-gold-text-effect-859.html"}
if (req.query.number == "155"){ var urlpro = "https://textpro.me/silver-glitter-text-effect-837.html"}
if (req.query.number == "156"){ var urlpro = "https://textpro.me/gold-glitter-text-effect-836.html"}
if (req.query.number == "157"){ var urlpro = "https://textpro.me/blue-glitter-text-effect-841.html"}
if (req.query.number == "158"){ var urlpro = "https://textpro.me/purple-gem-text-effect-853.html"}
if (req.query.number == "159"){ var urlpro = "https://textpro.me/sci-fi-text-effect-855.html"}
if (req.query.number == "160"){ var urlpro = "https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html"}
if (req.query.number == "161"){ var urlpro = "https://textpro.me/create-science-fiction-text-effect-online-free-1038.html"}
if (req.query.number == "162"){ var urlpro = "https://textpro.me/fruit-juice-text-effect-861.html"}
if (req.query.number == "163"){ var urlpro = "https://textpro.me/3d-steel-text-effect-877.html"}
if (req.query.number == "164"){ var urlpro = "https://textpro.me/3d-box-text-effect-online-880.html"}
if (req.query.number == "165"){ var urlpro = "https://textpro.me/3d-gradient-text-effect-online-free-1002.html"}
if (req.query.number == "166"){ var urlpro = "https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html"}
if (req.query.number == "167"){ var urlpro = "https://textpro.me/matrix-style-text-effect-online-884.html"} 
if (req.query.number == "168"){ var urlpro = "https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html"}
if (req.query.number == "169"){ var urlpro = "https://textpro.me/green-neon-text-effect-874.html"}
if (req.query.number == "170"){ var urlpro = "https://textpro.me/create-a-glitch-text-effect-online-free-1026.html"}
if (req.query.number == "171"){ var urlpro = "https://textpro.me/online-thunder-text-effect-generator-1031.html"}
if (req.query.number == "172"){ var urlpro = "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html"}
if (req.query.number == "173"){ var urlpro = "https://textpro.me/text-logo-3d-metal-galaxy-943.html"}
if (req.query.number == "174"){ var urlpro = "https://textpro.me/create-a-rusted-metal-text-effect-online-1087.html"}
if (req.query.number == "175"){ var urlpro = "https://textpro.me/free-creative-3d-golden-text-effect-online-1075.html"}
if (req.query.number == "176"){ var urlpro = "https://textpro.me/create-a-3d-luxury-metallic-text-effect-for-free-1071.html"}
if (req.query.number == "177"){ var urlpro = "https://textpro.me/deluxe-gold-text-effect-966.html"}
if (req.query.number == "178"){ var urlpro = "https://textpro.me/text-logo-3d-metal-silver-946.html"}
if (req.query.number == "179"){ var urlpro = "https://textpro.me/metal-rainbow-text-effect-854.html"}
if (req.query.number == "180"){ var urlpro = "https://textpro.me/text-logo-3d-metal-rose-gold-945.html"}
if (req.query.number == "181"){ var urlpro = "https://textpro.me/party-text-effect-with-the-night-event-theme-1105.html"}

  zrapi.textpro(urlpro, [req.query.text])
  .then((data) => { 
  var requestSettings = {
      url: data,
      method: 'GET',
      encoding: null
   };
   request(requestSettings, function(error, response, body) {
      res.set('Content-Type', 'image/png');
      res.send(body);
   });
   })
})




module.exports = router
