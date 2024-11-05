require('dotenv').config();
const express = require('express');
const { Telegraf } = require('telegraf');

const app = express();
const port = process.env.PORT || 3000; // Порт, на котором будет работать сервер

const bot = new Telegraf(process.env.BOT_TOKEN);

// Обработчики команд бота
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

// Запуск бота
bot.launch();
console.log('Бот запущен');

// Настройка маршрута для Express
app.get('/', (req, res) => {
  res.send('<h1>Бот запущен</h1>');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
