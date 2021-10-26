const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'ping',
  author: 'Equipe Rocket',

  run: async (client, message, args) => {
    let color_embed

    let bot_ping = client.ws.ping

    let embed_1 = new MessageEmbed()
      .setColor(color_embed)
      .setDescription('Calculando ping...')

    let msg = await message.reply({ embeds: [embed_1] })

    setTimeout(() => {
      msg.edit({
        embeds: [
          embed_1.setDescription(`**O meu ping está em \`${bot_ping} ms\`.**`)
        ]
      })
    })
  }
}
