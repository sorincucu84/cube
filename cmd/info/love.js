const { RichEmbed } = require("discord.js");
const Discord = require("discord.js");
const { getMember } = require("../../functions.js");
const talkedRecently = new Set();


module.exports = {
    name: "love",
    aliases: ["affinity"],
    category: "fun",
    description: "Calculates the love affinity you have for another person.",
    usage: "[mention | id | username]",
    run: async (client, message, args) => {
        // Get a member from mention, id, or username
        let person = getMember(message, args[0]);

        if (!person || message.author.id === person.id) {
            person = message.guild.members
                .filter(m => m.id !== message.author.id)
                .random();
        }

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

      
      if (talkedRecently.has(message.author.id)) {
      message.delete().catch(O_o => {});
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(e.incorrect + " Aguarde **3** segundos")
        .setColor(c.red)
      message.channel.send(embed);
      return;
      }
      
        const embed = new RichEmbed()
            .setColor("#ffb6c1")
            .addField(`**${person.displayName}** ama **${message.member.displayName}** tanto:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);

        message.channel.send(embed);
      
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
      }, 3000);
//               const embed = new RichEmbed()
//             .setColor("#ffb6c1")
//             .setTitle("Comando em manutenção");

//         message.channel.send(embed);
    }
}