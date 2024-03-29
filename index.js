const Discord = require("discord.js");
const Enmap = require("enmap");
const client = new Discord.Client();

const config = require("./config.json");
client.config = config;

const fs = require("fs");


console.log(`[Getting bot ready...]`)

client.on("ready", () => {
  console.log(`[Bot is online!]`)
})


client.on("ready", () => {
  client.user.setPresence({
    status: "online",
    activity: {
      name: "the hamster",
      type: "WATCHING"
    }
  })
});


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});


client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Command "${commandName}" successfully loaded.`);
    client.commands.set(commandName, props);
  });
});


client.login(config.token);