module.exports = ({
    name: "invite",
    aliases: ["inv"],
    code: `👌 Use this url to invite me to your server: https://sayubot.xyz/invite
    $channelSendMessage[$getVar[messageChannel];$username#$discriminator[$authorID] (\`$authorID\`) used \`INVITE\` command at $serverName (\`$guildID\`) in <#$channelID> (\`$channelID\`)]
    `
})
