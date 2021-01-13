const moment = require('moment');

var rolesModel = {
    config: function (db,server_id,role_id,callback) {
        rolesModel.check(db,server_id,function (data) {
            if (data === false){
                var sql = 'INSERT INTO rolesAccess (channel_id,roles_id,is_owner,create_at,update_at) VALUES (?,?,?,?,?)';
                db.query(sql,[server_id,role_id,1,moment().format("YYYY-MM-DD HH:mm:ss"),moment().format("YYYY-MM-DD HH:mm:ss")], function (err, result, fields) {
                    if (err) throw err;
                    callback("Updated :white_check_mark: ");
                });
            }else{
                var sql = "UPDATE rolesAccess SET roles_id=?  WHERE channel_id=?";
                db.query(sql,[role_id,server_id], function (err, result, fields) {
                    if (err) throw err;
                    callback("Updated :white_check_mark: ");
                });
            }
        });
    },
    check:function (db,id,callback) {
        var sql = 'select id from rolesAccess where channel_id=?';
        db.query(sql, [id],function (err, result, fields) {
            if (err) throw err;
            if (result.length === 0) {
                callback(false);
            }else{
                callback(true);
            }
        });
    },
    addRoles:function(db,server_id,role_id,callback) {
        var sql = 'INSERT INTO rolesAccess (channel_id,roles_id,is_owner,create_at,update_at) VALUES (?,?,?,?,?)';
        db.query(sql,[server_id,role_id,0,moment().format("YYYY-MM-DD HH:mm:ss"),moment().format("YYYY-MM-DD HH:mm:ss")], function (err, result, fields) {
            if (err) throw err;
            callback("Updated :white_check_mark: ");
        });
    },
    getRoles:function (db,server_id,callback) {
        var sql = 'select roles_id from rolesAccess where channel_id=?';
        db.query(sql, [server_id],function (err, result, fields) {
            if (err) throw err;
            callback(result);
        });
    }

}
module.exports = rolesModel;