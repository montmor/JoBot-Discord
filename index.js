const { Client, Intents, ClientPresence } = require('discord.js')
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})
const config = require('./config.json')
const fs = require('fs')

client.login(config.token)

// const commands = fs.readdirSync("./commands').filter9file => file.endWith('js'))

client.once('ready', () => {
  console.log('✅ - Estou online!')
})

client.on('messageCreate', message => {
  if (message.author.bot == true || message.channel.type === "dm") return
  if (!message.content.toLowerCase().startsWith('config.prefix')) return
  
  
  const args = message.content.trim().slice(config.prefix.length).split(/ +/g)
  const command = args.shift().toLowerCase()
  
  try {
    const commandFile = require(`./commands/${command}.js`)
    commandFile.run(client, message, args)
  } catch (err) {
    console.error('Erro:' + err)
  }
})