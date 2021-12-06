module.exports = {
    name: "remove",
    code: `$sendMessage[Song number \`$message[1]\` has been removed from the queue.;no] 
 $movesong[$sum[$message[1];1];]
 $onlyIf[$isnumber[$message[1]]==true;The song number format for remove must be numeric.]
 $onlyIf[$message[1]!=;You are missing a required command argument: \`song number in the queue\`\nCommand usage: \`$getServerVar[prefix]remove <number>\`]
 $onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
 $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
 `
 }