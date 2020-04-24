
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});

const Discord = require("discord.js");
const settings = require("./config.json"); 
     var prefix = "";
client.on('ready', async () => {

let AxG = ['كتفم علي”',
    , 'كتفم علي']

  setInterval(() => {
client.guilds.get(serverid).channels.get(roomid).send(`${AxG[Math.floor(Math.random() *AxG.length)]}`);
},1000);
});
