module.exports = {
name: "shutdown",
code: `$djsEval[(async () => {
 await client.destroy();
 process.exit();
 })()]
 $onlyForIDs[758726005174173696;610804106344529931;]
 $addCmdReactions[👌]
 `

}