const discord = require("discord.js");

module.exports = {
  name: "membercount",
  category: "info",
  aliases:["members", "member count", "memberscount"],
  description: "Get your id",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setDescription(
    `**❯ <a:tick:811476337537449985> Total Members - ${message.guild.memberCount}**
    **❯ <a:tick:811476337537449985>  Humans - ${message.guild.members.cache.filter(m => !m.user.bot).size}**
    **❯ <a:tick:811476337537449985>  Bots - ${message.guild.members.cache.filter(m => m.user.bot).size}**`)
    .setColor("RANDOM")
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel.send(embed)
  }
}