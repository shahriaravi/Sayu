module.exports = ({
    name: "play",
    aliases: ['p'],
    code: `
$color[$getVar[color]]
$description[**Searching** :mag_right: \`$message\`]
$editIn[1s;{description:**Track Queued: $playSong[$message;24h;no;no]**}{color:$getVar[color]}]
$if[$checkContains[$message;https://open.spotify.com/]==true]
$playSpotify[$message;name;24h;yes;no;no]
$endIf
$onlyIf[$message[1]!=;You are missing a required command argument: \`song name or url\`\nCommand usage: \`$getServerVar[prefix]play [name|url]\`]
$onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
$onlybotperms[connect;$getVar[noPermissionConnect]]
$onlyBotPerms[speak;$getVar[noPermissionSpeak]]
$suppressErrors
$botTyping
$channelSendMessage[$getVar[messageChannel];{color:$getVar[color]}{title:Command: Play} {description: **User:** $username#$discriminator[$authorID] (\`$authorID\`)\n**Guild:** $serverName (\`$guildID\`)\n**Channel:** <#$channelID> (\`$channelID\`)\n**Song:** \`$message\`}]

`
});
