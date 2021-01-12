const Discord = require('discord.js');
const Client = new  Discord.Client();
var cars = ["koskesh", "jende", "kir", "kos", "haromi", "lashi", "pedarsag", "nane kose", "khahar jende", "khahar kose"];

var s = 0;

//


Client.once('ready', () => {
    console.log('Iam ready');
});

Client.on('message', msg => {
    if(msg.content === "start") {
        if(msg.member.roles.cache.some(role => role.name === 'IDI') === true){
            s = 1;
            msg.channel.send('bot is started');
        }
    }else if (msg.content === "stop") {
        if(msg.member.roles.cache.some(role => role.name === 'IDI') === true){
            s = 0;
            msg.channel.send('bot is Stoped');
        }
    }else{
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



Client.login('');

