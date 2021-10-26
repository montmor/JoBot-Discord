import { Client, Intents, ClientPresence } from 'discord.js';

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(" ");
  message.delete().catch(o_o => {});
  message.channel.send(sayMessage);
}