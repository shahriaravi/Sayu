module.exports = {
    type: "botJoinCommand",
      channel: "$systemChannelID",
      code: `
      $color[$getVar[color]]
      $thumbnail[$userAvatar[$clientID]]
      $title[$getVar[name] - High Quality Music]
      $description[
Thank you for inviting me!
      
Join a voice channel and \`$getServerVar[prefix]play\` a song.
Type \`$getServerVar[prefix]help\` for the list of commands.
[Invite]($getVar[inv]) | [Vote]($getVar[vote]) | [Support]($getVar[sserver])]
      $footer[Latency: $ping ms | Uptime: $client[readytimestamp]]
      `
    }