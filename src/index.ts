// normal imports that we need
import { Client, Message } from "discord.js";
import { connect as connect } from "mongoose";

// ENV
import "dotenv/config";
const ENVIRONMENT = process.env.ENVIRONMENT;
const DEV_BOT_TOKEN = process.env.BOT_TOKEN_DEV;
const BOT_TOKEN = process.env.BOT_TOKEN;

// some constants
const client = new Client();
const prefix = "!imp";

// Modules
import { postDocument } from "./modules/postDocument";
import { getDocument } from "./modules/getDocument";
import { saveMessages } from "./modules/saveMessages";
import { setApiToken } from "./modules/setApiToken";
import { help } from "./modules/help";

// Utilities
import { throwError } from "./utilities/throwError";
import { connectToDatabase } from "./utilities/connectToDatabase";

client.on("ready", () => {
  client.user?.setActivity(`${prefix} help | https://imperialb.in/`, {
    type: "PLAYING",
  });
  console.log("Online");
  connectToDatabase()
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("There was an error connecting to the database", `\n ${err}`);
    });
});

client.on("message", async (msg: Message) => {
  if (msg.channel.type == "dm" && !msg.author.bot) setApiToken(msg, client);
  if (msg.author.bot) return;
  if (msg.content.indexOf(prefix) !== 0) return;
  const command = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g)
    .shift()
    ?.toLowerCase();

  switch (true) {
    case command === "help" || command === "h":
      break;
    case command === "paste" ||
      command === "postcode" ||
      command == "post" ||
      command === "p" ||
      command === "create":
      break;
    case command === "save" || command === "savemessages" || command === "sm":
      break;
    case command === "getcode" ||
      command === "get" ||
      command === "g" ||
      command === "getdocument":
      break;
    case command === "setapi" ||
      command === "api" ||
      command === "setapitoken" ||
      command === "setup":
      break;
    default:
      throwError(msg, "Unknown command!");
      break;
  }
});

if (ENVIRONMENT === "DEVELOPMENT") {
  client.login(DEV_BOT_TOKEN);
  console.log("DEV TOKEN BEING USED!");
} else {
  client.login(BOT_TOKEN);
  console.log("PROD TOKEN BEING USED!");
}
