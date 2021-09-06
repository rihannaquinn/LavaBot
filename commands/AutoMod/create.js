const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
  name: "create",
  aliases: ["create"],
  description: "Create Channel",
  run: async (client, message, args) => {
    if (!message.member.permissions.has('MANAGE_CHANNELS'));
    
    const channelNameQuery = args.join(" ");
    if(!channelNameQuery)
    return message.reply("Please give me a channel name!");
    
    message.guild.channels.create(channelNameQuery).then((ch) => {
      message.channel.send(`<a:tick:811476337537449985> Click ${ch} to get acesss to the newly created channel <a:tick:811476337537449985>`)
    })
   },
	};