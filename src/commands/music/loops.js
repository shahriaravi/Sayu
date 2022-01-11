module.exports = ({
    name: "loopsong",
    $if: "v4",
    aliases: "loops",
    code: `
    $if[$loopStatus==none]
    $sendMessage[Now looping \`song\`.;no]
    $else
    $sendMessage[Now looping \`none\`;no]
    $endif
    $let[e;$loopSong]
    $onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
    $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
        `
         });     
    
