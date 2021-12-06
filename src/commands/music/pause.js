module.exports = ({
    name: "pause",
    code:`The player has been paused.
   $pauseSong
   $onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
   $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
   `
   });
   