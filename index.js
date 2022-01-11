const Aoijs = require("aoi.js")
const config = require('./config.json');
const bot = new Aoijs.Bot(config.Bot);

bot.loadCommands(`./src/`)

//configs
require('./handlers/variables')(bot)
require('./handlers/events')(bot)
require('./handlers/responses')(bot)
require('./handlers/channels')(bot)
require('./handlers/activity')(bot)
require('./handlers/secrets')(bot)
