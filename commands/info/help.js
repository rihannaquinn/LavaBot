const { MessageEmbed, MessageAttachment } = require("discord.js")


module.exports = {
    name: 'help',
    description: "Gives You a List of Commands that you can Use!",
    aliases: ['h'],
    run: async(client, message, args) => {
        const name = args[0]
        const command = client.commands.get(name) || client.commands.find(c => c.aliases && c.aliases.includes(name))


        if (!command) {
            const embed = new MessageEmbed()
                .setAuthor('Vonex\'s Commands', message.author.displayAvatarURL({dynamic: true}))
                //.setDescription(`${client.commands.map(c => c.name).join("\n  ")}`)
                .addField('<a:tick:811476337537449985> __Moderation__',
                          "`kick`, `mute`, `unmute`, `ban`, `unban`,`forceban`, `clear`, `addrole`,`removerole`, `warn` ,\
`warnings`, `lock`, `unlock`, `hide`, `unhide`, `setwelcome`, `disablewelcome`, `slowmode`")
                .addField(`:man_detective: Fun`, "`ascii`, `meme`, `advice`,`wouldyourather`, `compliment`")
                .addField('<a:tick:811476337537449985> __Animals__',
                         "`bear`, `bird`, `bunny`, `cat`, `catfact`, `dog`, `dogfact`, `panda`, `whale`")
                .addField(':man_detective: Images', "`clyde`, `changemymind`, `love`, `tweet`" )
                .addField(':tools: Utility', "`help`, `config`, `weather`, `serverinfo`, `userinfo`, `channelinfo`, `botinfo`, `ping`,\
 `invite`,`avatar`,`translate`, `cal`")
                .addField(':headphones: Music', "`join`, `leave`, `nowplaying`, `shuffle`, `play`, `stop`, `skip`, `volume`, `jump`, `drops`,\
`queue`, `pause`, `resume`, `loop`")
                .setColor('BLUE')

            return message.channel.send(embed)

        }
    }
}