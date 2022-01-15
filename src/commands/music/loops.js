module.exports = ({
    name: "loopsong",
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
    
