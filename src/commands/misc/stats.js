module.exports = {
    name: 'info',
    aliases: ["botinfo", "about", "stats"],
    code: `
$thumbnail[1;$userAvatar[$clientid]]
  $color[1;$getVar[color]]
  $title[1;$getVar[name]'s Statistics]
  $description[1;**Uptime:** \`$djsEval["$uptime[humanize]".split(" ").slice(0,-1).join(" ");yes]\`\n**Memory Usage:** \`$roundTenth[$ram;2]\`\n**CPU Usage:** \`$cpu%\`\n**Guilds:** \`$serverCount\`\n**Channels:** \`$allChannelsCount\`\n**Songs Played:** \`$getVar[played]\`\n**Discord.js Version:** \`v13.2.0\`\n**Node Version**: \`$nodeVersion\`\n**Sayu Version:** \`v3.2.0\` \n[Invite]($getVar[inv]) | [Vote]($getVar[vote]) | [Support]($getVar[sserver])]
  $footer[1;Requested by $userTag;$authorAvatar]
  $addTimeStamp[1]
  `
  }
