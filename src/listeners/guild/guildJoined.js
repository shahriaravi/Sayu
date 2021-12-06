module.exports = {
    type: "botJoinCommand",
      channel: "$getVar[guildChannel]",
      code: `
     $title[$getVar[name] has been added to a server.]
     $thumbnail[$serverIcon]
     $addfield[**Member Count**;$memberscount]
     $addField[**Guild ID**;\`$guildID\`]
     $addField[**Server Owner**;<@$ownerID> (\`$ownerID\`)]
     $addField[**Server Name**;$serverName]
     $color[GOLD]
     $footer[Total guilds count: $serverCount]
     $addTimestamp
      `
    }