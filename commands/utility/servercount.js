const { Message, Client, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "servercount",
  description: "get the list of servers the bot is in",

  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {

     const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setColor("#303037")
            .setTitle('Server Count')
            .setFooter(`Thanks For Using ${client.user.username}`, client.user.displayAvatarURL())
            .setDescription(`I am in ${client.guilds.cache.size} servers with a total of ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} people.`)
    

      await message.reply({ embeds: [embed] });
  },
};
