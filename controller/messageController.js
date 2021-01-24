var messageController = {
    messageChecker: function (mysql,msg) {
        messageController.messageFromAdmin(msg,function (state) {
            if (state === true){
            }else{

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