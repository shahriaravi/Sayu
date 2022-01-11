module.exports = ({
    name: "join",
    $if: "v4",
    aliases: ['connect'],
    code: `
  $addCmdReactions[👋]
   $joinvc[$voiceid[$authorid]]
   $onlyif[$voiceid[$clientid]==;$getVar[alreadyVoiceChannel]]
   $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
   $onlybotperms[connect;$getVar[noPermissionConnect]]
   `
   })
