const Aoijs = require("aoi.js")
const bot = new Aoijs.Bot(require("./config.json"))

bot.loadCommands(`./src/`)

//configs
require('./handlers/variables')(bot)
require('./handlers/events')(bot)
require('./handlers/responses')(bot)
require('./handlers/channels')(bot)
require('./handlers/activity')(bot)
require('./handlers/secrets')(bot)
