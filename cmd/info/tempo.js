const Discord = require('discord.js');
const client = new Discord.Client();
const weather = require('weather-js');
var mysql      = require('mysql');
var conn = mysql.createConnection({
  host     : process.env.DB_SERVER,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DB
});

module.exports = {
  name: "tempo",
  aliases: [],
  description: "",
  usage: "",
  cooldown: 3,
  run: async (client, message, args, tools) => {

    let msg = message.content.toUpperCase();
    


            weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
            if (err) message.channel.send(err);

            if (result.length === 0) {
                message.channel.send('**Please enter a valid location.**')
                return;
            }

            // Variables
            var current = result[0].current;
            var location = result[0].location;

            // Let's use an embed for this.
            const embed = new Discord.RichEmbed()
                  .setDescription(`**${current.skytext}**`)
                  .setAuthor(`Tempo para ${current.observationpoint}`)
                  .setThumbnail(current.imageUrl)
                  .setColor("#00AE86")
                  .addField('Fuso Horário',`UTC${location.timezone}`, true)
                  .addField('Temperatura',`${current.temperature} °C`, true)
                  .addField('Vento',current.winddisplay, true)
                  .addField('Umidade', `${current.humidity}%`, true)
                  .addField('Latitude', `${location.lat}`, true)
                  .addField('Longitude', `${location.long}`, true)
            
                  // Now, let's display it when called
                message.channel.send({embed});
        });
    
    
  }
};