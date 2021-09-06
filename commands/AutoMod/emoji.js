const { RichEmbed } = require("discord.js");

module.exports = {

  name: "emoji",
  aliases:["emojis"],
  description: "Shows Emojis of server",

  run: async (client, message, args) => {
    
    try {

        let notAnimated = [];

        let animated = [];

        message.guild.emojis.cache.forEach(async emoji => {

          if (emoji.animated) animated.push(emoji.toString());

          else notAnimated.push(emoji.toString());

        });

        if (!animated[0]) animated = ['None'];

        if (!notAnimated[0]) notAnimated = ['None'];

        message.channel.send('**Server Emojis**\n **__ANIMATED  :__**\n' + animated.join(' ') + '\n**__NORMAL:__**\n' + notAnimated.join(' '), {split:true});

      } catch (err) {

        message.channel.send('Their was an error!\n' + err).catch();

      }
  }
  
}