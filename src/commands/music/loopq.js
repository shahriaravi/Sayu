module.exports = ({
    name: "loopqueue",
    $if: "v4",
    aliases: "loopq",
    code: `
   $if[$loopStatus==none]
   $sendMessage[Now looping \`queue\`.;no]
   $else
   $sendMessage[Now looping \`none\`;no]
   $endif
   $let[e;$loopQueue]
   $onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
   $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
   `
    });    
