module.exports = [{
    type: "readyCommand",
    channel: "",
    code: `$log[[
$formatDate[$dateStamp;LLLL]]  › ✔  ready     Guilds $serverCount
[$formatDate[$dateStamp;LLLL]] › ✔  ready     Members $allMembersCount ready
[$formatDate[$dateStamp;LLLL]] › ✔  ready     $userTag[$clientID] is ready
[$formatDate[$dateStamp;LLLL]] › 🛰️  api      API listening at http://localhost:20101]`
},
 {
    type: "readyCommand",
    channel: "$getVar[readyChannel]",
    code: `$setVar[last;$dateStamp]
    $userTag[$clientID] is online: $serverCount servers and $allMembersCount members.
    `
}]
