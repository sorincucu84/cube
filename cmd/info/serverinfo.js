const talkedRecently = new Set();
const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
  name: "serverinfo",
  aliases: [],
  description: "Veja informações sobre o grupo",
  usage: "",
  run: (client, message, args) => {
    
      let {guild} = message;
    
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
    message.guild.members.forEach((member, key) => {
      if(member.user.presence.status == "online"){
        online++
      }else if(member.user.presence.status == "offline"){
        offline++
      }else if(member.user.presence.status == "dnd"){
        dnd++;
      }else if(member.user.presence.status == "idle"){
        busy++;
      }
    })
    message.guild.channels.forEach((channel, key) => {
      if(channel.type == "text"){
        channels++;
        txtchannels++
      }else if(channel.type == "voice"){
        channels++;
        voicechannels++;
      }
        
    });
    function getJoinRank(ID, guild) { // Call it with the ID of the user and the guild
    if (!guild.member(ID)) return; // It will return undefined if the ID is not valid

    let arr = guild.members.array(); // Create an array with every member
    arr.sort((a, b) => a.joinedAt - b.joinedAt); // Sort them by join date

    for (let i = 0; i < arr.length; i++) { // Loop though every element
      if (arr[i].id == ID) return i; // When you find the user, return it's position
    }
}
    
    const moment = require("moment");
    moment.locale("pt-BR");
    const joined1 = moment(message.guild.joinedAt).format("DD [de] MMM, YYYY [às] LT");
    const joined2 = moment(message.guild.joinedAt).startOf(message.guild.joinedAt).fromNow();
      
      let joinServer = moment(message.guild.joinedAt).format('lll');
      let days = moment(new Date()).diff(message.guild.joinedAt, 'days');
      let months = moment(new Date()).diff(message.guild.joinedAt, 'months')
      let years = moment(new Date()).diff(message.guild.joinedAt, 'years')
      let joinText = joinServer + "\n";
      if(years > 0){
        joinText += `(${years}`;
      }else{
        if(days >= 30){days -= 30}
        if(days >= 60){days -= 60}
        if(days >= 90){days -= 90}
        if(months > 0){
          if(months > 1){
            if(days > 1){
              joinText += `(${months} meses e ${days} dias)`;
            }else{
              joinText += `(${months} meses e ${days} dia)`;
            }
          }else{
            if(days > 1){
              joinText += `(${months} mês e ${days} dias)`;
            }else{
              joinText += `(${months} mês e ${days} dia)`;
            }
          }
        }else{
          if(days > 1){
            joinText += `(${days} dias)`;
          }else{
            joinText += `(${days} dias)`;
          }
        }
      }

    
    let userImage = message.guild.iconURL.split('.').pop().split("?").shift();
    moment.locale("pt-BR");
    let data = moment(message.channel.guild.createdAt).format('DD [de] MMM[,] YYYY [ás] HH:MM a -  (lll)');
    let data1 = moment(message.channel.guild.createdAt).format('HH:MM a');
      function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " dia" : " dias") + " atrás";
    };
    
    const embed = new Discord.RichEmbed()
        .setTitle(`${e.discord} ${guild.name}`)
        .setColor(c.blue)
        .addField(`${e.id} ID`, `${message.guild.id}`, true)
        .addField(`${e.coroa} Dono:`, `\`\`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}\`\``, true)
        .addField(`${e.planeta} Região:`, `${message.guild.region.charAt(0).toUpperCase() + message.guild.region.slice(1)}`, true)
        .addField(`${e.estrela} Entrei Aqui Em`, `${joinText}`, true)
        .addField(`${e.canal} Canais (${channels})`, `${e.chat} **Texto:** ${txtchannels}\n${e.voz} **Voz:** ${voicechannels}`, true)
        .addField(`${e.pessoas} Membros (${message.guild.memberCount})`, `${onlineEmoji} **Online:** ${online}\n${dndEmoji} **Ocupados:** ${dnd}\n${busyEmoji} **Ausentes:** ${busy}\n${e.bot} **Bots:** ${guild.members.filter(member => member.user.bot).size}`, true)
        .addField("Data de Criação", `(${checkDays(message.channel.guild.createdAt)})`, true)    
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
    
       if(userImage == 'gif'){
        embed.setThumbnail(message.guild.iconURL)
       
      }else if(userImage == 'jpg'){
      message.guild.iconURL.split('.').forEach((content) => {
      if(content.split('/').includes("com")){
        embed.setThumbnail("https://cdn.discordapp.com/icons/" + message.guild.id + "/" + content.split('/')[3] + ".gif")
        
      }else if(userImage == 'png'){
        embed.setThumbnail(message.guild.iconURL)
      }
    })
    }
    
    message.channel.send({ embed });
    talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
      }, 3000);
  }
};
