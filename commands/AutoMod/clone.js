const {Message} = require('discord.js')

module.exports = {
  name: "clone",
  aliases: ["clone"],
  description: "Clone channel",
  run: async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply("I need Manage Channels Permission!")
    
    message.channel.clone().then((ch) => {
       ch.send("<a:tick:811476337537449985> This channel has been Cloned <a:tick:811476337537449985>")
    })
  }
}