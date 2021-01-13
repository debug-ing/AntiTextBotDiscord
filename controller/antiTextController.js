const antiTextModel = require('../model/antiTextModel.js');
var antiTextController = {
    addTexts: function (mysql,id,text,callback) {
        antiTextModel.adds(mysql,id,text,function (data) {
            callback(data);
        });
    },
    addText:function(mysql,id,text,callback){
        antiTextModel.add(mysql,id,text,function (data) {
            callback(data);
        });
    },updateText:function (mysql,id,text,callback) {

    },
    getText:function (mysql,id,callback) {
        antiTextModel.get(mysql,id,function (data) {
            callback(data);
        });
    }
}
module.exports = antiTextController;