const moment = require('moment');

var channelModel = {
    add: function (db,id,name,state,changeState,callback) {
        var sql = 'INSERT INTO channels (id,name,state,changeState,create_at,update_at) VALUES (?,?,?,?,?,?)';
        db.query(sql,[id,name,state,changeState,moment().format("YYYY-MM-DD HH:mm:ss"),moment().format("YYYY-MM-DD HH:mm:ss")], function (err, result, fields) {
            if (err) throw err;
            callback(id);
        });
    },
    delete:function(mysql,id,callback) {

    },
    getAll:function (mysql,callback) {

    },
    check:function (db,id,callback) {
        var sql = 'select id from channels where id=?';
        db.query(sql, [id],function (err, result, fields) {
            if (err) throw err;
            if (result.length === 0) {
                callback(false);
            }else{
                callback(true);
            }
        });
    },
    startState:function (db,id,callback) {
        var sql = "UPDATE channels SET state=?  WHERE id=?";
        db.query(sql,[1,id], function (err, result, fields) {
            if (err) throw err;
            callback(true)
        });
    },
    stopState:function(db,id,callback){
        var sql = "UPDATE channels SET state=?  WHERE id=?";
        db.query(sql,[0,id], function (err, result, fields) {
            if (err) throw err;
            callback(true)
        });
    },
    checkChangeState:function (db,id,callback) {
        var sql = 'select changeState from channels where id=?';
        db.query(sql, [id],function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            if (result[0].changeState === 0) {
                callback(false);
            }else{
                callback(true);
            }
        });
    },
    get:function (db,id,callback) {
        console.log(id);
        var sql = 'select * from channels where id=?';
        db.query(sql, [id],function (err, result, fields) {
            if (err) throw err;
            var active = "";
            if (result[0].changeState === 1) {
                active = "Active Channel";
            }else{
                active = "Disable Channel";
            }
            //
            var activev = "";
            if (result[0].state === 1) {
                activev = "Active Channel";
            }else{
                activev = "Disable Channel";
            }
            var data = "Server ID : " +  id + "\n" + "Channel Name : " + result[0].name + "\n"  + "Status Payment : " + active + "\n" + "State :  " + activev;
            callback(data);
        });
    }
}
module.exports = channelModel;