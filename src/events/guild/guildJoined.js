module.exports = {
    type: "guildJoin",
      channel: "$getVar[guildChannel]",
      code: `
     $title[1;$getVar[name] has been added to a server.]
     $thumbnail[1;$serverIcon]
     $addfield[1;**Member Count**;$memberscount]
     $addField[1;**Guild ID**;\`$guildID\`]
     $addField[1;**Server Owner**;<@$ownerID> (\`$ownerID\`)]
     $addField[1;**Server Name**;$serverName]
     $color[1;GOLD]
     $footer[1;Total guilds count: $serverCount]
     $addTimestamp[1]
      `
    }
