const {Message} = require('discord.js')

module.exports = {
  name: "b",
  aliases: ["bnuke"],
  description: "nuke channel",
  run: async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply("I need Manage Channels Permission!")
    
    message.channel.clone().then((ch) => {
       message.channel.delete()
       ch.send("<a:tick:811476337537449985> This channel has been Nuked <a:tick:811476337537449985>")
    })
  }
}