module.exports = ({
    name: "repeat",
    $if: "v4",
    code: `$onlyIf[$voiceID[$clientID]==;{execute:music1}]
    $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
    $onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
    $sendMessage[Replaying track: **$songInfo[title]**;no]
    $seekTo[0]`
})
