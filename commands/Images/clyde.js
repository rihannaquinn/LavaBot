const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "clyde",
  aliases:[],
  category: "image",
  description: "let clyde say something",
  usage: "clyde <text>",
  run: async (client, message, args) => {
    const text = args.join(" ");
    if (!text) return message.reply("Please provide text");

    const data = await fetch(
      `https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`
    ).then((res) => res.json());

    const embed = new MessageEmbed()
      .setTitle("Clyde")
      .setImage(data.message)
      .setFooter(message.author.username)
      .setColor("BLUE")
      .setDescription(
        `[Click here if the image failed to load.](${data.message})`
      );

    message.channel.send(embed);
  },
};
