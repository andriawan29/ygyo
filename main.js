
const { Client, GatewayIntentBits, Partials, Collection, ActivityType } = require('discord.js')
const axios = require('axios');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction],
  prefix:"!, @, !love ,",
  initCommands : true,
})

const token = 'MTE3NjM1MzI4NTQxOTA0OTA5OQ.Go6q_H.sFM5QC11tE46E5OI-lONLMf6hTMJwhzcyiaku0';

client.on('ready', () => {
    console.log(`Bot logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    

    if (message.content === '!cison') {
        message.reply('Kenapa manggil gua, gua cantik yh hari ini');
    }
});

//reply massage if host get tag form somebody
client.on('messageCreate', (message) => {

    if (message.content === '@mewwme') {

            const username = message.author.username;
            message.reply(`Ada apa nih ${username} tunggu sebentar yh mewwme's`);
    }
    
});


//anyong reply massage
client.on('messageCreate', (message) => {

    if (message.content === '!anyong') {
        message.reply('Haiii teman-teman mewwmes\'s semuanya, gimana kabar kalian hari ini.');
    }
});

//mole reply massage
client.on('messageCreate', (message) => {
    

    if (message.content === '!mole') {
        const mobileRole = message.guild.roles.cache.find(role => role.name === 'MOBILE LEGENDS');
                
        // Jika role ditemukan, kirim pesan dengan mention ke role
        if (mobileRole) {
            
        message.reply(`Haiii mewwme\'s ${mobileRole}, Butuh teman main Mole nih !.`);
        }
    }
});
//Valo replay massages
client.on('messageCreate', (message) => {
    

    if (message.content === '!valo') {
        const mobileRole = message.guild.roles.cache.find(role => role.name === 'VALORANT');
                
        // Jika role ditemukan, kirim pesan dengan mention ke role
        if (mobileRole) {
            
        message.reply(`Haiii mewwme\'s ${mobileRole}, Butuh teman main valo nih !.`);
        }
    }
});

const PREFIX = "!love ";

client.on('messageCreate', (message) => {
    // Memeriksa apakah pesan dimulai dengan prefix yang benar
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    // Mengambil variabel massages dari pesan
    const massages = message.content.slice(PREFIX.length).trim();

    // Menghasilkan dua bilangan acak sebagai presentasi
    const presentasi = Math.floor(Math.random() * 100);
    const username = message.author.username;

    // Membuat balasan dengan menggunakan variabel massages, presentasi, dan presentai
    const reply = `${username} love ${massages} kira-kira cocoknya ${presentasi}%`;

    // Mengirim balasan ke saluran yang sama dengan pesan asli
    message.reply(reply);
    }

);

client.login(token);
