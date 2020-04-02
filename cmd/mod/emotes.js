const { owner } = require("../../config.json");
const Discord = require("discord.js");


module.exports = {
  name: "emotes",
  aliases: [""],
  description: "Listagem dos emojis",
  usage: "<input>",
  run: (client, message, args) => {
    message.delete().catch(O_o => {});

    if (message.author.id != owner) {
      let embed = new Discord.RichEmbed()
        .setDescription("Sem permissão")
        .setColor(0xFF0000)
        return message.channel.send(embed);
    }

    message.channel.send(
      message.guild.emojis.forEach(e => {
        // message.channel.send(`<${e}${e.id}>`);
        message.channel.send(`${e} - \`${e}\``);
      })
    );
  }
};
