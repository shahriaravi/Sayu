module.exports = (bot) => {
    bot.variables({
        sameVoiceChannel: 'You are not in the same voice channel as the bot.',
        noVoiceChannel: 'You need to be in a voice channel to use this command.',
        noSongsPlaying: 'There are no songs currently playing, please play a song to use the command.',
        alreadyVoiceChannel: "Bot is already connected to another voice channel.",
        noPermissionConnect: 'Bot requires **Connect** permission(s) to run this command.',
        noPermissionSpeak: 'Bot requires **Speak** permission(s) to run this command.'
    })
}