const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'help',
  author: 'Equipe Rocket_oof',

  run: async (client, message, args) => {
    const color_Embed = '#ff9000'

    let embed_1 = new MessageEmbed()
    .setColor(ccolor_Embed)
    .setTitle('Do que você precisa?')
    .setDescription('Olá, sou o Jó! Estou aqui para te ajudar no que for necessário.')
    .addFields({
      name: "Comandos Utilitários",
      
    })
  }
}
