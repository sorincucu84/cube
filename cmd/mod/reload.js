const { owner, token } = require("../../config.json");
const Discord = require("discord.js");

module.exports = {
  name: "reload",
  aliases: ["re"],
  description: "Reinicie o bot",
  usage: "<input>",
  run: (client, message, args) => {
    message.delete().catch(O_o => {});

    if (!message.member.hasPermission('ADMINISTRATOR')){
      let embed = new Discord.RichEmbed()
        .setDescription("Sem permissão")
        .setColor("#db6058")
        return message.channel.send(embed);
    }

    function resetBot(channel) {
      message.channel.send(`<:restart:656082736435429376> Reiniciando`).then(message => {
        setTimeout(function() {
          message.edit(`Reiniciado`).then(message => message.delete(10 * 300)).then(message => client.destroy()).then(() => client.login(token));
        }, 3000);
      });
    }
    resetBot(message.channel);
  }
};
