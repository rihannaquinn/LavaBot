const discord = require("discord.js");
module.exports = {
   name: "deafenall",
   aliases: ['deafenall','de','deafall'],
   description: "Deafen everyone",
   run: async(client, message, args) => {


  if (!message.member.hasPermission('MUTE_MEMBERS')) return message.reply("You do not have the permission to do that!");
  if (!message.member.voice.channel) return message.reply("You are not in a voice channel!");
  let channel = message.member.voice.channel;
  for (let memberi of channel.members) {
    await memberi[1].voice.setDeaf(true);
  }
  message.channel.send("Deafened all!").then(async (msg) => {
    //DELETE ALL MESSAGES WITH THE MESSAGE ID IN 3 SECONDS
    await message.channel.messages.fetch(msg.id).then(msg => msg.delete({ timeout: 3000 }));
  });
  //DELETE ALL MESSAGES WITH THE MESSAGE ID IN 1 SECONDS
  await message.channel.messages.fetch(message.id).then(msg => msg.delete({ timeout: 1000 }));

}
}