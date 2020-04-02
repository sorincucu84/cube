const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
var mysql      = require('mysql');
var conn = mysql.createConnection({
  host     : process.env.DB_SERVER,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DB
});
module.exports = {
  name: "prefix",
  aliases: ["setprefix"],
  description: "Atualize o prefixo",
  usage: "[]",
  run: (client, message, args, tools) => {
    message.delete().catch(O_o => {});

      if (!message.member.hasPermission("ADMINISTRATOR")) {
        let embed = new Discord.RichEmbed()
        .setDescription("Sem permissão")
        .setColor("#db6058")
        return message.channel.send(embed);
      }else{

      if (!args[0]) {
        let embed = new Discord.RichEmbed()
        .setDescription("<:erro:620435792225107969> Prefixo Inválido \n<:terminal:656082314853482497> Use: **;prefix \"prefixo\"**")
        .setColor("#db6058");
        return message.channel.send(embed);
      }else{
        conn.query("SELECT * FROM prefix WHERE guildId = ?", [message.guild.id], (err,rows) => {
          if(!rows[0]){
            conn.query("INSERT INTO prefix (guildId,prefix) VALUES (?,?)", [message.guild.id, "-"], (err,rows) => {if(err) return console.log(err); message.reply("Prefix atual: ``-``, tente alterar novamente.")});
          }else{
            let newPrefix = args[0];
            conn.query("UPDATE prefix SET prefix = ? WHERE guildId = ?", [newPrefix, message.guild.id], (err,rows) => {
              let embed = new Discord.RichEmbed()
              .setDescription(`<:sucesso:620434637340147757> Nova prefix: ${newPrefix}`)
              .setColor("#50ba4e");
              message.channel.send(embed);
            })
          }
        })
      }
    }
  }
}