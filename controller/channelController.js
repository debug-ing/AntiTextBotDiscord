const channelModel = require('../model/channelModel.js');
var channelController = {
    start: function (mysql,id,name,state,changeState,callback) {
        channelModel.check(mysql,id,function (data) {
            if (data === true){
                channelModel.checkChangeState(mysql,id,function (data) {
                    if (data === false){
                        callback("You Need Enable Bot From Admin Your Channel ID "+ id);
                    }else{
                        channelModel.startState(mysql,id,function (data) {
                            if (data === true){
                                callback("Bot Started");
                            }
                        })
                    }
                });
            }else{
                channelModel.add(mysql,id,name,state,changeState,function (data) {
                    callback("You Need Enable Bot From Admin Your Channel ID "+ data);
                });
            }
        });
    },
    stop:function (mysql,id,callback) {
        channelModel.stopState(mysql,id,function (data) {
            if (data === true){
                callback("Bot Stoped");
            }
        });
    },
    info:function (mysql,id,callback) {
        channelModel.get(mysql,id,function (data) {
            callback(data);
        });
    },
    delete:function(mysql,id,callback) {

    },
    getAll:function (mysql,callback) {

    },

}
module.exports = channelController;