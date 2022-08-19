import { config } from 'dotenv';
import { Client, GatewayIntentBits, Routes } from 'discord.js';
import { REST } from '@discordjs/rest'

config();

const TOKEN = process.env.BOT_TOKEN
const CLIENT_ID = process.env.CLIENT_ID
const GUILD_ID = process.env.GUILD_ID

const client = new Client({ 
    intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages
    ]
});

const rest = new REST({ version: '10' }).setToken(TOKEN);


client.login(TOKEN);

client.on('ready', () => {
    console.log('Skybot is charged up and ready to fly');
});

async function main() {
    const commands = [
        {
          name: 'ping',
          description: 'Replies with Pong!',
        },
      ];

    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationCommands(CLIENT_ID, GUILD_ID), { body: commands });
        // client.login(TOKEN);
    } catch (err) {
        console.log(err);
    }
}

main();