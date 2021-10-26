const { Client, Intents, ClientPresence } = require('discord.js')
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})
const config = require('./config.json')

client.login(config.token)

client.once('ready', () => {
  console.log('✅ - Estou online!')
})

client.on('messageCreate', message => {
  if (message.author.bot == true) return
  if ((message.channel.type = 'dm')) return
  if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase()))
    return
  if (
    message.content.startsWith(`<@!${client.user.id}>`) ||
    message.content.startsWith(`<@${client.user.id}>`)
  )
    return

  const args = message.content.trim().slice(config.prefix.length).split(/ +/g)
  const command = args.shift().toLowerCase()

  try {
    const commandFile = require(`./commands/${command}.js`)
    commandFile.run(client, message, args)
  } catch (err) {
    console.error('Erro:' + err)
  }
})
