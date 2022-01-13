module.exports = { 
    name: "ping",
    code: `
👌 Connecting to bot's server...
$editIn[1s;**👌 Pong!**
> Websocket: \`$numberSeparator[$ping]ms\`, API: \`$numberSeparator[$messagePing]ms\`, Database: \`$numberSeparator[$dbPing]ms\`, Average: \`$numberSeparator[$truncate[$divide[$sum[$ping;$messagePing;$dbPing];3]]]ms\`]
$channelSendMessage[$getVar[messageChannel];$username#$discriminator[$authorID] (\`$authorID\`) used \`ping\` command at $serverName (\`$guildID\`) in <#$channelID> (\`$channelID\`)]
`
}
