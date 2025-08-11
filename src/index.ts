import { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Check if BOT_TOKEN is provided
if (!process.env.BOT_TOKEN) {
  throw new Error('BOT_TOKEN must be provided!');
}

// Create bot instance
const bot = new Telegraf(process.env.BOT_TOKEN);

// Middleware to log all updates
bot.use((_ctx, next) => {
  const start = new Date();
  return next().then(() => {
    const ms = new Date().getTime() - start.getTime();
    console.log('Response time: %sms', ms);
  });
});

// Start command
bot.start((ctx) => {
  ctx.reply('Welcome to Apecom Bot! 🚀\nUse /help to see available commands.');
});

// Help command
bot.help((ctx) => {
  ctx.reply(`
Available commands:
/start - Start the bot
/help - Show this help message
/echo <text> - Echo back your message
/info - Get bot information
/chatid - Get chat id
  `);
});

// Echo command
bot.command('echo', (ctx) => {
  const message = ctx.message.text.split(' ').slice(1).join(' ');
  if (message) {
    ctx.reply(`Echo: ${message}`);
  } else {
    ctx.reply('Please provide a message to echo. Usage: /echo <message>');
  }
});

// Info command
bot.command('info', (ctx) => {
  const user = ctx.from;
  ctx.reply(`
🤖 Bot Information:
• Name: ${process.env.BOT_NAME}
• Version: 1.0.0
• User ID: ${user?.id}
• Username: ${user?.username || 'N/A'}
• First Name: ${user?.first_name || 'N/A'}
• Last Name: ${user?.last_name || 'N/A'}
  `);
});

// Chatid command
bot.command('chatid', (ctx) => {
  ctx.reply(`Chat ID: ${ctx.chat.id}`);
});

// Handle text messages
bot.on('text', (ctx) => {
  ctx.reply(`You said: "${ctx.message.text}"`);
});

// Handle errors
bot.catch((err, ctx) => {
  console.error(`Error for ${ctx.updateType}:`, err);
  ctx.reply('An error occurred while processing your request.');
});

// Launch bot
bot.launch()
  .then(() => {
    console.log('🚀 Bot is running...');
    console.log('Press Ctrl+C to stop');
  })
  .catch((err) => {
    console.error('Failed to start bot:', err);
    process.exit(1);
  });

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM')); 