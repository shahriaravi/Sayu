module.exports = {
    name: "$alwaysExecute", 
    nonPrefixed: true,
    code: `
    $onlyIf[$mentioned[1]==$clientID;]
    $color[$getVar[color]]
    $thumbnail[$userAvatar[$clientID]]
    $title[$getVar[name] - High Quality Music]
    $description[
**• Prefix:** \`$getServerVar[prefix]\`
**• Set New Prefix:** \`$getServerVar[prefix]prefix <new prefix>\`
    
Join a voice channel and \`$getServerVar[prefix]play\` a song.
Type \`$getServerVar[prefix]help\` for the list of commands.
[Invite]($getVar[inv]) | [Vote]($getVar[vote]) | [Support]($getVar[sserver]) | [Creavite.co](https://creavite.co)]
$footer[Latency: $ping ms | Uptime: $client[readytimestamp]]
$onlyIf[$message[2]==;]`
   };  
