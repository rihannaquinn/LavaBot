const {Message} = require('discord.js')

module.exports = {
  name: "nuke",
  aliases: ["nuke"],
  description: "nuke channel",
  run: async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return;
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply("I need Manage Channels Permission!")
    
    message.channel.clone().then((ch) => {
       ch.setParent(message.channel.parent.id);
       ch.setPosition(message.channel.position);
       message.channel.delete()
       ch.send("<a:tick:811476337537449985> This channel has been Nuked <a:tick:811476337537449985>")
    })
  }
}