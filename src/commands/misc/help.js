module.exports = {
    name: "help",
    code: `$color[$getVar[color]]
$author[Commands;$userAvatar[$clientid]]

$description[[Invite]($getVar[inv]) • [Vote]($getVar[vote]) • [Support]($getVar[sserver])
$addField[Server Setting;
\`clear-filters\`, \`prefix\`
   ]

 $addField[Filters;
\`bassboost\`, \`3D\`, \`8D\`, \`16D\`, \`echo\`, \`gate\`, \`nightcore\`, \`phaser\`, \`pitch\`, \`purebass\`, \`slowed\`, \`space\`, \`speed\`, \`vaporwave\`
 ]

$addField[Misc;
\`help\`, \`invite\`, \`ping\`, \`stats\`, \`support\`, \`uptime\`, \`vote\`
   ]
 
$addField[Music;
\`clearqueue\`, \`disconnect\`, \`join\`, \`loopqueue\`, \`loopsong\`, \`lyrics\`, \`nowplaying\`, \`pause\`, \`play\`, \`queue\`, \`remove\`, \`repeat\`, \`resume\`, \`search\`, \`seek\`, \`shuffle\`, \`skip\`, \`skipto\`, \`stop\`, \`volume\`
 ]]

$footer[Requested by $userTag;$authorAvatar]
$addTimeStamp
$channelSendMessage[$getVar[messageChannel];$username#$discriminator[$authorID] (\`$authorID\`) used \`help\` command at $serverName (\`$guildID\`) in <#$channelID> (\`$channelID\`)]
   `
   }