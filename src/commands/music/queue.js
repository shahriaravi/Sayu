module.exports = ({
    name: "queue",
    $if: "v4",
    aliases: ['q'],
    code:
    `
$title[Queue for $serverName]
$description[Current Queue: Entries: **$sub[$queueLength;1]**

__Current Song Playing__: 
**[$songinfo[title]]($songInfo[url])** | \`$replaceText[$replaceText[$splitText[3];(;];);]$textSplit[$songInfo[duration]; ] Requested by: $usertag[$songinfo[userID]]\`

__Up Next:__
$queue[$replaceText[$replaceText[$checkCondition[$isnumber[$message[1]]==true];true;$replaceText[$replaceText[$checkCondition[$queue[$message[1];20;{title}]!=];false;1];true;$message[1]]];false;1];20;**{number}.** #RIGHT#**{title}**#LEFT#({url}) | \`Requested by: {username}#{discriminator}\`]

Current Song Duration Left: **$replaceText[$replaceText[$splitText[3];(;];);]$textSplit[$songInfo[duration_left]; ]**]
$footer[Page $getobjectproperty[page] | Looping: $replacetext[$loopstatus;none;❌];$authoravatar]
$addobjectproperty[page;$replacetext[$replacetext[$checkcondition[$isnumber[$message[1]]==true];true;$replacetext[$replacetext[$checkcondition[$queue[$message[1];11;{title}]!=];false;1];true;$message[1]]];false;1] / $replacetext[$replacetext[$checkcondition[$replacetext[$replacetext[$checkcondition[$gettextsplitlength==1];true;$truncate[$divide[$sub[$queuelength;1];10]]];false;$replacetext[$replacetext[$checkcondition[$splittext[2]==0];true;$truncate[$divide[$sub[$queuelength;1];10]]];false;$sum[$truncate[$divide[$sub[$queuelength;1];10]];1]]]==0];true;1];false;$replacetext[$replacetext[$checkcondition[$gettextsplitlength==1];true;$truncate[$divide[$sub[$queuelength;1];10]]];false;$replacetext[$replacetext[$checkcondition[$splittext[2]==0];true;$truncate[$divide[$sub[$queuelength;1];10]]];false;$sum[$truncate[$divide[$sub[$queuelength;1];10]];1]]]]]

$color[$getVar[color]]
$textSplit[$divide[$queueLength;20];.]
$onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
$onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
   
$onlyIf[$checkContains[$channelType;text;news]==true;]`
   });
