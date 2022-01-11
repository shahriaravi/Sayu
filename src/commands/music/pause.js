module.exports = ({
    name: "pause",
    $if: "v4",
    code:`The player has been paused.
   $pauseSong
   $onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
   $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
   `
   });
   
