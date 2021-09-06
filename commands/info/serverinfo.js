const { MessageEmbed } = require('discord.js');

const moment = require('moment');

const filterLevels = {

	DISABLED: 'On',

	MEMBERS_WITHOUT_ROLES: 'No Role',

	ALL_MEMBERS: 'Everyone'

};

const verificationLevels = {

	NONE: 'None',

	LOW: 'Low',

	MEDIUM: 'Medium',

	HIGH: '(╯°□°）╯︵ ┻━┻',

	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'

};

module.exports = {

  name: "serverinfo",
  aliases: ["server info", "s info", "sinfo"],
  description: "<a:tick:811476337537449985> Get info about your server <a:tick:811476337537449985>",
  usage: "serverinfo",

run: (client, message, args) => {

		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());

		const channels = message.guild.channels.cache;

		const emojis = message.guild.emojis.cache;

    const members = message.guild.members.cache;
  
		const embed = new MessageEmbed()

			.setDescription(`**Guild information for __${message.guild.name}__**`)

			.setColor(`Color`)

			.setThumbnail(message.guild.iconURL({ dynamic: true }))

			.addField('General', [

				`**❯ <a:tick:811476337537449985> Name:** ${message.guild.name}`,

				`**❯ <a:tick:811476337537449985> ID:** ${message.guild.id}`,

				`**❯ <a:tick:811476337537449985> Owner:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,

				`**❯ <a:tick:811476337537449985> Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,

				`**❯ <a:tick:811476337537449985> Explicit Filter:** ${filterLevels[message.guild.explicitContentFilter]}`,

				`**❯ <a:tick:811476337537449985> Verification Level:** ${verificationLevels[message.guild.verificationLevel]}`,

				'\u200b'

			])

			.addField('Statistics', [

				`**❯ <a:tick:811476337537449985> Role Count:** ${roles.length}`,

				`**❯ <a:tick:811476337537449985> Emoji Count:** ${emojis.size}`,

				`**❯ <a:tick:811476337537449985> Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,

				`**❯ <a:tick:811476337537449985> Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,

				`**❯ <a:tick:811476337537449985> Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,

				`**❯ <a:tick:811476337537449985> Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,

				`**❯ <a:tick:811476337537449985> Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,

				'\u200b'

			])
    
    .addField('Presence', [

				`**❯ <a:tick:811476337537449985> Online:** ${members.filter(member => member.presence.status === 'online').size}`,

				`**❯ <a:tick:811476337537449985> Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,

				`**❯ <a:tick:811476337537449985> Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,

				`**❯ <a:tick:811476337537449985> Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,

				'\u200b'

			])
    
    .addField('Server Count', [

				`**❯ <a:tick:811476337537449985> Total:** ${message.guild.memberCount}`,

				`**❯ <a:tick:811476337537449985> Members:** ${message.guild.members.cache.filter(m => !m.user.bot).size}`,

				`**❯ <a:tick:811476337537449985> Bots:** ${message.guild.members.cache.filter(m => m.user.bot).size}`,

				'\u200b'

			])
    
			.setTimestamp();
		message.channel.send(embed);

	}

};
