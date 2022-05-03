const { MessageActionRow, MessageButton, Channel } = require("discord.js");

module.exports = {
        name: "invite",
        description: "invite me in your server",
run: async (client, message, args) => {
        
const row = new MessageActionRow().addComponents(
      new MessageButton()        
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=969451826711789628&permissions=8&scope=bot`)
        .setLabel("INVITE")
            .setStyle("LINK")
    )
          message.channel.send({ content: `** Thanks for inviting me! **`, components: [row] })
}
}