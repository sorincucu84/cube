const { RichEmbed } = require("discord.js");
const bot = process.env;

module.exports = {
  name: "legal1",
  aliases: ["", ""],
  description: "",
  usage: "",
  run: async (client, message, args) =>  {
    
    await message.delete().catch(O_o=>{});
    
      if (!message.member.hasPermission('ADMINISTRATOR')) {
        let embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(bot.emote_incorrect + " Sem permissão")
        .setColor(bot.color_red)
        return message.channel.send(embed);
    };
    
    const embed = await new RichEmbed()
    .setColor(bot.color_purple)
    .setTitle('Profissões Disponíveis')
    .setThumbnail('https://cdn.glitch.com/726ce05d-4320-4e2e-a882-72a8e43f4ab1%2Faff610fd-39fa-48f5-a419-1faeb38679d3.image.png?v=1585103057896')
    .setDescription(`Limite de um emprego simultâneo`)
    .addField(bot.emote_blank, `**${bot.emote_legal1} Gari**`, true)
    .addField(bot.emote_blank, `**${bot.emote_legal2} Zelador**`, true)
    .addField(bot.emote_blank, `**${bot.emote_legal3} Caixa De Mercado**`, true)
    .addField(bot.emote_blank, `**${bot.emote_legal4} Jardineiro**`, true)
    .addField(bot.emote_blank, `**${bot.emote_legal5} Motorista**`, true)
    
    message.channel.send(embed).then(async embedMessage => {
    await embedMessage.react(bot.emote_id_legal1);
    await embedMessage.react(bot.emote_id_legal2);
    await embedMessage.react(bot.emote_id_legal3);
    await embedMessage.react(bot.emote_id_legal4);
    await embedMessage.react(bot.emote_id_legal5);
    })
  }
}