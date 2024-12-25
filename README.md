# Telegram Mini App Demo

## 1. Deploy the Web App

- Use Vercel to deploy the web app
- Get the URL of the deployed web app

## 2. Create a new Telegram bot

- Open Telegram and search for `BotFather`
- Start a chat with `BotFather`, then type `/newbot` to create a new bot

## 3. Get the bot token

- After creating the bot, `BotFather` will give you a token
- Copy the token and save it `./bot/.env` file

## 4. Create a mini app

- Type `/newapp` to create a new mini app with `BotFather`
- Provide the URL of the deployed web app
- `BotFather` will give you a mini app link
- Copy the mini app link and save it in `./bot/.env` file

```bash
BOT_TOKEN=<bot_token>
WEBAPP_URL=<mini_app_link>
```

## 5. Run the bot

- Run the bot using the following command

```bash
$ cd bot && yarn install && yarn dev
```
