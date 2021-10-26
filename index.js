const { Client, Intents, ClientPresence } = require('discord.js')
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})
const config = require('./config.json')

client.on('ready', () => {
  console.log("Estou online!!!")
})

ClientPresence.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.content.startsWith(config.prefix)) return;
  if (message.content.startsWith(`<@!${cliente.user.id}`) || message.content.startsWith(`<@${cliente.user.id}`)) return;

  let args = message.content.split(" ").slice(1);
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  try {
    let commandFile = require(`./commands/${command}.js`);
    delete require.cache[require.resolve(`./command/${command}.js`)];
    return commandFile.run(client, message, args);    
  } 
  catch (err){
    console.error("Erro:" + err);

  }
});

client.login(config.token)
