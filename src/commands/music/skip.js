module.exports = ({
    name: "skip",
    $if: "v4",
    aliases: ["s","next"],
    code: `
   $skipSong
   $addCmdReactions[⏭️]
   $onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
   $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
`
    });
