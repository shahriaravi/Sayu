module.exports = ({
    name: "clear-queue",
     aliases: ["cq","clearqueue"],
    code: `
    $clearSongQueue
    Queue has been cleared.
    $onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
    $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
    `
    })