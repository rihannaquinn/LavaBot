
const Discord = require("discord.js"); 

module.exports = {
  name: "forceban",
  aliases: ["idban","ban"],
  description: "Ban someone from the server with ID!",
  usage: "forceban <user-id>",

  run : async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply("Insufficient Authority!");
  let nrcos_user = args[0];
  if (isNaN(nrcos_user)) return message.reply("You must enter the correct ID!");
  await message.guild.members.ban(nrcos_user);
  return message.reply(`\`${nrcos_user}\`has been banned from the server!`);
}
}