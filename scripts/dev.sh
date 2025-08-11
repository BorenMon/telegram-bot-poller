#!/bin/bash

# Development script for Apecom Telegram Bot

echo "🚀 Starting Apecom Bot in development mode..."

# Check if BOT_TOKEN is set
if ! grep -q "BOT_TOKEN=your_bot_token_here" .env; then
    echo "✅ Environment file looks good"
else
    echo "⚠️  Please set your BOT_TOKEN in .env file"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start development server
echo "🔧 Starting development server..."
npm run dev 