const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
  name: "bpurge",
  aliases: ["botclear", "botpurge"],
  description: "Purges Bot Messages",
  run: async (client, message, args, bot) => {
     try {
        message.channel.messages.fetch().then(messages => {
            const botMessages = messages.filter(msg => msg.author.bot);
            message.channel.bulkDelete(botMessages);
        });
    } catch (err) {
        return;
    }
    message.delete();
}
}