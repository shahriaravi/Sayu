module.exports = {
    name: 'space',
    code: `
$if[$toLowercase[$message]==on]
$songFilter[phaser:1;flanger:0;gate:0;surround:0;bass:0;pitch:1;speed:1;earwax:0;echo:1;contrast:0;pulsator:0;vibrato:0:$message[1]]

$else
$songFilter[phaser:0;flanger:0;gate:0;surround:0;bass:0;pitch:1;speed:1;earwax:0;echo:0;contrast:0;pulsator:0;vibrato:0:$message[1]]
$endif

The space effect is \`$message\` for the player.

$onlyIf[$checkContains[$message[1];on;off]==true;You are missing a required command argument: \`value\`\nCommand usage: \`$getServerVar[prefix]space [on|off]\`]
$argsCheck[1;You are missing a required command argument: \`value\`\nCommand usage: \`$getServerVar[prefix]space [on|off]\`]
$onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
$onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
`
}