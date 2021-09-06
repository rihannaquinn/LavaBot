const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "pokemon",
  description: "<a:tick:811476337537449985> Get any pokemon description <a:tick:811476337537449985>",
  aliases: ["pokemon"],
  usage: "pokemon <name>",
  run(client, message, args) {
    message.delete();

    const options = {
      url: `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${args.join(
        " "
      )}`,
      json: true
    };

    message.channel
      .send(
        `**Informtion for the Pokemon Note: If you seeing this message that means u enterd pokemon name wrong pls re check speelings and enter**`
      )
      .then(msg => {
        get(options).then(body => {
          let embed = new MessageEmbed()
            .setAuthor(
              body.name,
              `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.typeIcon}`
            )
            .setDescription(
              `<a:tick:811476337537449985> Type of this pokemon is **${body.info.type}**. ${body.info.description} <a:tick:811476337537449985>`
            )
            .setThumbnail(
              `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.photo}`
            )
            .setColor("RANDOM")
            .setFooter(
              `Weakness of pokemon - ${body.info.weakness}`,
              `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.weaknessIcon}`
            );

          message.channel.send(embed);
          msg.delete();
        });
      });
  }
};
