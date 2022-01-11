module.exports = ({
    name: "clear-queue",
    $if: "v4",
    aliases: ["cq","clearqueue"],
    code: `
    $clearSongQueue
    Queue has been cleared.
    $onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
    $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
    `
    })
