const { RichEmbed } = require("discord.js");
const bot = process.env;

module.exports = {
  name: "ban",
  aliases: ["banir"],
  description: "Bane um usuário",
  usage: "[mention]",
  run: (client, message, args) => {
    
    message.delete().catch(O_o => {});

  if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        let embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(bot.emote_incorrect + " Sem permissão")
        .setColor(bot.color_red)
        return message.channel.send(embed);
    };
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    let reason = args.slice(1).join(" ");
    
  if (!member.bannable) return message.reply("Eu não posso banir esse usuário, ele pode ter um cargo maior que o meu.")
  
    if(!member) {
        let embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(bot.emote_incorrect + ` Usuário inválido
        \nUse:
        \`\`ban <membro> <motivo>\`\``)
        .setColor(bot.color_red)
        return message.channel.send(embed);
    }
        
  if (member.hasPermission('MANAGE_MESSAGES') || member.user.bot) {
        let embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(bot.emote_incorrect + ` Sem permissão para banir ${member}`)
        .setColor(bot.color_red)
        return message.channel.send(embed);
    };
    
    if (reason.length < 1) {
      
        let embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(bot.emote_incorrect + ` Insira um motivo
        \nUse:
        \`\`ban <membro> <motivo>\`\``)
        .setColor(bot.color_red)
        return message.channel.send(embed);
    }

let confirm = new RichEmbed()
   .setColor(bot.color_yellow)
   .setDescription(`Você está prestes a banir ${member.toString()}, tem certeza?`)
   
   return message.channel.send(confirm).then(async msg => {
   
        await msg.react(bot.emote_id_correct) 
        await msg.react(bot.emote_id_incorrect)

       const a1 = (reaction, user) => reaction.emoji.name ==='correct' && user.id === message.author.id
       const b1 = msg.createReactionCollector(a1, { time: 3000000 });
      
       const a2 = (reaction, user) => reaction.emoji.name ==='incorrect' && user.id === message.author.id
       const b2 = msg.createReactionCollector(a2, { time: 3000000 });
     
     
    b1.on("collect", c1 => {
        msg.delete(confirm)

    // message.guild.member(member).ban(`Punido por ${message.author.tag} — Motivo: ${reason}`);

    const embed = new RichEmbed()
      .setColor(bot.color_red)
      .setDescription(bot.emote_ban +` **${member}** foi banido por ${message.author} pelo motivo \`\`${reason}\`\``)

    return message.channel.send(embed);
      
})
  b2.on("collect", c2 => {
    msg.delete(0) 
    
    })
})
    
  }
};
