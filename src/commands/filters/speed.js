module.exports = ({
    name: "speed",
    code: `$sendmessage[Player speed is set to \`$message[1]\`.;no]
   $songFilter[speed:$message[1]]
   $onlyIf[$message[1]<2;You can set maximum speed upto \`1.9\`]
   $onlyIf[$message[1]>0.1;You can set minimum speed upto \`0.2\`]
   $onlyIf[$message[1]!=;You are missing a required command argument: \`number\`\nCommand usage: \`$getServerVar[prefix]speed <number>\`]
   $onlyIf[$isnumber[$message[1]]==true;Failed to parse the \`number\` param: \`pitch must be numeric.\`\nCommand usage: \`$getServerVar[prefix]speed <0.2 - 1.9>\`]
   $onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
   $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
  ` 
   })
