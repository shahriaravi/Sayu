module.exports = {
    type: "botLeaveCommand",
      channel: "$getVar[guildChannel]",
      code: `
     $title[$getVar[name] has been removed from a server.]
     $thumbnail[$serverIcon]
     $addfield[**Member Count**;$memberscount]
     $addField[**Guild ID**;\`$guildID\`]
     $addField[**Server Owner**;<@$ownerID> (\`$ownerID\`)]
     $addField[**Server Name**;$serverName]
     $color[RED]
     $footer[Total guilds count: $serverCount]
     $addTimestamp
      `
    }