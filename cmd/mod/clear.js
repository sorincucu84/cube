const Discord = require("discord.js");

module.exports = {
  name: "clear",
  aliases: ["purge", "c"],
  description: "Limpe o chat",
  usage: "<input>",
  run: async (client, message, args, prefix) => {
    message.delete().catch(O_o => {});

    let user = message.mentions.users.first();
    let reason = args[0];
    
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      let embed = new Discord.RichEmbed()
        .setDescription("Sem permissão")
        .setColor(c.red);
      return message.channel.send(embed);
    }

    if (!reason) {
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(e.incorrect + ` Insira um número
        \nUse:
        \`\`clear <número>\`\``)
        .setColor(c.red);
      return message.channel.send(embed).then(msg => msg.delete(2000));
    }
    if (isNaN(reason)) {
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(e.incorrect + ` Número inválido
        \nUse:
        \`\`clear <número>\`\``)
        .setColor(c.red);
      return message.channel.send(embed).then(msg => msg.delete(2000));
    }

    if (reason < 2) {
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(e.incorrect + ` Insira um número maior que **${reason}**
        \nUse:
        \`\`clear <número>\`\``)
        .setColor(c.red);
      return message.channel.send(embed).then(msg => msg.delete(2000));
    }
    if (reason > 100) {
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(e.incorrect + ` Insira um número menor que **${reason}**
        \nUse:
        \`\`clear <número>\`\``)
        .setColor(c.red);
      return message.channel.send(embed).then(msg => msg.delete(2000));
    }

    let massagem = "";
    let viagem = "";

    message.channel
      .fetchMessages({
        limit: reason
      })
      .then(messages => {
        if (!user) {
          massagem = messages
            .filter(m => m.author.id)
            .array()
            .slice(0, reason);
          viagem = massagem.filter(a => a.pinned === false);
        }
        message.channel
          .bulkDelete(viagem)
          .catch(error => console.log(error.stack));

        let pEmbed = new Discord.RichEmbed()
          .setDescription(`Chat limpo por **${message.author.tag}**`)
          .setColor(c.green);

        message.channel.send(pEmbed).then(msg => msg.delete(2000));
      });
  }
};
