const Aoijs = require("aoi.js")
const bot = new Aoijs.Bot(require("./config.json"))

bot.loadCommands(`./src/`)

require('./handlers/variables')(bot)
require('./handlers/callbacks')(bot)
require('./handlers/responses')(bot)
require('./handlers/channels')(bot)
require('./handlers/status')(bot)
require('./handlers/secrets')(bot)
