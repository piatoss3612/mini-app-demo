import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

export const config = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  MINI_APP_LINK: process.env.MINI_APP_LINK,
};
