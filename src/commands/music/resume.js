module.exports = ({
    name: "resume",
    $if: "v4",
    code:`The player has been resumed.
   $resumeSong
   $onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
   $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
`
   });
