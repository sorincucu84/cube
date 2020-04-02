const { RichEmbed } = require("discord.js");
const bot = process.env;

module.exports = {
  name: "demissao",
  aliases: ["demissão", "demitir", "me demito"],
  description: "Peça sua demissão",
  usage: "[]",
  run: async (client, message, args) => {
                
    if(!message.member.roles.has(bot.cargo_empregado)) {
        let embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(bot.emote_incorrect + ` Você não possui um emprego`)
        .setColor(bot.color_red)
        return message.channel.send(embed);
    }
    
    let confirm = new RichEmbed()
   .setColor(bot.color_yellow)
   .setDescription(`Você está prestes a pedir demissão, tem certeza?`)
   
   return message.channel.send(confirm).then(async msg => {
   
        await msg.react(bot.emote_id_correct) 
        await msg.react(bot.emote_id_incorrect)

       const a1 = (reaction, user) => reaction.emoji.name ==='correct' && user.id === message.author.id
       const b1 = msg.createReactionCollector(a1, { time: 3000000 });
      
       const a2 = (reaction, user) => reaction.emoji.name ==='incorrect' && user.id === message.author.id
       const b2 = msg.createReactionCollector(a2, { time: 3000000 });
     
     
    b1.on("collect", c1 => {
        msg.delete(confirm)
      
      
    let canal_batepapo = client.channels.get("620094850183987221")
            
    
    if(message.member.roles.has(bot.emprego_legal2)){
      message.member.removeRole(bot.emprego_legal2)
    }else if(message.member.roles.has(bot.emprego_legal4)){
      message.member.removeRole(bot.emprego_legal4)
    }else if(message.member.roles.has(bot.emprego_legal6)){
      message.member.removeRole(bot.emprego_legal6)
    }else if(message.member.roles.has(bot.emprego_legal8)){
      message.member.removeRole(bot.emprego_legal8)
    }else if(message.member.roles.has(bot.emprego_legal10)){
      message.member.removeRole(bot.emprego_legal10)
    }else if(message.member.roles.has(bot.emprego_legal12)){
      message.member.removeRole(bot.emprego_legal12)
    }else if(message.member.roles.has(bot.emprego_legal14)){
      message.member.removeRole(bot.emprego_legal14)
    }else if(message.member.roles.has(bot.emprego_legal16)){
      message.member.removeRole(bot.emprego_legal16)
    }else if(message.member.roles.has(bot.emprego_legal18)){
      message.member.removeRole(bot.emprego_legal18)
    }else if(message.member.roles.has(bot.emprego_legal20)){
      message.member.removeRole(bot.emprego_legal20)
    }else if(message.member.roles.has(bot.emprego_legal22)){
      message.member.removeRole(bot.emprego_legal22)
    }else if(message.member.roles.has(bot.emprego_legal24)){
      message.member.removeRole(bot.emprego_legal24)
    }else if(message.member.roles.has(bot.emprego_legal26)){
      message.member.removeRole(bot.emprego_legal26)
    }else if(message.member.roles.has(bot.emprego_legal28)){
      message.member.removeRole(bot.emprego_legal28)
    }else if(message.member.roles.has(bot.emprego_legal30)){
      message.member.removeRole(bot.emprego_legal30)
    }else if(message.member.roles.has(bot.emprego_legal32)){
      message.member.removeRole(bot.emprego_legal32)
    }else if(message.member.roles.has(bot.emprego_legal34)){
      message.member.removeRole(bot.emprego_legal34)
    }


    message.member.removeRole(bot.cargo_empregado);
    message.member.removeRole(bot.cargo_separador)
    const embed = new RichEmbed()
      .setColor(bot.color_green)
      .setDescription(`**${message.author.tag}** acabou de pedir demissão do emprego!`);
    message.react(bot.emote_id_correct)
    return canal_batepapo.send(embed);
      
})
  b2.on("collect", c2 => {
    msg.delete(0) 
    
    })
})
  }
}