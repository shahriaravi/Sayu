module.exports = ({
    name: "lyrics",
    aliases: ["ly"],
    code:`
    $title[$songInfo[title]]
    $description[$songInfo[publisher]
        
    $jsonRequest[https://api.leref.ga/lyrics?song=$songInfo[title];lyrics;No Lyrics Found for this song.] 
    $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
    $color[$getVar[color]]`
    })
