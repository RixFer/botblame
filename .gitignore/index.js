const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("BotBlame, b!help");
    console.log("Le bot a bien ete connecte");
});

bot.login("NDIwMzI0OTAyMjc3NDgwNDUy.DX9BmA.gFknq2JALCk9JomqQ-tkSY7By0U");
