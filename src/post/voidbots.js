
module.exports = ({
    channel: "$getVar[readyChannel]",
    type: "loopCommand",
    every: 1800000,
    executeOnStartup: false,
    code: `
$djsEval[const fetch = require("node-fetch")
fetch(https://api.voidbots.net/bot/stats/872844020416675892, {
    method: "POST",
    headers: { 
      Authorization: "VOID_LPI6JCwfU1MS41NjJ1FF7rmg4kAVZhpVEIsXZ6XFhjLtYydk",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({"server_count": client.guilds.cache.size, "shard_count": client.shards.cache.size })
  }).then(response => response.text())
.then(console.log).catch(console.error);]
`
})