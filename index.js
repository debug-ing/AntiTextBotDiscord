const Discord = require('discord.js');
const mysql = require('mysql');
const connection = require('./utils/connection.js');
const channelController = require('./controller/channelController.js');
const antiTextController = require('./controller/antiTextController.js');
const Client = new  Discord.Client();
<<<<<<< HEAD
var mysqlcon;
var cars = ["kos", "kir", "kon"];
=======
var cars = ["koskesh", "jende", "kir", "kos", "haromi", "lashi", "pedarsag", "nane kose", "khahar jende", "khahar kose"];

>>>>>>> 9a6de2b6812db1c13c0b07d8dafe0f9092a5f44b
var s = 0;
var key = "$";

Client.once('ready', () => {
    connection.create(function(db) {
        mysqlcon = db;
        console.log('Iam ready');
    });
});

Client.on('message', msg => {
    if(msg.content ===  key + "start") {
        channelController.start(mysqlcon,msg.guild.id,msg.guild.name,1,0,function (data) {
            msg.channel.send(data);
        });
    }else if (msg.content === key + "stop") {
        channelController.stop(mysqlcon,msg.guild.id,function (data) {
            msg.channel.send(data);
        });
    }else if (msg.content === key + "info") {
        channelController.info(mysqlcon,msg.guild.id,function (data) {
            msg.channel.send(data);
        });
    }else if (msg.content === key + "words"){
        antiTextController.getText(mysqlcon,msg.guild.id,function (data) {
            msg.channel.send(data);
        });
    }else if (msg.content.includes(key + "addWords")){
        var data = msg.content.split(' ');
        antiTextController.addTexts(mysqlcon,msg.guild.id,data[1],function (data) {
            msg.channel.send(data);
        });
    }else if (msg.content.includes(key + "addWord")){
        var data = msg.content.split(' ');
        antiTextController.addText(mysqlcon,msg.guild.id,data[1],function (data) {
            msg.channel.send(data);
        });
    } else{
        if(msg.member.roles.cache.some(r => r.name === "IDI")){
        }else{
            if(s === 1){
                for(var i = 0 ; i <cars.length;i++){
                    var state = msg.content.includes(cars[i]);

                    if(state === false){

                    }else{
                        msg.channel.send("lotfaa az kalamat rakik estefase nakonid dar gheire in sorat ba shoma barkhord mishavad!");
                        return;
                    }
                }
            }else{
            }
        }
    }
    
});



Client.login('Nzk3NTQwNjUyOTg0MDQxNTIz.X_n9nQ.AwG1rzj8x7wVdg98r0McEks9tkc');

