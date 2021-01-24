const Discord = require('discord.js');
const mysql = require('mysql');
const connection = require('./utils/connection.js');
const channelController = require('./controller/channelController.js');
const antiTextController = require('./controller/antiTextController.js');
const messageController = require('./controller/messageController.js');

const Client = new  Discord.Client();
var mysqlcon;
var cars = ["koskesh", "jende", "kir", "kos", "haromi", "lashi", "pedarsag", "nane kose", "khaharjende", "khaharkose", "tulesag", "madaratgaidam", "sag", "kiri", "koni", "kon", "bibijende", "gaidam", "bibi", "tole", "nagaidam", "madarsag", "madar", "koskhol", "periud", "gushad", "کیری", "کصکش", "کسکش", "جنده", "کیر", "کص", "حرومی", "لاشی", "پدرسگ", "ننه جنده", "خواهر جنده", "خواهر کصه", "توله سگ", "مادرت گاییدم", "سگ", "کونی", "کون", "بی بی جنده", "گاییدم", "بی بی", "توله", "نگاییدم", "مادرسگ", "مادر", "کصخل", "کسخل", "پریود", "گشاد"];
var s = 0;
var key = "#";

Client.once('ready', () => {
    connection.create(function(db) {
        mysqlcon = db;
        console.log('Iam ready');
        Client.user.setActivity("All Messages" , {type : "WATCHING"});
    });
});

Client.on('message', msg => {
    if (msg.channel.type !== 'text' || msg.author.bot)
        return;
    if (!msg.content.startsWith(key))
        messageController.messageChecker(connection,msg.content);
        return;
    let command = msg.content.split(' ')[0].slice(1);
    let args = msg.content.replace('.' + command, '').trim();
    console.log(command);
    var replace =key+command;
    switch (command) {
        case 'start': {
            channelController.start(mysqlcon,msg.guild.id,msg.guild.name,1,0,function (data) {
                msg.channel.send(data);
            });
            break;
        }
        case 'stop': {
            channelController.stop(mysqlcon,msg.guild.id,function (data) {
                msg.channel.send(data);
            });
            break;
        }
        case "info":{
            channelController.info(mysqlcon,msg.guild.id,function (data) {
                msg.channel.send(data);
            });
            break;
        }
        case "words":{
            antiTextController.getText(mysqlcon,msg.guild.id,function (data) {
                msg.channel.send(data);
            });
            break;
        }
        case "ping": {
            msg.reply(`🏓Latency is ${Date.now() - msg.createdTimestamp}ms. API Latency is ${Math.round(Client.ws.ping)}ms`);
            break;
        }
        case "uptime":{
            let days = Math.floor(Client.uptime / 86400000);
            let hours = Math.floor(Client.uptime / 3600000) % 24;
            let minutes = Math.floor(Client.uptime / 60000) % 60;
            let seconds = Math.floor(Client.uptime / 1000) % 60;
            msg.reply(`__Uptime:__\n${days}d ${hours}h ${minutes}m ${seconds}s`);
            break;
        }
        case "help":{

            break;
        }
        default: {
            messageController.messageChecker(connection,msg.content);
            msg.reply("Command Not Found. You Can Show Commands With " + key+"help");
        }

    }
    /*
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
    }else if (msg.content.includes(key + "config")) {
        if (msg.member.hasPermission('ADMINISTRATOR')){
            var id = msg.content.split(' ')[1];
            var roleId = id.replace('<@&', '').replace('>', '');
            rolesController.config(mysqlcon,msg.guild.id,roleId,function (data) {
                msg.channel.send(data);
            });
        }else{
            msg.channel.send("your are not a admin :x:");
        }
    }else if(msg.content.includes(key + "addAdmin")){
        if (msg.member.hasPermission('ADMINISTRATOR')){
            var id = msg.content.split(' ')[1];
            var roleId = id.replace('<@&', '').replace('>', '');
            rolesController.addRoles(mysqlcon,msg.guild.id,roleId,function (data) {
                msg.channel.send(data);
            });
        }else{
            msg.channel.send("your are not a admin :x:");
        }
    }else if(msg.content === key + "ping"){
        msg.channel.send(`🏓Latency is ${Date.now() - msg.createdTimestamp}ms. API Latency is ${Math.round(Client.ws.ping)}ms`);
    }else if(msg.content === key + "uptime"){
        let days = Math.floor(Client.uptime / 86400000);
        let hours = Math.floor(Client.uptime / 3600000) % 24;
        let minutes = Math.floor(Client.uptime / 60000) % 60;
        let seconds = Math.floor(Client.uptime / 1000) % 60;
        msg.channel.send(`__Uptime:__\n${days}d ${hours}h ${minutes}m ${seconds}s`);
    } else{
        if (msg.member.hasPermission('ADMINISTRATOR')){
        }else{
            var data = msg.member.roles.cache.map(r => r.id);
            rolesController.checkMessage(mysqlcon,msg.guild.id,data,function (data) {
                if (data === true){
                }else {
                    for (var i = 0; i < cars.length; i++) {
                        var state = msg.content.includes(cars[i]);
                        if (state === false) {
                        } else {
                            Client.channels.cache.get(msg.channel.id).messages.fetch(msg.id).then(message => message.delete());

                            msg.channel.send("lotfaa az kalamat rakik estefase nakonid dar gheire in sorat ba shoma barkhord mishavad!");
                            return;
                        }
                    }
                }
            });

        }
    }
     */
});



Client.login('ODAyODg1NzM5NDgxMjY4MjY0.YA1vnQ.zhA83yJ3VzukbU9rNZy4rUVjdj4');

