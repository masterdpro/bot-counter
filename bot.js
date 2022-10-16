
	const fs = require('fs');
	const path = require('path');
	const { Client } = require('discord.js');
	const dotenv = require('dotenv'); dotenv.config();

	



const client = new Client({ intents: 32767 });

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));


for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	
	if (event.once) {
		client.once(event.name, (...args) => event.execute(client, ...args));
	} else {
		client.on(event.name, (...args) => event.execute(client, ...args));
	}
}




	
client.login(process.env.token);


