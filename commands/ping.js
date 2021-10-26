const { Client, Intents, ClientPresence } = require('discord.js')
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})
const config = require('./config.json')

module.exports = {
  name: 'ping',
  author: 'Bianca',

  run: async (client, message, args) => {
    let color_embed

    let bot_ping = client.ws.ping

    let embed_1 = new Discord.MessageEmbed()
      .setColor(color_embed)
      .setDescriptionition(`**O meu ping está em \`${bot_ping} ms\`.**`)

    let command_by_Bianca = await message
      .reply({ embeds: [embed_1] })
      .then(msg => {
        setTimeout(() => {
          msg.edit({ embeds: [embed_1] })
        }, 2000)
      })
  }
}
