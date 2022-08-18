import { config } from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';

config();

const client = new Client({ 
    intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages
    ]
});

const TOKEN = process.env.BOT_TOKEN

client.login(TOKEN);

client.on('ready', () => {
    console.log('Skybot is charged up and ready to fly');
});

client.on('messageCreate', (message) => {
    console.log(message.content);
});