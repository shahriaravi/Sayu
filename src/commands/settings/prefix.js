module.exports  = {
    name: 'prefix',
    code: `
  $setServerVar[prefix;$message[1]]
  Changed the command prefix to: \`$message[1]\`
  $onlyIf[$message[1]!=;The current prefix is: \`$getServerVar[prefix]\`\nTo set new prefix: \`$getServerVar[prefix]prefix <new prefix>\`]
  $onlyIf[$checkContains[$message;@everyone;@here;@;#]!=true;Invalid value.]
  $onlyIf[$charCount[$message[1]]<4;Invalid value.]
  $onlyperms[manageserver;You do not have the required permissions to run this command]
    `
    }
  