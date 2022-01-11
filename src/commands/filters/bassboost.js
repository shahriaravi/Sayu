module.exports = {
    name: 'bassboost',
    $if: "v4",
    code: `
  $sendMessage[Current bassboost: \`$message\`.;no]
  $songFilter[bass:$message[1]]
  
  $onlyIf[$message[1]<=20;You can set maximum bassboost upto \`20\`!]
  $onlyIf[$message[1]>=-20;You can set minimum bassboost upto \`-20\`!]
  $onlyIf[$isnumber[$message[1]]==true;Failed to parse the \`number\` param: \`bassboost must be numeric.\`\nCommand usage: \`$getServerVar[prefix]bassboost <-20 - 20>\`]
  $onlyIf[$message[1]!=;You are missing a required command argument: \`number\`\nCommand usage: \`$getServerVar[prefix]bassboost <number>\`]
  $onlyIf[$queueLength!=0;$getVar[noSongsPlaying]]
  $onlyIf[$voiceID!=;$getVar[noVoiceChannel]]
  `
  }
