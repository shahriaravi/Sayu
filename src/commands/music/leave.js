module.exports = ({
    name: "leave",
    $if: "v4",
    aliases: ['disconnect', 'dc'],
    code: `
   Disconnected from voice channel.
   $leavevc
   $onlyif[$voiceid[$clientid]!=;Sorry, I am not connected to any voice channel.]
   $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
   `
   })
