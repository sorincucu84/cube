const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");
const talkedRecently = new Set();

module.exports = {
  name: "info",
  aliases: ["who", "user", "whois"],
  description: "Returns user information",
  usage: "[username | id | mention]",
  run: (client, message, args) => {
    
    const arg = getMember(message, args.join(" "));
    
      if (talkedRecently.has(message.author.id)) {
      message.delete().catch(O_o => {});
      let embed = new Discord.RichEmbed()
      .setColor(c.red)
      .setDescription(e.erro +" Aguarde 3 segundos");
      message.channel.send(embed);
      return;
      }
    
    let onlineEmoji = client.emojis.get("670831298314764298");
    let offlineEmoji = client.emojis.get("670831161572065280");
    let dndEmoji = client.emojis.get("670831004138602526");
    let busyEmoji = client.emojis.get("670831113299558422");
    let offline = 0;
    let busy = 0;
    let online = 0;
    let dnd = 0;
    let channels = 0;
    let txtchannels = 0;
    let voicechannels = 0;
    message.guild.members.forEach((arg, key) => {
      if(arg.user.presence.status == "online"){
        "ONLINE"
      }else if(arg.user.presence.status == "offline"){
        "OFFLINE"
      }else if(arg.user.presence.status == "dnd"){
        "DND"
      }else if(arg.user.presence.status == "idle"){
        "BUSY"
      }
    })
    
    const online1 = (arg.user.presence.status == "online");
    true == onlineEmoji;
    

  
    const guild = client.guilds.get('464839271560380468');

    const roles = arg.roles.filter(r => r.id !== message.guild.id).map(r => `\`${r.name}\``).join(', ') || 'Nenhum';

    const moment = require("moment");
    moment.locale("pt-BR");
    const joined = moment(message.guild.joinedAt).format("LLL (L)");
    const joined2 = moment(message.guild.joinedAt).startOf('hour').fromNow();
    const created = moment(arg.user.createdAt).format("LLL (L)");
    const created2 = moment(arg.user.createdAt).startOf('lll').fromNow();
    
      let data = moment(arg.user.createdAt).format('DD [de] MMM[,] YYYY [às] hh:mm');
      let days = moment(new Date()).diff(arg.user.createdAt, 'days');
      let months = moment(new Date()).diff(arg.user.createdAt, 'months')
      let years = moment(new Date()).diff(arg.user.createdAt, 'years')
      let joinText = data + " ";
      if(years >= 1){
        joinText += `${years} anos`;
      }else{
        if(days >= 30){days -= 30}
        if(days >= 60){days -= 60}
        if(days >= 90){days -= 90}
        if(days >= 180){days -= 180}
        if(days >= 360){days -= 360}
        if(months > 0){
          if(months > 1){
            if(days > 1){
              joinText += `${months} meses e ${days} dias`;
            }else{
              joinText += `${months} meses e ${days} dia`;
            }
          }else{
            if(days > 1){
              joinText += `${months} mês e ${days} dias`;
            }else{
              joinText += `${months} mês e ${days} dia`;
            }
          }
        }else{
          if(days > 1){
            joinText += `${days} dias`;
          }else{
            joinText += `${days} dia`;
          }
        }
      }
    
        
        function getJoinRank(ID, guild) { // Call it with the ID of the user and the guild
    if (!guild.member(ID)) return; // It will return undefined if the ID is not valid

    let arr = guild.members.array(); // Create an array with every member
    arr.sort((a, b) => a.joinedAt - b.joinedAt); // Sort them by join date

    for (let i = 0; i < arr.length; i++) { // Loop though every element
      if (arr[i].id == ID) return i; // When you find the user, return it's position
    }
}
    
    const joinPosition = guild.members.sort((a, b) => a.joinedAt - b.joinedAt);

    const embed = new RichEmbed()
      .setFooter(arg.displayName, arg.user.displayAvatarURL)
      .setThumbnail(arg.user.displayAvatarURL)
      // .setColor(c.blue)
      .setColor(arg.displayHexColor === "#000000"? "#ffffff": arg.displayHexColor)
      .addField("Informação do Membro:",`**Display name:** ${online1} ${arg.displayName} 
**Entrou há:**  
**Cargos: ** ${roles}`,true)

      .addField("Informação do Usuário:", stripIndents`**Username**: ${arg.user.username}
      **Tag:** ${arg.user.tag}
      **Join Position:** ${joinPosition}
      **Criado: **${joinText}`,true)
      .setTimestamp();

    if (arg.user.presence.game)
      embed.addField("Jogando", stripIndents`**> Name:** ${arg.user.presence.game.name}` );
      
    message.channel.send(embed);
    talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
      }, 3000);
  }
};
