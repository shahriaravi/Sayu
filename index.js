const Aoijs = require('aoi.js')
const bot = new Aoijs.Bot(require("./config.json"))


//configs
require('./player/lavalink')(bot)
require('./handlers/variables')(bot)
require('./handlers/callbacks')(bot)
require('./handlers/responses')(bot)
require('./handlers/channels')(bot)
require('./handlers/status')(bot)
require('./handlers/secrets')(bot)

const loader = new Aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./src/")

loader.setColors({
    walking: ["blink", "dim", "fgWhite"],
    failedWalking: {
        name: ["bright", "fgYellow", "underline"],

        text: ["bright", "fgRed"]
    },
    typeError: {
        command: ["bright", "fgYellow"],
        type: ["fgYellow"],
        text: ["bright", "fgRed"]
    },
    failLoad: {
        command: ["bright", "fgMagenta"],
        type: ["fgRed"],
        text: ["bright", "fgRed"],
    },
    loaded: {
        command: ["bright", "fgCyan"],
        type: ["bright", "fgBlue"],
        text: ["bright", "fgGreen"]
    },
})

