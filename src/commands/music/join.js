module.exports = ({
    name: "join",
    aliases: ['connect'],
    code: `
  $addCmdReactions[👋]
   $joinvc[$voiceid[$authorid]]
   $onlyif[$voiceid[$clientid]==;$getVar[alreadyVoiceChannel]]
   $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
   $onlybotperms[connect;$getVar[noPermissionConnect]]
   `
   })
