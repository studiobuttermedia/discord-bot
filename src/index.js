import { Client } from 'discord.js';

const client = new Client({ intents: ['Guilds', 'GuildMessages']})
const TOKEN = 
    'ODg4MTE0MjY0NTQyNDEyODkw.Gi1VMj.EktYYjWL9Rxyg-2S2xXxHQsrIUvNUJ2vJlLc18';

client.login(TOKEN)