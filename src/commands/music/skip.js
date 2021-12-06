module.exports = ({
    name: "skip",
    aliases: ["s","next"],
    code: `
   $skipSong
   $addCmdReactions[⏭️]
   $onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
   $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
`
    });