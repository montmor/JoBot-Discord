module.exports = {
  name: 'clear',
  author: 'Equipe Rocket_oof',

  run: async (client, message, args) => {
    let channel = message.channel
    let quantity = args[0]

    if (!message.member.permissions.has('MANAGE_MESSAGES')) {
      return message.reply(
        'Aparentemente você não tem permissões deletar mensagens 🥲'
      )
    }

    if (args.length === 0) {
      return message.reply(
        'Informe a quantidade de mensagens que deseja apagar 🤗'
      )
    }

    if (quantity > 100) {
      return message.reply('Não é possível apagar mais que 100 mensagens!')
    }

    channel.bulkDelete(quantity + 1)

    const msg = await message.channel.send(
      `${quantity} mensagens foram apagadas!`
    )

    setTimeout(() => {
      msg.delete()
    }, 4000)
  }
}
