const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "report",
  aliases: [],
  description: "Report A User!",
  usage: "Report <Mention User> | <Reason>",
  run: async (client, message, args) => {
    var a = message.id;
    let ReportedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!ReportedUser) { message.channel.send("Unable to find this user."); }
    else {
        let ReportReason = args.join(" ").slice(22);

        let ReportEmbed = new Discord.MessageEmbed()
            .setDescription("Report")
            .setColor("ffbe00")
            .addField("Reported user: ", `${ReportedUser}`)
            .addField("Reported by: ", `${message.author}`)
            .addField("Reported on channel: ", message.channel)
            .addField("Time: ", message.createdAt)
            .addField("Reason: ", ReportReason);
      
      message.channel.send("sent your report to 📝｜reports channel")

        let Report = message.guild.channels.cache.find(c => c.name == "📝｜reports") 
      
        try {
         Report.send(ReportEmbed)
        }catch (err) {
          message.channel.send(ReportEmbed)
        message.channel.messages.fetch(a).then(msg => msg.delete({ timeout: 1000 }));// deletes only the report text by author and nothing else
    }
    }
  }
}