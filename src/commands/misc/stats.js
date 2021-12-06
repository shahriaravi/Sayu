module.exports = {
    name: 'info',
    aliases: ["botinfo", "about", "stats"],
    code: `
$thumbnail[$userAvatar[$clientid]]
  $color[$getVar[color]]
  $title[Sayu's Statistics]
  $description[**Uptime:** \`$client[readytimestamp]\`\n**Memory Usage:** \`$ram\`\n**CPU Usage:** \`$cpu%\`\n**Guilds:** \`$serverCount\`\n**Channels:** \`$allChannelsCount\`\n**Songs Played:** \`$getVar[played]\`\n**Discord.js Version:** \`v13.2.0\`\n**Node Version**: \`$nodeVersion\`\n**Sayu Version:** \`v3.0.2\`\n[Invite]($getVar[inv]) | [Vote]($getVar[vote]) | [Support]($getVar[sserver]) | [Creavite.co](https://creavite.co)]
  $footer[Requested by $userTag;$authorAvatar]
  $addTimestamp
  `
  }

  