  module.exports = async (client, message) => { 
    
  let prefix = process.env.PREFIX;
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member) message.member = message.guild.fetchMember(message);
  const args = message.content
    .slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) command.run(client, message, args);
    
  }

// var mysql      = require('mysql');
// var conn = mysql.createConnection({
//   host     : process.env.DB_SERVER,
//   user     : process.env.DB_USER,
//   password : process.env.DB_PASSWORD,
//   database : process.env.DB_DB
// });

// module.exports = async (client, message) => { 

//   let prefix = '';
//   conn.query("SELECT * FROM prefix WHERE guildId = ?", [message.guild.id], (err,rows) => {
//     if(!rows[0]){
//       conn.query("INSERT INTO prefix (guildId,prefix) VALUES (?,?)", [message.guild.id,"-"], (err,rows) => {
//         if(err) console.log(err);
//       });
//         conn.query("SELECT * FROM prefix WHERE guildId = ?", [message.guild.id], (err,rows2) => {
//           prefix += rows2[0].prefix;
//           if (message.author.bot) return;
//   if (message.channel.type === "dm") return;

//   if (!message.guild) return;


          
//   if (!message.content.startsWith(prefix)) return;
//   if (!message.member) message.member = message.guild.fetchMember(message);
//   const args = message.content
//     .slice(prefix.length).trim().split(/ +/g);
//   const cmd = args.shift().toLowerCase();
//   if (cmd.length === 0) return;
//   let command = client.commands.get(cmd);
//   if (!command) command = client.commands.get(client.aliases.get(cmd));
//   if (command) command.run(client, message, args);
//         });
//     }else{
//       prefix += ';';
//       if (message.author.bot) return;
//   if (message.channel.type === "dm") return;

//   if (!message.guild) return;
//   if (!message.content.startsWith(prefix)) return;
//   if (!message.member) message.member = message.guild.fetchMember(message);
//   const args = message.content
//     .slice(prefix.length).trim().split(/ +/g);
//   const cmd = args.shift().toLowerCase();
//   if (cmd.length === 0) return;
//   let command = client.commands.get(cmd);
//   if (!command) command = client.commands.get(client.aliases.get(cmd));
//   if (command) command.run(client, message, args);
//     }
//   });
  
//     if (message.author.bot){}else{
//     if(message.guild){
//       conn.query("SELECT * FROM top WHERE userId = ?", [message.author.id], (err,rows) => {
//           if(!rows[0]){
//             conn.query("INSERT INTO top (userId,messageCount) VALUES (?,?)", [message.author.id, 1], (err,rows) => {
//               if(err) return console.log(err);
//             });
//           }else{
//             let newCount = rows[0].messageCount + 1;
//             conn.query("UPDATE top SET messageCount = ? WHERE userId = ?", [newCount,message.author.id], (err,rows) => {
            
//             });
//           }
//       });
      
//     }
//     }
// }
  
  
//   if (message.channel.id === "620094850183987221") {
//     message.react("🇬").then(() => {
//       message.react("🇦").then(() => {
//       message.react("🇾");
//     });
//   }
// )}
