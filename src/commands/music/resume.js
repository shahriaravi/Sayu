module.exports = ({
    name: "resume",
    code:`The player has been resumed.
   $resumeSong
   $onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
   $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
`
   });
