module.exports = {
    type: "guildLeave",
      channel: "$getVar[guildChannel]",
      code: `
     $title[1;$getVar[name] has been removed from a server.]
     $thumbnail[1;$serverIcon]
     $addfield[1;**Member Count**;$memberscount]
     $addField[1;**Guild ID**;\`$guildID\`]
     $addField[1;**Server Owner**;$userTag[$ownerID] <@$ownerID> (\`$ownerID\`)]
     $addField[1;**Server Name**;$serverName]
     $color[1;RED]
     $footer[1;Total guilds count: $serverCount]
     $addTimestamp[1]
      `
    }
