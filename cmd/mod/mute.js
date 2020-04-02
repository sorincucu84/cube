const { RichEmbed } = require("discord.js");
const bot = process.env;
const ms = require("ms");

module.exports = {
  name: "mute",
  aliases: ["mutar"],
  description: "Mute um usuário",
  usage: "[mention]",
  run: async (client, message, args) => {
    
      message.delete().catch(O_o => {});
    
    const member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member) {
        let embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(bot.emote_error + ` Usuário inválido
        \nUse:
        \`\`mute <membro> <tempo> [razão]\`\``)
        .setColor(bot.color_red)
        return message.channel.send(embed);
    }
    
  if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        let embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(bot.emote_error + " Sem permissão")
        .setColor(bot.color_red)
        return message.channel.send(embed);
    };
    
    if (member.user.bot) {
      let embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(bot.emote_error + " Sem permissão para mutar bots")
        .setColor(bot.color_red);
      return message.channel.send(embed);
    }
    
  if (member.hasPermission('MANAGE_MESSAGES')) {
        let embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(bot.emote_error + " Sem permissão para mutar moderadores")
        .setColor(bot.color_red)
        return message.channel.send(embed);
    };
    
    let params = message.content.split (" ").slice(1);
    let time = params [1];
//     if(!time) {
//         let embed = new RichEmbed()
//         .setAuthor(message.author.tag, message.author.displayAvatarURL)
//         .setDescription(bot.emote_error + ` Tempo inválido
//         \nUse:
//         \`\`mute <membro> <tempo> [razão]\`\``)
//         .setColor(bot.color_red)
//         return message.channel.send(embed);
//     }
    
    let reason = args.slice(2).join(' ');
    
    let muterole = message.guild.roles.find(r => r.name === "Mutado");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Mutado",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          ATTACH_FILES: false,
          SPEAK: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
    
    if(member.roles.has(muterole.id)) {
        let embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(bot.emote_error + ` ${member} já está mutado(a)`)
        .setColor(bot.color_red)
        return message.channel.send(embed);
    }
    
    member.addRole(muterole.id);
    const embed = new RichEmbed()
      .setColor(bot.color_red)
      .setDescription(bot.emote_mute +` **${member.user}** foi mutado(a) por **${message.author.tag}**`);
    
    if (time)
      embed.setDescription(bot.emote_mute +` **${member.user}** foi mutado(a) por **${message.author.tag}**
        ${bot.emote_clock} **Tempo:** ${ms(ms(time), {long: false})}`);

      if (reason)
      embed.setDescription(bot.emote_mute +` **${member.user}** foi mutado(a) por **${message.author.tag}**
        ${bot.emote_clock} **Tempo:** ${ms(ms(time), {long: false})}
        ${bot.emote_config} **Razão:** ${reason}`);
    message.channel.send(embed);
      
    setTimeout(function() {
      member.removeRole(muterole.id);
      
      const embed = new RichEmbed()
      .setColor(bot.color_green)
      .setDescription(bot.emote_unmute +` **${member.user}** foi desmutado(a)`);
    message.channel.send(embed);
    }, ms(time));
    
  }
}