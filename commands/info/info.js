const { Message, Client, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "info",
  description: "Get to know me more :)",

  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {

    let totalSeconds = message.client.uptime / 1000;
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
            
            let uptime = `I have been up for ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  

     const statsEmbed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setColor("#303037")
            .setAuthor(client.user.tag, client.user.displayAvatarURL())
            .setFooter(`Thanks For Using ${client.user.username}`, client.user.displayAvatarURL())
       .addField('<a:about:969846747776028702> **About Me**', 'I am Aki, I attempts to determine what fictional or real-life character you are thinking of by asking a series of questions.')
            .addField('<:think:961537801944440832> **How to use**', 'Just type `!akihelp`, to see all the commands!')
          .addField('<:kill:961537802040909855> **Creators**', 'Avalynn#4247')
          .addField('<:report:961540296959729674> **Ping**', `Bot latency is ${client.ws.ping} milliseconds.`)
          .addField('<:uptime:961537801969610772> **Uptime**', `${uptime}`)
          .addField('<:stats:961537801810227230> **Bot Stats**',`I am in ${client.guilds.cache.size} servers with a total of ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} people.`)
          .addField('<:version:961537802158350336> **Discord.js Version**',`i am on ${process.versions.node}. This bot uses discord.js version ${Discord.version}.`)
    

      await message.reply({ embeds: [statsEmbed] });
  },
};