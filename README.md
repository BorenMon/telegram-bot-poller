# Telegram Bot Poller

A modern Telegram bot built with [Telegraf](https://telegraf.js.org/) and TypeScript, containerized with Docker.

## Features

- 🤖 Modern Telegram bot using Telegraf framework
- 📝 Written in TypeScript with strict type checking
- 🐳 Dockerized for easy deployment
- 🔧 Hot reloading for development
- 📊 Built-in logging and error handling
- 🏥 Health checks for production monitoring

## Commands

- `/start` - Start the bot and get welcome message
- `/help` - Show available commands
- `/echo <text>` - Echo back your message
- `/info` - Get bot and user information
- `/chatid` - Get the current chat ID

## Prerequisites

- Node.js 18+ or Docker
- Telegram Bot Token (get from [@BotFather](https://t.me/botfather))

## Quick Start

### 1. Get a Bot Token

1. Message [@BotFather](https://t.me/botfather) on Telegram
2. Send `/newbot` command
3. Follow the instructions to create your bot
4. Copy the token you receive

### 2. Setup Environment

```bash
# Copy environment template
cp env.example .env

# Edit .env file
BOT_NAME=your_bot_name_for_info
BOT_TOKEN=your_actual_bot_token_here
```

### 3. Run with Docker (Recommended)

```bash
# Build and run with docker compose
docker compose up --build

# Or run in background
docker compose up -d --build
```

### 4. Run Locally

```bash
# Install dependencies
npm install

# Development mode
npm run dev

# Production mode
npm run build
npm start
```

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run watch` - Watch for changes and rebuild
- `npm run clean` - Clean build directory

### Project Structure

```
├── src/
│   └── index.ts          # Main bot file
├── dist/                 # Compiled JavaScript (generated)
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── .env                 # Environment variables (create from env.example)
```

## Docker Deployment

### Production

```bash
# Build and run production container
docker compose up --build

# Run in background
docker compose up -d --build
```

### Development

```bash
# Run development container with hot reloading
docker compose --profile dev up --build
```

### Docker Commands

```bash
# View logs
docker compose logs -f telegram-bot

# Stop services
docker compose down

# Rebuild without cache
docker compose build --no-cache

# Check container health
docker compose ps
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `BOT_NAME` | Telegram bot name for info | No |
| `BOT_TOKEN` | Telegram bot token from @BotFather | Yes |
| `NODE_ENV` | Environment (development/production) | No |

## Adding New Commands

To add a new command, edit `src/index.ts`:

```typescript
// Add new command
bot.command('mycommand', (ctx) => {
  ctx.reply('This is my new command!');
});

// Add to help command
bot.help((ctx) => {
  ctx.reply(`
Available commands:
/start - Start the bot
/help - Show this help message
/mycommand - My new command
  `);
});
```

## Troubleshooting

### Common Issues

1. **Bot not responding**: Check if `BOT_TOKEN` is correct in `.env`
2. **Docker build fails**: Ensure `package-lock.json` exists (run `npm install`)
3. **Permission errors**: Check Docker user permissions
4. **Port conflicts**: Change exposed port in Dockerfile if needed

### Logs

```bash
# View application logs
docker compose logs telegram-bot

# View real-time logs
docker compose logs -f telegram-bot
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

ISC License - see package.json for details.

## Support

For issues and questions:
- Check the [Telegraf documentation](https://telegraf.js.org/)
- Review the [Telegram Bot API documentation](https://core.telegram.org/bots/api)
- Open an issue in this repository 