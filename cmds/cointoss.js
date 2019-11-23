module.exports = {
    name: 'cointoss',
    aliases: ['heads', 'tails', 'headstails', 'headsortails', 'toss', 'tosscoin'],
    description: 'Heads or tails',
    easteregg: false,
    execute(message, args) {
        let chance = Math.ceil(Math.random() * 2);
        if (chance == 1) {
            message.channel.send('Heads');
        } else if (chance == 2) {
            message.channel.send('Tails');
        }
    }
}