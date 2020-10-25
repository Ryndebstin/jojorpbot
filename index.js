const { MessageEmbed , Client } = require('discord.js')
const Discord = require('discord.js')
const bot = new Client()

bot.on('ready', function () {
    bot.user.setActivity('!help').then(console.log('réussi'))  
})

bot.on('message', function (message) {   

    if (message.content.startsWith('!help')){
        const info = new MessageEmbed()
        .setColor('6800FF')
        .setTitle("JOJO'S RP BOT")
        .setDescription("tape !info suivit du prénom de perso")
        message.channel.send(info)
    } 
})

bot.on('message', function (message) {   

    if (message.content.startsWith('!infoMinami')){
       const v = new MessageEmbed()
       .setColor('3386FF')
       .setTitle('COUNTRY ROAD')
       .setDescription("Country road peut créer un solide (de la gelé au titane en passant par le metal et plein d'autres) a partir de néant \n\nprecision : C \nrange/distance d'action : 5m \npuissance : B+ \nvitesse : B")
       message.channel.send(v)
    } 
})

bot.on('message', function (message) {    

    if (message.content.startsWith('!infoKoshiro')){
        const m = new MessageEmbed()
        .setColor('301B5B')
        .setTitle('THE SHADOW')
        .setDescription("The Shadow peut controller l'ombre de son ennemi \n\nprécision : B+ \nrange/distance d'action : infini(obligatoirement contact visuel avec l'ombre) \npuissance : D+ \nvitesse : C+")
        message.channel.send(m)
    } 
})

bot.login('Njk1NjM3OTg2OTA1NDI0MDIz.XpcoCQ.oaF2_FDFdP9ml5b40Et7dC0zDnA')