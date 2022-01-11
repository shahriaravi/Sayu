const Aoijs = require("aoi.js")
const config = require('./config/config.json');
const bot = new Aoijs.Bot(config.Bot);

bot.loadCommands(`./src/`)

//configs
require('./config/channels')(bot)
require('./config/secrets')(bot)

//handlers
require('./handlers/variables')(bot)
require('./handlers/callbacks')(bot)
require('./handlers/responses')(bot)
require('./handlers/status')(bot)
