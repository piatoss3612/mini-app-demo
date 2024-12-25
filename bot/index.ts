import { Telegraf } from "telegraf";
import { config } from "./config";

if (!config.BOT_TOKEN) {
  throw new Error("BOT_TOKEN must be provided!");
}

const bot = new Telegraf(config.BOT_TOKEN);

// Basic commands
bot.command("start", (ctx) => {
  ctx.reply(
    "Welcome to TaskVaultBot! 🚀\nUse /help to see available commands."
  );
});

bot.command("help", (ctx) => {
  ctx.reply(
    "Available commands:\n" +
      "/start - Start the bot\n" +
      "/help - Show this help message\n" +
      "/webapp - Open the Mini App"
  );
});

bot.command("webapp", (ctx) => {
  const chatId = ctx.chat.id;
  // Encode le chatId en base64
  const encodedGroupId = Buffer.from(chatId.toString()).toString("base64");

  console.log("Chat ID:", chatId);
  console.log("Encoded Group ID:", encodedGroupId);

  ctx.reply("Open Web App", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Open App",
            url: `${config.WEBAPP_URL}?startapp=${encodedGroupId}`,
          },
        ],
      ],
    },
  });
});

bot.launch().then(() => {
  console.log("Bot is running...");
});

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
