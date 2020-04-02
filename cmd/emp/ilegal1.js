// const { RichEmbed } = require("discord.js");
// const bot = process.env;


// module.exports = {
//   name: "ilegal1",
//   aliases: ["", ""],
//   description: "",
//   usage: "",
//   run: async (client, message, args) =>  {
    
//     await message.delete().catch(O_o=>{});
    
//       if (!message.member.hasPermission('ADMINISTRATOR')) {
//         let embed = new RichEmbed()
//         .setAuthor(message.author.tag, message.author.displayAvatarURL)
//         .setDescription(bot.emote_incorrect + " Sem permissão")
//         .setColor(bot.color_red)
//         return message.channel.send(embed);
//     };
    
//     const embed = await new RichEmbed()
//     .setColor(bot.color_purple)
//     .setTitle('Profissões Disponíveis')
//     .setThumbnail('https://cdn.discordapp.com/attachments/670339243083694080/674399501691256843/icon.png')
//     .setDescription('Limite de um emprego simultâneo')
//     .addField(e.blank, `**${e1.ladrao} Ladrão**`, true)
//     .addField(e.blank, `**${e1.assassino} Assassino**`, true)
//     .addField(e.blank, `**${e1.traficante} Traficante**`, true)
//     .addField(e.blank, `**${e1.ladraodecarros} Ladrão de Carros**`, true)
//     .addField(e.blank, `**${e1.contrabandista} Contrabandista**`, true)
//     .addField(e.blank, `**${e1.matadordealuguel} Matador de Aluguel**`, true)
        
//     message.channel.send(embed).then(async embedMessage => {
//     await embedMessage.react(eid.ladrao);
//       await embedMessage.react(eid.assassino);
//       await embedMessage.react(eid.traficante);
//       await embedMessage.react(eid.ladraodecarros);
//       await embedMessage.react(eid.contrabandista);
//       await embedMessage.react(eid.matadordealuguel);
//     })
//   }
// }