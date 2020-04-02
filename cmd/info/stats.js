const talkedRecently = new Set();
let Discord = require("discord.js");
const { owner } = require("../../config.json");

module.exports = {
  name: "stats",
  aliases: ["bot-info", "info-bot"],
  description: "Informações sobre o bot",
  usage: "<input>",
  run: async (client, message, args) => {
    const moment = require("moment");
    require("moment-duration-format");
      

      let green = "#50ba4e"
      let red = "#db6058"
    
      if (talkedRecently.has(message.author.id)) {
      message.delete().catch(O_o => {});
      let Yes = "<:sucesso:620434637340147757>";
      let No = "<:erro:620435792225107969>";
      let embed = new Discord.RichEmbed()
      .setColor(red)
      .setDescription(No +" Aguarde 3 segundos");
      message.channel.send(embed);
      return;
    }
    
    const channel = message.channel;
    const memoria = process.memoryUsage().heapUsed  / 1024 / 1024;
    // const cpu = process.cpuUsage().heapUsed;
    var os = require('os-utils');
    var osu = require('node-os-utils')
    let so = require('os');
    var cpu = osu.cpu
    var mem = osu.mem
    var drive = osu.drive
    var netstat = osu.netstat
    
    require('node-os-utils').os

    const version = "0.2.1";
    const mylibrary = "[discord.js](https://discord.js.org/#/)";
    cpu.usage().then(cpuPercentage => {
    let usageCPU = cpuPercentage;
    
      mem.info().then(infMem => {
      netstat.inOut().then(netstatInfo => {
      drive.info().then(driveInfo => {
          
          let embed = new Discord.RichEmbed()
          .setColor("00b0f4")
          .setThumbnail(client.user.avatarURL)
          .setDescription(`
          <:id:656083761036918784> Nome: **${client.user.username} (${client.user.id})** 
          <:dados:656086177228652562> CPU **${cpuPercentage.toFixed(1)}% **
          <:ram:656083239311769621> RAM: **${infMem.usedMemMb.toFixed(0)}mb/${infMem.totalMemMb}mb**
          <:ssd:656086671191965697> SSD: **${driveInfo.usedGb}gb/${driveInfo.totalGb}gb**
          <:restart:656082736435429376> Último reinicio: **${moment.duration(client.uptime).format("d[ day e ]h[ hour e ]m[ min e ]s[ segundos]")}**
          <:network:656082898058870799> NetWork: **${netstatInfo.total.inputMb.toFixed(0)}mb**
          <:javascript:656083505020928002> Línguagem: **javascript**
          <:config:625196561974034474> Biblioteca: **${mylibrary}**
          <:file:656089157130780712> Versão: **${version}**
          `)
          message.channel.send(embed);
          talkedRecently.add(message.author.id);
          setTimeout(() => {
            talkedRecently.delete(message.author.id);
          }, 3000);
          })
        })
      })
      
    });
    
  }
};
