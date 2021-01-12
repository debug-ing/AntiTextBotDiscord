const Discord = require('discord.js');
const Client = new  Discord.Client();
var cars = ["", "", ""];

var s = 0;

Client.once('ready', () => {
    console.log('Iam ready');
});

Client.on('message', msg => {
    if(msg.content == "start") {
        s = 1;
        msg.channel.send('bot is started');
    }else{
        if(s === 1){ 
            for(var i = 0 ; i <cars.length;i++){
                var state = msg.content.includes(cars[i]);
                
                if(state === false){
    
                }else{  
                    msg.channel.send("ff");
                    return;
                }
            }
        }else{
        }
         
    }
    
});



Client.login('teken');

