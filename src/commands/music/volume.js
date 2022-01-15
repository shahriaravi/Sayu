module.exports = ({
    name: "volume",
    aliases: ["v","vol"],
    code:`
   Player volume is now \`$message[1]%\`.
   $volume[$message]
   $onlyIf[$isnumber[$message[1]]==true;Failed to parse the \`number\` param: \`Volume must be numeric.\`
   Command usage: \`$getServerVar[prefix]volume <0 - 250>\`]
   $onlyIf[$message[1]<251;Failed to parse the \`number\` param: \`You can increase volume upto 250%.\`
   Command usage: \`$getServerVar[prefix]volume <0 - 250>\`]
   $onlyIf[$checkContains[$message;-]!=true;Invalid value.]
   $onlyIf[$charCount[$message[1]]<4;]
   $onlyIf[$message[1]!=;You are missing a required command argument: \`number\`\nCommand usage: \`$getServerVar[prefix]volume <number>\`]
   $onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
   $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
   `
   });
   
    
