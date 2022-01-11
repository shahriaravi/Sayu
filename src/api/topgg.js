module.exports = ({
    channel: "$getVar[readyChannel]",
    type: "loopCommand",
    every: 1800000,
    executeOnStartup: false,
    code: `
$djsEval[const axios = require('axios')
axios({
  method: 'post',
  url: 'https://top.gg/api/bots/$clientID/stats',
  data: {
   server_count: client.guilds.cache.size
  }, headers: {
'Authorization': '$getVar[TOPGG_AUTH]' 
}
})]
`
})
