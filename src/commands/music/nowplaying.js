const duration = `$replaceText[$replaceText[$splitText[1];(;];);] $textSplit[$songInfo[duration]; ]`
const current = `$replaceText[$replaceText[$splitText[1];(;];);] $textSplit[$songInfo[current_duration]; ]`
const duration1 = `$jsonrequest[https://api.itzteduhyt.repl.co/progressbar?now=1?max=$advancedtextsplit[$songinfo[duration]; ;1];timestamp]`
const current1 = `$replaceText[$replaceText[$splitText[3];(;];);]$textSplit[$songInfo[current_duration]; ]`

module.exports = ({
 name: "nowplaying",
 $if: "v4",
 aliases: ["np"],
 code: `
$thumbnail[$songInfo[thumbnail]]
$color[$getVar[color]]
$title[Now Playing]
$description[
[$songInfo[title]]($songInfo[url]) by <@$songInfo[userID]>

**Progress Bar**
[$getObjectProperty[bar]]($songInfo[url]) \`${current1} /$advancedtextsplit[${duration1};/;2]\`]
$addTimeStamp

$djseval[const util = require('dbd.js-utils')
d.object.bar = util.progressBar(${current}, ${duration}, 15, "📀", "▬", "▬")]
$createObject[{}] 
$onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
$onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
`
})
