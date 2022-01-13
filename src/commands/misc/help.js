module.exports = {
    name: "help",
    code: `$color[1;$getVar[color]]
$author[1;Commands;$userAvatar[$clientid]]

$description[1;[Invite]($getVar[inv]) • [Vote]($getVar[vote]) • [Support]($getVar[sserver])
$addField[1;Server Setting;
\`clear-filters\`, \`prefix\`
   ]

 $addField[1;Filters;
\`bassboost\`, \`3D\`, \`8D\`, \`16D\`, \`echo\`, \`gate\`, \`nightcore\`, \`phaser\`, \`pitch\`, \`purebass\`, \`slowed\`, \`space\`, \`speed\`, \`vaporwave\`
 ]

$addField[1;Misc;
\`help\`, \`invite\`, \`ping\`, \`stats\`, \`support\`, \`uptime\`, \`vote\`
   ]
 
$addField[1;Music;
\`clearqueue\`, \`disconnect\`, \`join\`, \`loopqueue\`, \`loopsong\`, \`lyrics\`, \`nowplaying\`, \`pause\`, \`play\`, \`queue\`, \`remove\`, \`repeat\`, \`resume\`, \`search\`, \`seek\`, \`shuffle\`, \`skip\`, \`skipto\`, \`stop\`, \`volume\`
 ]]

$footer[1;Requested by $userTag;$authorAvatar]
$addTimeStamp[1]
$channelSendMessage[$getVar[messageChannel];$username#$discriminator[$authorID] (\`$authorID\`) used \`help\` command at $serverName (\`$guildID\`) in <#$channelID> (\`$channelID\`)]
   `
   }
