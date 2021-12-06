module.exports = ({
    name: "seek",
    code:
    `
   Track is now on \`$message\` seconds.
   $seekTo[$message]
    $onlyIf[$isnumber[$message[1]]==true;The time format for seek is invalid.]
   $argsCheck[>1;Please use \`$getServerVar[prefix]seek 30\` or \`$getServerVar[prefix]seek 130\`]
   $onlyIf[$message[1]!=;You are missing a required command argument: \`seek duration (in seconds)\`\nCommand usage: \`$getServerVar[prefix]seek <duration>\`]
   $onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
   $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
`
   })