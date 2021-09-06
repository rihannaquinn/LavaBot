const { MessageEmbed, version: djsversion } = require("discord.js");
const cpuStat = require("cpu-stat");
const moment = require("moment");
const os = require("os");

module.exports = {
  name: "botinfo",
  category: "Info",
  description: "Displays indept information about the bot.",
  aliases: ["bot", "botinfo"],
  usage: "botinfo",
  userperms: [],
  botperms: ["USE_EXTERNAL_EMOJIS"],
  run: async (client, message, args) => {
    cpuStat.usagePercent(function(error, percent, seconds) {
      if (error) {
        return console.error(error);
      }
      const embed = new MessageEmbed()
        .setThumbnail(
          client.user.displayAvatarURL({ dynamic: true, size: 512 })
        )
        .setColor(
          message.guild.members.cache.get(client.user.id).displayHexColor
        )
        .setFooter(`Requested by ${message.author.tag} `)
        .setTimestamp()
        .setTitle("Bot Information")
        .addField("General ❯", [
          `> **:smile: Bot Name: \`${client.user.tag}\`**`,
          `> **\\📇 Bot ID: \`${client.user.id}\`**`,
          `> **\\🌐 Servers: \`${client.guilds.cache.size.toLocaleString()}\` Servers**`,
          `> **\\👥 Users: \`${client.users.cache.size.toLocaleString()}\` Users**`,
          `> **\\📺 Channels: \`${client.channels.cache.size.toLocaleString()}\` Channels**`,
          `> **\\💬 Commands: \`${client.commands.size}\` Commands**`,
          `> **\\📅 Created: \`${moment(client.user.createdTimestamp).format(
            "MMMM Do YYYY, h:mm:ss"
          )}\` | \`${Math.floor(
            (Date.now() - client.user.createdTimestamp) / 86400000
          )}\` day(s) ago**`,
          "\u200b"
        ])
        .addField("System ❯", [
          `> **Node.js: \`${process.version}\`**`,
          `> **Discord.js: \`v${djsversion}\`**`,
        ]);
      message.channel.send(embed);
    });
  }
};