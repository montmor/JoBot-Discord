const Discord = require('discord.js')
const { Client, Intents } = require('discord.js')

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        // inclua os outros intents que possa precisar
    ]
})

const client = new Discord.Client()
const config = require('./config.json')

client.loging(config.token)