module.exports = { 
    name: "ping",
    code: `
👌 Connecting to bot's sever...
$editIn[1;**👌 Pong!**
> Websocket: \`$numberSeparator[$ping]ms\`, API: \`$numberSeparator[$botPing]ms\`, Database: \`$numberSeparator[$dbPing]ms\`, Average: \`$numberSeparator[$truncate[$divide[$sum[$ping;$botPing;$dbPing];3]]]ms\`]
$channelSendMessage[$getVar[messageChannel];$username#$discriminator[$authorID] (\`$authorID\`) used \`ping\` command at $serverName (\`$guildID\`) in <#$channelID> (\`$channelID\`)]
`
}
