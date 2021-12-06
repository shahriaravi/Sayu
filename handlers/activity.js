module.exports = (bot) => {
    bot.status({
        text: "@Sayu | .help",
        type: "LISTENING",
        status: "online",
        time: 12
    })

    bot.status({
        text: "sayubot.xyz/invite",
        type: "PLAYING",
        status: "online",
        time: 12
    })
}