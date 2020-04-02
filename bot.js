const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/web/index.html");
});
const listener = app.listen(process.env.PORT, function() {});


const { Client, Collection, RichEmbed} = require("discord.js");
const client = new Client();

["aliases", "commands"].forEach(x => client[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(client));



const bot = process.env;



// client.on("message", async message => { 
//    if (message.channel.id !== "693690312584855572") return;

//      message.delete(300000).catch(err => (err));
    
// })



// client.on("raw", async dados => {
//   if (dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return;
  
//   if (dados.d.user_id != "297153970613387264") return;
    
//   let canal_batepapo = client.channels.get("693676834901983282");
  
//   let texto = `🎉 [**Novo Presente**](https://discordapp.com/channels/${dados.d.guild_id}/${dados.d.channel_id}/${dados.d.message_id})`;

//   if (dados.t === "MESSAGE_REACTION_ADD") {
//     const embed = new RichEmbed()
//       .setColor(bot.color_green)
//       .setDescription(texto);
//       return canal_batepapo.send(embed).then(msg => msg.delete(300000)).catch(err => (err));
//   }
// })
          

client.on("raw", async dados => {
  if (dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE")
    return;
  if (dados.d.message_id != "660971619639885834") return;

  let servidor = client.guilds.get("464839271560380468");
  let membro = servidor.members.get(dados.d.user_id);

  let verify = servidor.roles.get("642563840327811144");

  if (dados.t === "MESSAGE_REACTION_ADD") {
    if (dados.d.emoji.name === "sucesso") {
      if (membro.roles.has(verify)) return;
      membro.addRole(verify);
    }
  }

  if (dados.t === "MESSAGE_REACTION_REMOVE") {
    if (dados.d.emoji.name === "sucesso") {
      if (membro.roles.has(verify)) return;
      membro.removeRole(verify);
    }
  }
});


client.login(bot.TOKEN);