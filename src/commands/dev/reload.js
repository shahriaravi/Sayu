module.exports = ({
    name: "reload",
    code: `
    Connecting to bot's server...
    $editIn[3s;**New Commands Count:** $get[new] command(s)\n**Reloaded:** $commandsCount command(s)]
    $let[new;$math[$get[after]-$get[before]]]
    $let[after;$commandsCount]
    $updateCommands
    $let[before;$commandsCount]
    $addCmdReactions[👌]
    $onlyForIDs[758726005174173696;610804106344529931;]
    `
    })