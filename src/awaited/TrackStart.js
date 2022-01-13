const deldur = `$replaceText[$replaceText[$splitText[1];(;];);] $textSplit[$songInfo[duration]; ]`;

module.exports = {
    type: "awaited",
    name: "music1",
    $if: 'v4',
    code: `
    $deleteIn[${deldur}s]
     $setVar[played;$sum[$getvar[played];1]]
     $color[$getVar[color]]
     $image[$songInfo[thumbnail]]
     $deafenUser[$clientID;yes]
     $title[Now Playing:]
     $description[**[$songInfo[title]]($songInfo[url]) by <@$songInfo[userID]>**\n\n*[A vote is very much appreciated]($getVar[vote])*]
     $addTimeStamp
    `
}
