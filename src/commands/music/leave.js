module.exports = ({
    name: "leave",
    aliases: ['disconnect', 'dc'],
    code: `
   Disconnected from voice channel.
   $leavevc
   $onlyif[$voiceid[$clientid]!=;Sorry, I am not connected to any voice channel.]
   $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
   `
   })