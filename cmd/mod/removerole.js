const talkedRecently = new Set();
const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");
const { getRole } = require("../../functions.js");

module.exports = {
  name: "removerole",
  aliases: ["delrole"],
  description: "Veja a foto de alguém",
  usage: "[username | id | mention]",
  run: (client, message, args) => {
    
    const member = getMember(message, args[0]);
    
      if (!message.member.hasPermission('ADMINISTRATOR')) {
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(e.incorrect + " Sem permissão")
        .setColor(c.red)
        return message.channel.send(embed);
    };

    // let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
      
    //     if (!member < 1) {
    //     let embed = new Discord.RichEmbed()
    //     .setAuthor(message.author.tag, message.author.displayAvatarURL)
    //     .setDescription(e.incorrect + ` Usuário inválido
    //     \nUse:
    //     \`\`addrole <membro> <cargo>\`\``)
    //     .setColor(c.red)
    //     return message.channel.send(embed);
    // }
      
    // const role = getRole(message, args[1]);
    let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
    
    // let role = args.join(" ").slice(2);

    // let gRole = message.guild.roles.find(r => r.name === role);
    
        if (!role) {
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(e.incorrect + ` Insira um cargo
        \nUse:
        \`\`removerole <membro> <cargo>\`\``)
        .setColor(c.red)
        return message.channel.send(embed);
    }


    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Permissões insuficientes.")

    if(!member.roles.has(role.id)) {
      
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(e.incorrect + ` **${member}** não possui o cargo <@&${role.id}>`)
        .setColor(c.red)
        return message.channel.send(embed);
      
    } else {
      
         member.removeRole(role)
      
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(e.correct + ` Cargo **<@&${role.id}>** foi removido de **${member}**`)
        .setColor(c.green)
        return message.channel.send(embed);
    }
    }
    
    
    
  }




// const Discord = require("discord.js");
// const { getMember } = require("../../functions.js");

// const c = require("../../c.json"); // Cores
// const e = require("../../e.json"); // Emojis

// module.exports= {
//     config: {
//         name: "addrole",
//         description: "Adds a role to a member of the guild!",
//         usage: "!addrole",
//         category: "moderation",
//         accessableby: "Moderators",
//         aliases: [""]
//     },
//     run: async (client, message, args) => {

//     if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Sem permissão")

//     // let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
//       const member = getMember(message, args.join(" "));
      
//         if (!member < 1) {
//         let embed = new Discord.RichEmbed()
//         .setAuthor(message.author.tag, message.author.displayAvatarURL)
//         .setDescription(e.incorrect + ` Usuário inválido
//         \nUse:
//         \`\`addrole <membro> <cargo>\`\``)
//         .setColor(c.red)
//         return message.channel.send(embed);
//     }
      
//     let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
      
//         if (!role < 1) {
//         let embed = new Discord.RichEmbed()
//         .setAuthor(message.author.tag, message.author.displayAvatarURL)
//         .setDescription(e.incorrect + ` Cargo inválido
//         \nUse:
//         \`\`addrole <membro> <cargo>\`\``)
//         .setColor(c.red)
//         return message.channel.send(embed);
//     }


//     if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Permissões insuficientes.")

//     if(member.roles.has(role.id)) {
      
//         let embed = new Discord.RichEmbed()
//         .setAuthor(message.author.tag, message.author.displayAvatarURL)
//         .setDescription(e.incorrect + ` **${member.displayName}** já tem o cargo`)
//         .setColor(c.red)
//         return message.channel.send(embed);
      
//     } else {
      
//         await member.addRole(role.id)
      
//         let embed = new Discord.RichEmbed()
//         .setAuthor(message.author.tag, message.author.displayAvatarURL)
//         .setDescription(e.correct + ` Cargo **${role.name}** foi adicionado para **${member.displayName}**`)
//         .setColor(c.green)
//         return message.channel.send(embed);
//     }
//     }
// }