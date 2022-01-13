module.exports = [{
    type: "ready",
    channel: "",
    code: `$log[
[$formatDate[$dateStamp;LLLL]] › ✔  ready     Guilds $serverCount
[$formatDate[$dateStamp;LLLL]] › ✔  ready     Members $allMembersCount
[$formatDate[$dateStamp;LLLL]] › ✔  ready     $userTag[$clientID] is ready
[$formatDate[$dateStamp;LLLL]] › 🛰️  api       $ping ms]`
},
 {
    type: "ready",
    channel: "$getVar[readyChannel]",
    code: `
    $userTag[$clientID] is online: $serverCount servers and $allMembersCount members.
    `
}]
