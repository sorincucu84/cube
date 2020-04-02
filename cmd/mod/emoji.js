const { owner } = require("../../config.json");
const Discord = require("discord.js");


module.exports = {
  name: "emoji",
  aliases: ["emote", "add"],
  description: "Adicione emojis inserindo o nome e o link",
  usage: "<input>",
  run: async (client, message, args) => {
    message.delete().catch(O_o => {});

    if (!message.member.hasPermission('ADMINISTRATOR')) {
      let embed = new Discord.RichEmbed()
        .setDescription("Sem permissão")
        .setColor(c.red)
        return message.channel.send(embed);
    }

    if (!args[0]) {
      const channel = message.channel;

      let embed = new Discord.RichEmbed()
        .setDescription("Link Inválido \nUse: `;emote <link> <nome do emoji>`")
        .setColor(c.red)
      message.channel.send(embed);
    } else {
      let commandName = args[0].toLowerCase();

      const emojiName = args[1];
      if (!args[1]) {
        let embed = new Discord.RichEmbed()
        .setDescription("Nome Inválido \nUse: `;emote <link> <nome do emoji>`")
        .setColor(c.red)
      message.channel.send(embed);
      } else {
      message.guild.createEmoji(`${args[0]}`, `${emojiName}`).then(emoji => {
        
          message.delete().catch(O_o => {});
          let emojiadded = client.emojis.find(emoji => emoji.name == emojiName);
          let embed = new Discord.RichEmbed()
            .setDescription(`Emoji adicionado:`)
            .setColor(c.green)
          message.channel.send(embed).then(() => {
            message.channel.send(`${emojiadded}`);
          })
        })
        .catch(console.error);
    }}
  }
};
