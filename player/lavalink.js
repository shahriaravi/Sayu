module.exports = (bot) => {
    const Aoijs = require('aoi.js')
    const Lavalink = new Aoijs.Lavalink(bot);
    
    
    Lavalink.addNode({
        url: "lavalink.sayubot.xyz",
        password: "password",
        name: "sayu",
        secure: true,
        }) 
        
        Lavalink.trackStartCommand({
            channel: "$channelID",
            code: `
            $setVar[played;$sum[$getvar[played];1]]
            $color[1;$getVar[color]]
            $title[1;Now playing:]
            $description[1;**[$lavalinkExecute[songInfo;title]]($lavalinkExecute[songInfo;url]) in <#$voiceID[$clientID]>**\n\n*[A vote is very much appreciated]($getVar[vote])*]
            $image[1;$lavalinkExecute[getthumbnail;$lavalinkExecute[songinfo;identifier];maxresdefault]]
            $addTimeStamp[1]`
            });
}
