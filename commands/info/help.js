const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Stop it.. Get Some Help!",

  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    try {
      const { guild } = message;

      const embed = new MessageEmbed().setColor(client.color);
      embed.setTitle('**Aki Help Panel**')
      embed.setDescription("`!akiinfo` - about me\n`!akihelp` - list of my commands\n`!akiinvite` - invite me to your server\n`!akistart` - play akinator")
      embed.setFooter(`Thanks For Using ${client.user.username}`, client.user.displayAvatarURL())

      await message.reply({ embeds: [embed] });
    } catch (err) {
      client.error(err);
    }
  },
};