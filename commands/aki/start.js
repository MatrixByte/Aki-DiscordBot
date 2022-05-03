const { Message, Client, MessageEmbed } = require("discord.js");
const akinator = require("akinator-djs");

module.exports = {
  name: "start",
  description: "Start Playing With Akinator",

  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const language = "en"; 
    const childMode = false;
    const gameType = "character"; 
    const useButtons = true;
    const embedColor = "#303037";
    
    akinator(message, {
            language: language,
            childMode: childMode,
            gameType: gameType,
            useButtons: useButtons,
            embedColor: embedColor 
        });   
  },
};