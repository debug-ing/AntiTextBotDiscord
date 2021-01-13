const channelModel = require('../model/rolesModel.js');
var rolesController = {
    config: function (mysql,id,roles_id,callback) {
        channelModel.config(mysql,id,roles_id,function (data) {
            callback(data);
        });
    },
    addRoles:function (mysql,id,roles_id,callback) {
        channelModel.addRoles(mysql,id,roles_id,function (data) {
            callback(data);
        });
    },
    checkMessage:function (mysql,server_id,roles,callback) {
        channelModel.getRoles(mysql,server_id,function (data) {
            for (var i = 0; i < roles.length;i++){
                var id = roles[i];
                console.log(id);
                for (var j = 0; j < data.length;j++){
                    console.log(data[j].roles_id);
                    if (data[j].roles_id === id){
                        console.log("ko");
                        callback(true);
                        return;
                    }
                }
            }
            callback(false);
            return;
        });
    }

}
module.exports = rolesController;