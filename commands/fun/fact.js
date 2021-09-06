const client = require("nekos.life");
const { Discord, richEmbed } = require("discord.js");
const neko = new client();

module.exports = {
  name: "fact",
  aliases: ["fact"],
  description: "sends a cool fact",
  usage: "[command]",
  run: async (client, message, args) => {
    
    message.delete()

    //command
    async function work() {
      let bunny = await neko.sfw.fact();
      message.channel.send(bunny.fact).catch(error => {
        console.error(error);
      });
    }
    work();
  }
};

