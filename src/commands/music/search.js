module.exports = [{
    name: "search",
    aliases: ["search-song"],
    perms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
    code: `$if[$voiceid[$clientid]!=]
$awaitmessages[$authorid;15s;1,2,3,4,5,6,7,8,9,10;search,search,search,search,search,search,search,search,search,search;**You didnt choose any song from given query!**{execute:search2}{delete:3s}]
$setglobaluservar[prefix;$getobjectproperty[song1]|$getobjectproperty[song2]|$getobjectproperty[song3]|$getobjectproperty[song4]|$getobjectproperty[song5]|$getobjectproperty[song6]|$getobjectproperty[song7]|$getobjectproperty[song8]|$getobjectproperty[song9]|$getobjectproperty[song10]]
$deletein[15s]
$author[Search;$useravatar[$authorID]]
$color[$getVar[color]]
$description[**Choose between 1 - 10**\n**1.** \`$getobjectproperty[s1]\`\n**2.** \`$getobjectproperty[s2]\`\n**3.** \`$getobjectproperty[s3]\`\n**4.** \`$getobjectproperty[s4]\`\n**5.** \`$getobjectproperty[s5]\`\n**6.** \`$getobjectproperty[s6]\`\n**7.** \`$getobjectproperty[s7]\`\n**8.** \`$getobjectproperty[s8]\`\n**9.** \`$getobjectproperty[s9]\`\n**10.** \`$getobjectproperty[s10]\`]
$djseval[const dc = require('discord.js')
require('yt-search')(d.args.join(' ')).then(x => {

let body = x.all
d.object.song1 = body[0].url
d.object.song2 = body[1].url
d.object.song3 = body[2].url
d.object.song4 = body[3].url
d.object.song5 = body[4].url
d.object.song6 = body[5].url
d.object.song7 = body[6].url
d.object.song8 = body[7].url
d.object.song9 = body[8].url
d.object.song10 = body[9].url
d.object.s1 = body[0].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')
d.object.s2 = body[1].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')
d.object.s3 = body[2].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')
d.object.s4 = body[3].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')
d.object.s5 = body[4].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')
d.object.s6 = body[5].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')
d.object.s7 = body[6].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')
d.object.s8 = body[7].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')
d.object.s9 = body[8].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')
d.object.s10 = body[9].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')
})]

$onlyif[$djseval[require('yt-search')(d.args.join(' ')).then(x => x.all);yes]!=[];**Song not found**]
$onlyIf[$message!=;You are missing a required command argument: \`song name\`\nCommand usage: \`$getServerVar[prefix]search [name]\`]
$onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
$cooldown[8s;]
$createobject[{}]
$elseif[$voiceid[$clientid]==;]
$awaitmessages[$authorid;15s;1,2,3,4,5,6,7,8,9,10;search,search,search,search,search,search,search,search,search,search;**You didnt choose any song from given query!**{execute:search2}{delete:3s}]
$setglobaluservar[prefix;$getobjectproperty[song1]|$getobjectproperty[song2]|$getobjectproperty[song3]|$getobjectproperty[song4]|$getobjectproperty[song5]|$getobjectproperty[song6]|$getobjectproperty[song7]|$getobjectproperty[song8]|$getobjectproperty[song9]|$getobjectproperty[song10]]
$deletein[15s]
$author[Search;$useravatar[$authorID]]
$color[$getVar[color]]
$description[**Choose between 1 - 10** \n**1.** \`$getobjectproperty[s1]\`\n**2.** \`$getobjectproperty[s2]\`\n**3.** \`$getobjectproperty[s3]\`\n**4.** \`$getobjectproperty[s4]\`\n**5.** \`$getobjectproperty[s5]\`\n**6.** \`$getobjectproperty[s6]\`\n**7.** \`$getobjectproperty[s7]\`\n**8.** \`$getobjectproperty[s8]\`\n**9.** \`$getobjectproperty[s9]\`\n**10.** \`$getobjectproperty[s10]\`]
$djseval[const dc = require('discord.js')
require('yt-search')(d.args.join(' ')).then(x => {

let body = x.all
d.object.song1 = body[0].url
d.object.song2 = body[1].url
d.object.song3 = body[2].url
d.object.song4 = body[3].url
d.object.song5 = body[4].url
d.object.song6 = body[5].url
d.object.song7 = body[6].url
d.object.song8 = body[7].url
d.object.song9 = body[8].url
d.object.song10 = body[9].url
d.object.s1 = body[0].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')
d.object.s2 = body[1].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')
d.object.s3 = body[2].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')
d.object.s4 = body[3].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')
d.object.s5 = body[4].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')
d.object.s6 = body[5].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')
d.object.s7 = body[6].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')
d.object.s8 = body[7].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')
d.object.s9 = body[8].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')
d.object.s10 = body[9].title.replace('#LEFT#', '\\)').replace('#RIGHT#', '\\(')

})]

$onlyif[$djseval[require('yt-search')(d.args.join(' ')).then(x => x.all);yes]!=[];**No song found.**]
$onlyIf[$message!=;You are missing a required command argument: \`song name\`\nCommand usage: \`$getServerVar[prefix]search [name]\`]
$onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
$cooldown[8s;]
$createobject[{}]
$endelseif
$endif
$botTyping`
}, {
    name: "search",
    type: "awaitedCommand",
    code: `$deletemessage[$channelid;$findnumbers[$getuservar[prefix]]]
$onlyif[$messageexists[$channelid;$findnumbers[$getuservar[prefix]]]==true;]

$sendmessage[{description: **Track Queued: $playsong[$splittext[$message];24h]**}{color:$getVar[color]};no]
$onlyif[$queuelength==0;{execute:search1}]
$onlyif[$djseval[require('yt-search')('$splittext[$message]').then(x => x.all[0].seconds);yes]<=10800;**Can't play song that's have duration more than 3 hours**]


$textsplit[$getglobaluservar[prefix];|]
$botTyping`
}, {
    name: "search1",
    type: "awaitedCommand",
    code: `$deletemessage[$channelid;$findnumbers[$getuservar[prefix]]]
$onlyif[$messageexists[$channelid;$findnumbers[$getuservar[prefix]]]==true;]

$sendmessage[{description: **Track Queued: $getobjectproperty[song]**}{color:$getVar[color]};no]
$deletecommand
$addobjectproperty[song;$playsong[$splittext[$message];24h]]
$suppressErrors
$createobject[{}]
$textsplit[$getglobaluservar[prefix];|]`
}, {
    name: "search2",
    type: "awaitedCommand",
    code: `$deletemessage[$channelid;$findnumbers[$getuservar[prefix]]]
$onlyif[$messageexists[$channelid;$findnumbers[$getuservar[prefix]]]==true;]
$addTimestamp
$botTyping`
}]
