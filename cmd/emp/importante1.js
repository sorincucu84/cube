// const Discord = require("discord.js");
// const { RichEmbed } = require("discord.js");
// const c = require("../../c.json"); // Cores
// const e = require("../../e.json"); // Emojis
// const e1 = require("../../e1.json");
// const eid = require("../../e2.json");

// module.exports = {
//   name: "importante1",
//   aliases: ["", ""],
//   description: "",
//   usage: "",
//   run: async (client, message, args) =>  {
    
//     await message.delete().catch(O_o=>{});
    
//       if (!message.member.hasPermission('ADMINISTRATOR')) {
//         let embed = new Discord.RichEmbed()
//         .setAuthor(message.author.tag, message.author.displayAvatarURL)
//         .setDescription(e.incorrect + " Sem permissão")
//         .setColor(c.red)
//         return message.channel.send(embed);
//     };
    
//     /*          Trabalhos Legais              */
//     const legal1 = message.guild.roles.get('674287320823889956'); // ✔️ Gari
//     const legal2 = message.guild.roles.get('674287322132381697'); // 💼 Gari
//     const legal3 = message.guild.roles.get('674287325399744512'); // ✔️ Pedreiro
//     const legal4 = message.guild.roles.get('674287328004407328'); // 💼 Pedreiro
//     const legal5 = message.guild.roles.get('674287325789814787'); // ✔️ Zelador
//     const legal6 = message.guild.roles.get('674287323663433729'); // 💼 Zelador
//     const legal7 = message.guild.roles.get('674288540422766602'); // ✔️ Entregador
//     const legal8 = message.guild.roles.get('674288538438860820'); // 💼 Entregador
//     const legal9 = message.guild.roles.get('674287323126431756'); // ✔️ Caixa de Mercado
//     const legal10 = message.guild.roles.get('674287325550739486'); // 💼 Caixa de Mercado
//     const legal11 = message.guild.roles.get('674287328323305472'); // ✔️ Sapateiro
//     const legal12 = message.guild.roles.get('674287328642072586'); // 💼 Sapateiro
//     const legal13 = message.guild.roles.get('674287331338878992'); // ✔️ Jardinero
//     const legal14 = message.guild.roles.get('674287328826490880'); // 💼 Jardinero
//     const legal15 = message.guild.roles.get('674287331007660057'); // ✔️ Pescador
//     const legal16 = message.guild.roles.get('674287320165515285'); // 💼 Pescador
//     const legal17 = message.guild.roles.get('674287321671270411'); // ✔️ Motorista
//     const legal18 = message.guild.roles.get('674287331124969493'); // 💼 Motorista
//     const legal19 = message.guild.roles.get('674287326410833941'); // ✔️ Enfermeiro
//     const legal20 = message.guild.roles.get('674287331020374047'); // 💼 Enfermeiro
//     const legal21 = message.guild.roles.get('674287334719619121'); // ✔️ Eletricista
//     const legal22 = message.guild.roles.get('674287334736265237'); // 💼 Eletricista
//     const legal23 = message.guild.roles.get('674287659916591114'); // ✔️ Fazendeiro
//     const legal24 = message.guild.roles.get('674287656301101120'); // 💼 Fazendeiro
//     const legal25 = message.guild.roles.get('674287334719488013'); // ✔️ Contador
//     const legal26 = message.guild.roles.get('674287331951378465'); // 💼 Contador
//     const legal27 = message.guild.roles.get('674287659170005022'); // ✔️ Carpinteiro
//     const legal28 = message.guild.roles.get('674287658410836019'); // 💼 Carpinteiro
//     const legal29 = message.guild.roles.get('674287656909144104'); // ✔️ Jornalista
//     const legal30 = message.guild.roles.get('674287657752199168'); // 💼 Jornalista
//     const legal31 = message.guild.roles.get('674287781614190597'); // ✔️ Alfaiate
//     const legal32 = message.guild.roles.get('674287779680878603'); // 💼 Alfaiate
//     const legal33 = message.guild.roles.get('674287782998573087'); // ✔️ Agricultor
//     const legal34 = message.guild.roles.get('674287660625428490'); // 💼 Agricultor
//     const legal35 = message.guild.roles.get('674287783883440138'); // ✔️ Professor
//     const legal36 = message.guild.roles.get('674287785645047828'); // 💼 Professor
//     const legal37 = message.guild.roles.get('674287803235958784'); // ✔️ Fotógrafo
//     const legal38 = message.guild.roles.get('674287804804628500'); // 💼 Fotógrafo
//     const legal39 = message.guild.roles.get('674287797867380776'); // ✔️ Cozinheiro
//     const legal40 = message.guild.roles.get('674288422206177310'); // 💼 Cozinheiro
//     const legal41 = message.guild.roles.get('674288434344362005'); // ✔️ Veterinário
//     const legal42 = message.guild.roles.get('674288438387802122'); // 💼 Veterinário
//     const legal43 = message.guild.roles.get('674288441655296010'); // ✔️ Estilista
//     const legal44 = message.guild.roles.get('674288430519156758'); // 💼 Estilista
//     const legal45 = message.guild.roles.get('674288426387898407'); // ✔️ Repórter
//     const legal46 = message.guild.roles.get('674288497234018325'); // 💼 Repórter
//     const legal47 = message.guild.roles.get('674288503978328064'); // ✔️ Farmacêutico
//     const legal48 = message.guild.roles.get('674288506201309214'); // 💼 Farmacêutico
//     const legal49 = message.guild.roles.get('674288499037437973'); // ✔️ Dentista
//     const legal50 = message.guild.roles.get('674288508093071400'); // 💼 Dentista
//     const legal51 = message.guild.roles.get('674288501663072298'); // ✔️ Advogado
//     const legal52 = message.guild.roles.get('674288510123114515'); // 💼 Advogado
//     const legal53 = message.guild.roles.get('674288512220266534'); // ✔️ Lutador
//     const legal54 = message.guild.roles.get('674288514510094361'); // 💼 Lutador
//     const legal55 = message.guild.roles.get('674288518851330049'); // ✔️ Engenheiro Civil
//     const legal56 = message.guild.roles.get('674288516410114049'); // 💼 Engenheiro Civil
//     const legal57 = message.guild.roles.get('674288520810201129'); // ✔️ Astrônomo
//     const legal58 = message.guild.roles.get('674288525801160732'); // 💼 Astrônomo
//     const legal59 = message.guild.roles.get('674288527760031779'); // ✔️ Médico Cirurgião
//     const legal60 = message.guild.roles.get('674288529949327390'); // 💼 Médico Cirurgião
//     const legal61 = message.guild.roles.get('674288523389435944'); // ✔️ Bombeiro
//     const legal62 = message.guild.roles.get('674288533963407384'); // 💼 Bombeiro
//     const legal63 = message.guild.roles.get('674288531761397811'); // ✔️ Gerente
//     const legal64 = message.guild.roles.get('674288494671167511'); // 💼 Gerente
//     const legal65 = message.guild.roles.get('674288536358223892'); // ✔️ Xerife
//     const legal66 = message.guild.roles.get('674288545464057876'); // 💼 Xerife
    
//     /*          Trabalhos Ilegais              */
//     const ilegal1 = message.guild.roles.get('673618259488014395'); // ✔️ Ladrão
//     const ilegal2 = message.guild.roles.get('673618997756952586'); // 💼 Ladrão
//     const ilegal3 = message.guild.roles.get('673619000810405899'); // ✔️ Assassino
//     const ilegal4 = message.guild.roles.get('673618999702978595'); // 💼 Assassino
//     const ilegal5 = message.guild.roles.get('673651020508823581'); // ✔️ Traficante
//     const ilegal6 = message.guild.roles.get('673651020412354563'); // 💼 Traficante
//     const ilegal7 = message.guild.roles.get('673616424870084612'); // ✔️ Ladrão de Carros
//     const ilegal8 = message.guild.roles.get('673622302285627415'); // 💼 Ladrão de Carros
//     const ilegal9 = message.guild.roles.get('673622303958892596'); // ✔️ Contrabandista
//     const ilegal10 = message.guild.roles.get('673622303774474284'); // 💼 Contrabandista
//     const ilegal11 = message.guild.roles.get('673622302964842568'); // ✔️ Matador de Aluguel
//     const ilegal12 = message.guild.roles.get('673622306320547858'); // 💼 Matador de Aluguel
//     const ilegal13 = message.guild.roles.get('673650357863448585'); // ✔️ Vendedor de Maconha
//     const ilegal14 = message.guild.roles.get('673650759262535690'); // 💼 Vendedor de Maconha
//     const ilegal15 = message.guild.roles.get('673622306072821806'); // ✔️ Traficante de Armas
//     const ilegal16 = message.guild.roles.get('673622305447870465'); // 💼 Traficante de Armas
//     const ilegal17 = message.guild.roles.get('673618999409508353'); // ✔️ Membro da Máfia
//     const ilegal18 = message.guild.roles.get('673619000776982579'); // 💼 Membro da Máfia
//     const ilegal19 = message.guild.roles.get('673622305355726861'); // ✔️ Cafetão
//     const ilegal20 = message.guild.roles.get('673622302226907176'); // 💼 Cafetão
//     const ilegal21 = message.guild.roles.get('673651015668596796'); // ✔️ Chefe da Máfia
//     const ilegal22 = message.guild.roles.get('673651020257296386'); // 💼 Chefe da Máfia
//     const ilegal23 = message.guild.roles.get('673651013407867012'); // ✔️ Traficante de Pessoas
//     const ilegal24 = message.guild.roles.get('673651020659818531'); // 💼 Traficante de Pessoas
//     const ilegal25 = message.guild.roles.get('673653539116941329'); // ✔️ Governador Corrupto
//     const ilegal26 = message.guild.roles.get('673654182917439488'); // 💼 Governador Corrupto
//     const ilegal27 = message.guild.roles.get('673654182439288837'); // ✔️ Serial Killer
//     const ilegal28 = message.guild.roles.get('673651015442104365'); // 💼 Serial Killer
//     const ilegal29 = message.guild.roles.get('673625269482815494'); // ✔️ Hacker de Bitcoins
//     const ilegal30 = message.guild.roles.get('673625271508926483'); // 💼 Hacker de Bitcoins
//     const ilegal31 = message.guild.roles.get('673625272515428408'); // ✔️ Vendedor de Órgãos
//     const ilegal32 = message.guild.roles.get('673625271580229682'); // 💼 Vendedor de Órgãos
//     const ilegal33 = message.guild.roles.get('673625269713633332'); // ✔️ Clonador de Cartões
//     const ilegal34 = message.guild.roles.get('673649724158509097'); // 💼 Clonador de Cartões
//     const ilegal35 = message.guild.roles.get('673625272934989864'); // ✔️ Chefe do PCC
//     const ilegal36 = message.guild.roles.get('673650353241194516'); // 💼 Chefe do PCC
    
    
//     /*          Trabalhos Importantes              */
//     const importante1 = message.guild.roles.get('673616427818811403'); // ✔️ Vereador
//     const importante2 = message.guild.roles.get('673616429731545139'); // 💼 Vereador
//     const importante3 = message.guild.roles.get('673616424991719451'); // ✔️ Deputado
//     const importante4 = message.guild.roles.get('673616427462295572'); // 💼 Deputado
//     const importante5 = message.guild.roles.get('673616425478258880'); // ✔️ Senador
//     const importante6 = message.guild.roles.get('673616429374898187'); // 💼 Senador
//     const importante7 = message.guild.roles.get('673618256409526282'); // ✔️ Governador
//     const importante8 = message.guild.roles.get('673618259567837234'); // 💼 Governador
//     const importante9 = message.guild.roles.get('673618262403186689'); // ✔️ Prefeito
//     const importante10 = message.guild.roles.get('673618255772123189'); // 💼 Prefeito
//     const importante11 = message.guild.roles.get('673618257273421883'); // ✔️ Ministro
//     const importante12 = message.guild.roles.get('673618257781194763'); // 💼 Ministro
//     const importante13 = message.guild.roles.get('673618260654293025'); // ✔️ Presidente
//     const importante14 = message.guild.roles.get('673618258120802315'); // 💼 Presidente
    
    
    
//     const embed = await new Discord.RichEmbed()
//     .setColor(c.purple)
//     .setTitle('Profissões Disponíveis')
//     .setThumbnail('https://cdn.discordapp.com/attachments/670339243083694080/674399501691256843/icon.png')
//     .setDescription('Limite de um emprego simultâneo')
//     .addField(e.blank, `**${e1.vereador} Vereador**`, true)
//     .addField(e.blank, `**${e1.deputado} Deputado**`, true)

        
//     message.channel.send(embed).then(async embedMessage => {
//     await embedMessage.react(eid.vereador);
//       await embedMessage.react(eid.deputado);
//     })
//   }
// }