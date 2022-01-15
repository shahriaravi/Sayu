module.exports = {
    name: "clear",
    aliases: ["fix", "clear-filters"],
    code: `
$songFilter[phaser:0;flanger:0;gate:0;surround:0;bass:0;pitch:1;speed:1;earwax:0;echo:0;contrast:0;pulsator:0;vibrato:0]
Clearing..
$editIn[3ms;Clearing.. $random[1;30]%;Clearing.. $random[31;50]%;Clearing.. $random[51;70]%;Clearing.. $random[71;100]%;{title:Cleared.}{color:$getVar[color]}]
$onlyIf[$queueLength!=0;$getVar[emptyq]]
$onlyIf[$voiceID!=;$getVar[novc]]
    `
}
