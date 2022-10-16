let num = 0
let pnum = num + 1

module.exports = {
    name: 'messageCreate',
    once: false,
    execute(client, message) {
        if (message.author.bot) return;
        if(  message.channel.id === '993719908812722266') {
            if (message.content.startsWith(pnum))  {
            message.delete();
            num += 1;
            pnum += 1;
            const count = '993719908812722266'
            client.channels.cache.get('993719908812722266').send(`${num}`)}
            //client.channels.cache.get('993719908812722266').send('allo')}
    }
    
}}