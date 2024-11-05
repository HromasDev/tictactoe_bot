require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Добро пожаловать! Введите /play, чтобы начать игру.'));
bot.command('play', (ctx) => {
  ctx.reply('Запускаем игру крестики-нолики, выберите вариант игры:', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'VanillaJS',
            web_app: { url: process.env.WEB_APP_URL + 'vanilla' },
          },
          {
            text: 'ReactJS',
            web_app: { url: process.env.WEB_APP_URL + 'react' },
          },
        ],
      ],
    },
  });
});

bot.launch();
console.log('Бот запущен');