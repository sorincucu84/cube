const Discord = require("discord.js");
const { owner } = require("../../config.json");
const { inspect } = require("util");


module.exports = {
  name: "eval",
  aliases: [""],
  description: "Execute comandos em Js",
  usage: "<input>",
  run: (client, message, args) => {
    
    if (!message.member.hasPermission('ADMINISTRATOR')) {
    message.delete().catch(O_o => {});
      let embed = new Discord.RichEmbed()
        .setDescription("Sem permissão")
        .setColor(c.red)
        return message.channel.send(embed);
    }

    const clean = text => {
      if (typeof text === "string")
        return text
          .replace(/`/g, "`" + String.fromCharCode(8203))
          .replace(/@/g, "@" + String.fromCharCode(8203));
      else return text;
    };

    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string") {
        evaled = require("util").inspect(evaled);
      }

      if (evaled.includes(client.token)) {
        evaled = evaled.replace(
          client.token,
          "Secret Information"
        );

        if (evaled.includes(client.token)) {
          evaled = evaled.replace(
            client.token,
            "Secret Information"
          );
        }
      }

      let embed = new Discord.RichEmbed()
        .addField(`📥 Input`, "***```" + code + "```***", true)
        .addField(`📤 Output`, `\`\`\`python\n${evaled}\`\`\``)
        .setColor("#3498db") //
        .setTimestamp();

      message.channel.send(embed);
    } catch (err) {
      message.channel.send("``Error``\n ```" + clean(err) + "```");
    }
  }
};
