module.exports = ({
    name: "stop",
    $if: "v4",
    code: `
   $stopSong
   The player has been completely stopped!
   $onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
   $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
`
});
