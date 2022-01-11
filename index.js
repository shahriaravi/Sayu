const Aoijs = require("aoi.js")
const bot = new Aoijs.Bot(require("./config/config.json"))

bot.loadCommands(`./src/`)

//configs
require('./config/channels')(bot)
require('./config/secrets')(bot)

//handlers
require('./handlers/variables')(bot)
require('./handlers/callbacks')(bot)
require('./handlers/responses')(bot)
require('./handlers/status')(bot)
