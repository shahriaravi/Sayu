module.exports = ({
        name: "shuffle",
        code: `
       $if[$loopStatus==none]
       $addCmdReactions[🔀]
       $else
       $sendMessage[UNRANDOMIZED!;no]
       $endif
       $let[e;$shuffleQueue]
       $onlyIf[$queueLength>3;Need at least 3 songs in the queue to shuffle.]
       $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]`
        });
