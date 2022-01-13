module.exports = {
    type: "guildJoin",
      channel: "$systemChannelID",
      code: `
      $color[1;$getVar[color]]
      $thumbnail[1;$userAvatar[$clientID]]
      $title[1;$getVar[name] - High Quality Music]
      $description[1;
Thank you for inviting me!
      
Join a voice channel and \`$getServerVar[prefix]play\` a song.
Type \`$getServerVar[prefix]help\` for the list of commands.
[Invite]($getVar[inv]) | [Vote]($getVar[vote]) | [Support]($getVar[sserver])]
      $footer[1;Latency: $ping ms | Uptime: $djsEval["$uptime[humanize]".split(" ").slice(0,-1).join(" ");yes]]
      `
    }
