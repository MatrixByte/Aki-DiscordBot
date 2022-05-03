const { default: Discord, Client } = require("discord.js");
require("colors");
const { client_id } = require('./config.json')
require('./server.js')
require("dotenv").config();
const { readdirSync } = require("fs");
const client = new Client({ 
  intents: 32767, 
  presence: {
    activities: [{ name: `Akinator`, type: "PLAYING" }],
    status: "dnd"
  },
  allowedMentions: { repliedUser: false } 
});

console.log("-".repeat(36).yellow);

console.log("[!] Starting Aki".blue);

readdirSync("./handlers/").map((d) => {
  if (typeof (i = require("./handlers/" + d)) === "function") {
    i(client);
  }
});  

client.on("messageCreate", async (message) => {
  if(message.content === `<@${client_id}>`){
    return message.channel.send("**My Prefix is `!aki`**")
  }
})

client.login(process.env.TOKEN);