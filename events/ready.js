module.exports = async (client, member) => {
  
  console.log(`${client.user.username} is now online!`);

  
  const moment = require("moment");
  require("moment-duration-format");
  
  let userCount = client.guilds.map((g) => g.memberCount).reduce((p, c) => p + c);
  
  const activities_list = [
    `com ${client.guilds.size} grupos 😎👌`,
    `com ${userCount} membros 💕😜`,
    `Em fase beta!`
    ];


    setInterval(() => {
        const index = Math.floor(Math.random()* (activities_list.length))
        // const index = Math.floor(Math.random()* (activities_list.length));
        client.user.setActivity(activities_list[index], {type: 0});
    }, 20000); 

  
  
const { RichEmbed } = require("discord.js");
const bot = process.env;

client.on('raw', async dados => {
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "692197468389244951") return

    let servidor = client.guilds.get("464839271560380468")
    let membro = servidor.members.get(dados.d.user_id)
    
    let canal_legal = client.channels.get("673358375563821058");
    
    let canal_batepapo = client.channels.get("620094850183987221");
  
    let canal_log = client.channels.get("680786294464315412");
  
    let texto = `**${membro.user.tag}** acabou de ser contradado como`;
    let texto1 = bot.emote_correct + ` Parabéns pelo novo emprego!`;
  
        if(dados.t === "MESSAGE_REACTION_ADD"){
          
        if(dados.d.emoji.name === "gari"){

        if(membro.roles.find(r => r.id === bot.cargo_empregado)) return
          
        if(!membro.roles.find(r => r.id === bot.carteira_legal1)) return 
            
          if(membro.roles.find(r => r.id === bot.emprego_legal1)){
            membro.addRole(bot.cargo_separador)
            membro.addRole(bot.cargo_empregado)
            membro.addRole(bot.emprego_legal2)
            membro.removeRole(bot.emprego_legal1)
            membro.removeRole(bot.carteira_legal1)
            
        let embed = new RichEmbed()
        .setAuthor(membro.user.tag, membro.user.avatarURL)
        .setDescription(texto1)
        .setColor(bot.color_green);
            
        const mensagem = new RichEmbed()
        .setDescription(`${texto} <@&${bot.emprego_legal2}>`)
        .setColor(bot.color_green)
            
        canal_batepapo.send(mensagem);
        canal_legal.send(embed).then(msg => msg.delete(5000));
        }
    }else if(dados.d.emoji.name === "zelador"){

        if(membro.roles.find(r => r.id === bot.cargo_empregado)) return
          
        if(!membro.roles.find(r => r.id === bot.carteira_legal1)) return 
            
          if(membro.roles.find(r => r.id === bot.emprego_legal3)){
            membro.addRole(bot.cargo_separador)
            membro.addRole(bot.cargo_empregado)
            membro.addRole(bot.emprego_legal4)
            membro.removeRole(bot.emprego_legal3)
            membro.removeRole(bot.carteira_legal1)
            
        let embed = new RichEmbed()
        .setAuthor(membro.user.tag, membro.user.avatarURL)
        .setDescription(texto1)
        .setColor(bot.color_green);
            
        const mensagem = new RichEmbed()
        .setDescription(`${texto} <@&${bot.emprego_legal4}>`)
        .setColor(bot.color_green)
            
        canal_batepapo.send(mensagem);
        canal_legal.send(embed).then(msg => msg.delete(5000));
        }
    }else if(dados.d.emoji.name === "caixademercado"){

        if(membro.roles.find(r => r.id === bot.cargo_empregado)) return
          
        if(!membro.roles.find(r => r.id === bot.carteira_legal1)) return 
            
          if(membro.roles.find(r => r.id === bot.emprego_legal5)){
            membro.addRole(bot.cargo_separador)
            membro.addRole(bot.cargo_empregado)
            membro.addRole(bot.emprego_legal6)
            membro.removeRole(bot.emprego_legal5)
            membro.removeRole(bot.carteira_legal1)
            
        let embed = new RichEmbed()
        .setAuthor(membro.user.tag, membro.user.avatarURL)
        .setDescription(texto1)
        .setColor(bot.color_green);
            
        const mensagem = new RichEmbed()
        .setDescription(`${texto} <@&${bot.emprego_legal6}>`)
        .setColor(bot.color_green)
            
        canal_batepapo.send(mensagem);
        canal_legal.send(embed).then(msg => msg.delete(5000));
        }
    }else if(dados.d.emoji.name === "jardineiro"){

        if(membro.roles.find(r => r.id === bot.cargo_empregado)) return
          
        if(!membro.roles.find(r => r.id === bot.carteira_legal1)) return 
            
          if(membro.roles.find(r => r.id === bot.emprego_legal7)){
            membro.addRole(bot.cargo_separador)
            membro.addRole(bot.cargo_empregado)
            membro.addRole(bot.emprego_legal8)
            membro.removeRole(bot.emprego_legal7)
            membro.removeRole(bot.carteira_legal1)
            
        let embed = new RichEmbed()
        .setAuthor(membro.user.tag, membro.user.avatarURL)
        .setDescription(texto1)
        .setColor(bot.color_green);
            
        const mensagem = new RichEmbed()
        .setDescription(`${texto} <@&${bot.emprego_legal8}>`)
        .setColor(bot.color_green)
            
        canal_batepapo.send(mensagem);
        canal_legal.send(embed).then(msg => msg.delete(5000));
        }
    }else if(dados.d.emoji.name === "motorista"){

        if(membro.roles.find(r => r.id === bot.cargo_empregado)) return
          
        if(!membro.roles.find(r => r.id === bot.carteira_legal1)) return 
            
          if(membro.roles.find(r => r.id === bot.emprego_legal9)){
            membro.addRole(bot.cargo_separador)
            membro.addRole(bot.cargo_empregado)
            membro.addRole(bot.emprego_legal10)
            membro.removeRole(bot.emprego_legal9)
            membro.removeRole(bot.carteira_legal1)
            
        let embed = new RichEmbed()
        .setAuthor(membro.user.tag, membro.user.avatarURL)
        .setDescription(texto1)
        .setColor(bot.color_green);
            
        const mensagem = new RichEmbed()
        .setDescription(`${texto} <@&${bot.emprego_legal10}>`)
        .setColor(bot.color_green)
            
        canal_batepapo.send(mensagem);
        canal_legal.send(embed).then(msg => msg.delete(5000));
        }
    }
  }
  
})
  
  
client.on('raw', async dados => {
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "693046199804100619") return

    let servidor = client.guilds.get("464839271560380468")
    let membro = servidor.members.get(dados.d.user_id)
    
    let canal_legal = client.channels.get("674333834644291591");
    
    let canal_batepapo = client.channels.get("620094850183987221");
    
    let canal_log = client.channels.get("680786294464315412");
  
    let texto = `**${membro.user.tag}** acabou de ser contradado como`;
    let texto1 = bot.emote_correct + ` Parabéns pelo novo emprego!`;
  

        if(dados.t === "MESSAGE_REACTION_ADD"){
          
        if(dados.d.emoji.name === "eletricista"){

        if(membro.roles.find(r => r.id === bot.cargo_empregado)) return
          
        if(!membro.roles.find(r => r.id === bot.carteira_legal2)) return 
            
          if(membro.roles.find(r => r.id === bot.emprego_legal11)){
            membro.addRole(bot.cargo_separador)
            membro.addRole(bot.cargo_empregado)
            membro.addRole(bot.emprego_legal12)
            membro.removeRole(bot.emprego_legal11)
            membro.removeRole(bot.carteira_legal2)
            
        let embed = new RichEmbed()
        .setAuthor(membro.user.tag, membro.user.avatarURL)
        .setDescription(texto1)
        .setColor(bot.color_green);
            
        const mensagem = new RichEmbed()
        .setDescription(`${texto} <@&${bot.emprego_legal12}>`)
        .setColor(bot.color_green)
            
        canal_batepapo.send(mensagem);
        canal_legal.send(embed).then(msg => msg.delete(5000));
        }
    }else if(dados.d.emoji.name === "contador"){

        if(membro.roles.find(r => r.id === bot.cargo_empregado)) return
          
        if(!membro.roles.find(r => r.id === bot.carteira_legal2)) return 
            
          if(membro.roles.find(r => r.id === bot.emprego_legal13)){
            membro.addRole(bot.cargo_separador)
            membro.addRole(bot.cargo_empregado)
            membro.addRole(bot.emprego_legal14)
            membro.removeRole(bot.emprego_legal13)
            membro.removeRole(bot.carteira_legal2)
            
        let embed = new RichEmbed()
        .setAuthor(membro.user.tag, membro.user.avatarURL)
        .setDescription(texto1)
        .setColor(bot.color_green);
            
        const mensagem = new RichEmbed()
        .setDescription(`${texto} <@&${bot.emprego_legal14}>`)
        .setColor(bot.color_green)
            
        canal_batepapo.send(mensagem);
        canal_legal.send(embed).then(msg => msg.delete(5000));
        }
    }else if(dados.d.emoji.name === "jornalista"){

        if(membro.roles.find(r => r.id === bot.cargo_empregado)) return
          
        if(!membro.roles.find(r => r.id === bot.carteira_legal2)) return 
            
          if(membro.roles.find(r => r.id === bot.emprego_legal15)){
            membro.addRole(bot.cargo_separador)
            membro.addRole(bot.cargo_empregado)
            membro.addRole(bot.emprego_legal16)
            membro.removeRole(bot.emprego_legal15)
            membro.removeRole(bot.carteira_legal2)
            
        let embed = new RichEmbed()
        .setAuthor(membro.user.tag, membro.user.avatarURL)
        .setDescription(texto1)
        .setColor(bot.color_green);
            
        const mensagem = new RichEmbed()
        .setDescription(`${texto} <@&${bot.emprego_legal16}>`)
        .setColor(bot.color_green)
            
        canal_batepapo.send(mensagem);
        canal_legal.send(embed).then(msg => msg.delete(5000));
        }
    }else if(dados.d.emoji.name === "agricultor"){

        if(membro.roles.find(r => r.id === bot.cargo_empregado)) return
          
        if(!membro.roles.find(r => r.id === bot.carteira_legal2)) return 
            
          if(membro.roles.find(r => r.id === bot.emprego_legal17)){
            membro.addRole(bot.cargo_separador)
            membro.addRole(bot.cargo_empregado)
            membro.addRole(bot.emprego_legal18)
            membro.removeRole(bot.emprego_legal17)
            membro.removeRole(bot.carteira_legal2)
            
        let embed = new RichEmbed()
        .setAuthor(membro.user.tag, membro.user.avatarURL)
        .setDescription(texto1)
        .setColor(bot.color_green);
            
        const mensagem = new RichEmbed()
        .setDescription(`${texto} <@&${bot.emprego_legal18}>`)
        .setColor(bot.color_green)
            
        canal_batepapo.send(mensagem);
        canal_legal.send(embed).then(msg => msg.delete(5000));
        }
    }else if(dados.d.emoji.name === "fotografo"){

        if(membro.roles.find(r => r.id === bot.cargo_empregado)) return
          
        if(!membro.roles.find(r => r.id === bot.carteira_legal2)) return 
            
          if(membro.roles.find(r => r.id === bot.emprego_legal19)){
            membro.addRole(bot.cargo_separador)
            membro.addRole(bot.cargo_empregado)
            membro.addRole(bot.emprego_legal20)
            membro.removeRole(bot.emprego_legal19)
            membro.removeRole(bot.carteira_legal2)
            
        let embed = new RichEmbed()
        .setAuthor(membro.user.tag, membro.user.avatarURL)
        .setDescription(texto1)
        .setColor(bot.color_green);
            
        const mensagem = new RichEmbed()
        .setDescription(`${texto} <@&${bot.emprego_legal20}>`)
        .setColor(bot.color_green)
            
        canal_batepapo.send(mensagem);
        canal_legal.send(embed).then(msg => msg.delete(5000));
        }
    }else if(dados.d.emoji.name === "veterinario"){

        if(membro.roles.find(r => r.id === bot.cargo_empregado)) return
          
        if(!membro.roles.find(r => r.id === bot.carteira_legal2)) return 
            
          if(membro.roles.find(r => r.id === bot.emprego_legal21)){
            membro.addRole(bot.cargo_separador)
            membro.addRole(bot.cargo_empregado)
            membro.addRole(bot.emprego_legal22)
            membro.removeRole(bot.emprego_legal21)
            membro.removeRole(bot.carteira_legal2)
            
        let embed = new RichEmbed()
        .setAuthor(membro.user.tag, membro.user.avatarURL)
        .setDescription(texto1)
        .setColor(bot.color_green);
            
        const mensagem = new RichEmbed()
        .setDescription(`${texto} <@&${bot.emprego_legal22}>`)
        .setColor(bot.color_green)
            
        canal_batepapo.send(mensagem);
        canal_legal.send(embed).then(msg => msg.delete(5000));
        }
    }else if(dados.d.emoji.name === "reporter"){

        if(membro.roles.find(r => r.id === bot.cargo_empregado)) return
          
        if(!membro.roles.find(r => r.id === bot.carteira_legal2)) return 
            
          if(membro.roles.find(r => r.id === bot.emprego_legal23)){
            membro.addRole(bot.cargo_separador)
            membro.addRole(bot.cargo_empregado)
            membro.addRole(bot.emprego_legal24)
            membro.removeRole(bot.emprego_legal23)
            membro.removeRole(bot.carteira_legal2)
            
        let embed = new RichEmbed()
        .setAuthor(membro.user.tag, membro.user.avatarURL)
        .setDescription(texto1)
        .setColor(bot.color_green);
            
        const mensagem = new RichEmbed()
        .setDescription(`${texto} <@&${bot.emprego_legal24}>`)
        .setColor(bot.color_green)
            
        canal_batepapo.send(mensagem);
        canal_legal.send(embed).then(msg => msg.delete(5000));
        }
    }else if(dados.d.emoji.name === "dentista"){

        if(membro.roles.find(r => r.id === bot.cargo_empregado)) return
          
        if(!membro.roles.find(r => r.id === bot.carteira_legal2)) return 
            
          if(membro.roles.find(r => r.id === bot.emprego_legal25)){
            membro.addRole(bot.cargo_separador)
            membro.addRole(bot.cargo_empregado)
            membro.addRole(bot.emprego_legal26)
            membro.removeRole(bot.emprego_legal25)
            membro.removeRole(bot.carteira_legal2)
            
        let embed = new RichEmbed()
        .setAuthor(membro.user.tag, membro.user.avatarURL)
        .setDescription(texto1)
        .setColor(bot.color_green);
            
        const mensagem = new RichEmbed()
        .setDescription(`${texto} <@&${bot.emprego_legal26}>`)
        .setColor(bot.color_green)
            
        canal_batepapo.send(mensagem);
        canal_legal.send(embed).then(msg => msg.delete(5000));
        }
    }else if(dados.d.emoji.name === "lutador"){

        if(membro.roles.find(r => r.id === bot.cargo_empregado)) return
          
        if(!membro.roles.find(r => r.id === bot.carteira_legal2)) return 
            
          if(membro.roles.find(r => r.id === bot.emprego_legal27)){
            membro.addRole(bot.cargo_separador)
            membro.addRole(bot.cargo_empregado)
            membro.addRole(bot.emprego_legal28)
            membro.removeRole(bot.emprego_legal27)
            membro.removeRole(bot.carteira_legal2)
            
        let embed = new RichEmbed()
        .setAuthor(membro.user.tag, membro.user.avatarURL)
        .setDescription(texto1)
        .setColor(bot.color_green);
            
        const mensagem = new RichEmbed()
        .setDescription(`${texto} <@&${bot.emprego_legal28}>`)
        .setColor(bot.color_green)
            
        canal_batepapo.send(mensagem);
        canal_legal.send(embed).then(msg => msg.delete(5000));
        }
      
    }
  }
})
  
  
client.on('raw', async (dados, reaction, user) => {
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "693047392404111371") return

    let servidor = client.guilds.get("464839271560380468")
    let membro = servidor.members.get(dados.d.user_id)
    
    let canal_legal = client.channels.get("674333854525423673");
    
    let canal_batepapo = client.channels.get("620094850183987221");
  
    let canal_log = client.channels.get("680786294464315412");
  
    let texto = `**${membro.user.tag}** acabou de ser contradado como`;
    let texto1 = bot.emote_correct + ` Parabéns pelo novo emprego!`;
  
        if(dados.t === "MESSAGE_REACTION_ADD"){
          
      
          
        if(dados.d.emoji.name === "astronomo"){
                    
        if(membro.roles.find(r => r.id === bot.cargo_empregado)) return
          
        if(!membro.roles.find(r => r.id === bot.carteira_legal3)) return 
            
          if(membro.roles.find(r => r.id === bot.emprego_legal29)){
            membro.addRole(bot.cargo_separador)
            membro.addRole(bot.cargo_empregado)
            membro.addRole(bot.emprego_legal30)
            membro.removeRole(bot.emprego_legal29)
            membro.removeRole(bot.carteira_legal3)
            
        let embed = new RichEmbed()
        .setAuthor(membro.user.tag, membro.user.avatarURL)
        .setDescription(texto1)
        .setColor(bot.color_green);
            
        const mensagem = new RichEmbed()
        .setDescription(`${texto} <@&${bot.emprego_legal30}>`)
        .setColor(bot.color_green)
            
        canal_batepapo.send(mensagem);
        canal_legal.send(embed).then(msg => msg.delete(5000));
        }
      }
    }else if(dados.d.emoji.name === "bombeiro"){
      
        if(membro.roles.find(r => r.id === bot.cargo_empregado)) return
          
        if(!membro.roles.find(r => r.id === bot.carteira_legal3)) return 
            
          if(membro.roles.find(r => r.id === bot.emprego_legal31)){
            membro.addRole(bot.cargo_separador)
            membro.addRole(bot.cargo_empregado)
            membro.addRole(bot.emprego_legal32)
            membro.removeRole(bot.emprego_legal31)
            membro.removeRole(bot.carteira_legal3)
            
        let embed = new RichEmbed()
        .setAuthor(membro.user.tag, membro.user.avatarURL)
        .setDescription(texto1)
        .setColor(bot.color_green);
            
        const mensagem = new RichEmbed()
        .setDescription(`${texto} <@&${bot.emprego_legal32}>`)
        .setColor(bot.color_green)
            
        canal_batepapo.send(mensagem);
        canal_legal.send(embed).then(msg => msg.delete(5000));
        }
    }else if(dados.d.emoji.name === "xerife"){
      
        if(membro.roles.find(r => r.id === bot.cargo_empregado)) return
          
        if(!membro.roles.find(r => r.id === bot.carteira_legal3)) return 
            
          if(membro.roles.find(r => r.id === bot.emprego_legal33)){
            membro.addRole(bot.cargo_separador)
            membro.addRole(bot.cargo_empregado)
            membro.addRole(bot.emprego_legal34)
            membro.removeRole(bot.emprego_legal33)
            membro.removeRole(bot.carteira_legal3)
            
            
        let embed = new RichEmbed()
        .setAuthor(membro.user.tag, membro.user.avatarURL)
        .setDescription(texto1)
        .setColor(bot.color_green);
            
        const mensagem = new RichEmbed()
        .setDescription(`${texto} <@&${bot.emprego_legal34}>`)
        .setColor(bot.color_green)
            
        canal_batepapo.send(mensagem);
        canal_legal.send(embed).then(msg => msg.delete(5000));
        }
      }
    }
  
)
}