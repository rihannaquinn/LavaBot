const discord = require("discord.js");

const imdb = require("imdb-api");

module.exports = {
  name: "imdb",

  aliases: ["imdb"],

  description: "<a:tick:811476337537449985> Get the information about series and movie <a:tick:811476337537449985>",

  category: "info",

  usage: "imdb <name>",

  run: async (client, message, args, color) => {
    if (!args.length) {
      return message.channel.send("Please give the name of movie or series");
    }

    const imob = new imdb.Client({ apiKey: "5e36f0db" }); //You need to paste you imdb api

    let movie = await imob.get({ name: args.join(" ") });

    let embed = new discord.MessageEmbed()

      .setTitle(movie.title)

      .setColor("RANDOM")

      .setThumbnail(movie.poster)

      .setDescription(movie.plot)

      .setFooter(`Ratings: ${movie.rating}`)

      .addField("<a:tick:811476337537449985> Country <a:tick:811476337537449985>", movie.country, true)

      .addField("<a:tick:811476337537449985> Languages <a:tick:811476337537449985>", movie.languages, true)

      .addField("<a:tick:811476337537449985> Type <a:tick:811476337537449985>", movie.type, true);

    message.channel.send(embed);
  }
};
