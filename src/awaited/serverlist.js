module.exports = {
    type: "awaitedCommand",
    name: "ac",
    code: `
    **Name** : $serverName[{value}]
    **Id** : {value}
    **Invite** : $getServerInvite[{value}]
    `
}