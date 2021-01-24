const rolesController = require('./rolesController.js');

var messageController = {
    messageChecker: function (mysql,msg) {
        messageController.messageFromAdmin(msg,function (state) {
            if (state === true){
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
                                msg.reply("lotfaa az kalamat rakik estefase nakonid dar gheire in sorat ba shoma barkhord mishavad!");
                                return;
                            }
                        }
                    }
                });
            }
        });
    },
    messageFromAdmin: function (msg,callback) {
        if (msg.member.hasPermission('ADMINISTRATOR')){
            callback(true);
        }else{
            callback(false);
        }
    }
}
module.exports = messageController;