module.exports = ({
    name: "skipto",
    $if: "v4",
    aliases: ['jump'],
    code:
    `
   Skipped to song number \`$message[1]\` in the queue.
   $skipTo[$message[1]]
    $onlyIf[$isnumber[$message[1]]==true;The song number format for skipto must be numeric.]
   $onlyIf[$message[1]!=;You are missing a required command argument: \`song number in the queue\`\nCommand usage: \`$getServerVar[prefix]skipto <number>\`]
   $onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
   $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
`
   })
