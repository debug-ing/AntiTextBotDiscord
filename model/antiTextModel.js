var antiTextModel = {
    adds: function (db,channel_id,texts,callback) {
        antiTextModel.check(db,channel_id,function (state) {
            if (state === false){

            }else{
                var sql = "UPDATE antiText SET texts=?  WHERE channel_id=?";
                db.query(sql,[texts,channel_id], function (err, result, fields) {
                    if (err) throw err;
                    callback("Updated");
                });
            }
        });
    },
    add:function (db,channel_id,text,callback) {
        antiTextModel.getForAdd(db,channel_id,function (data) {
            var sql = "UPDATE antiText SET texts=?  WHERE channel_id=?";
            db.query(sql,[data + ","+ text,channel_id], function (err, result, fields) {
                if (err) throw err;
                callback("Updated");
            });
        });
    },
    update:function (mysql,channel_id,texts) {

    },
    delete:function(mysql,id,callback) {

    },
    getAll:function (mysql,callback) {

    },
    check:function(db,id,callback){
        var sql = 'select * from antiText where channel_id=?';
        db.query(sql, [id],function (err, result, fields) {
            if (err) throw err;
            if (result.length === 0) {
                callback(false);
            }else{
                callback(true);
            }
        });
    },
    getForAdd:function(db,id,callback){
        var sql = 'select * from antiText where channel_id=?';
        db.query(sql, [id],function (err, result, fields) {
            if (err) throw err;
            if (result.length === 0) {
                callback("Not Words Add");
            }else{
                callback(result[0].texts);
            }
        });
    },
    get:function (db,id,callback) {
        var sql = 'select * from antiText where channel_id=?';
        db.query(sql, [id],function (err, result, fields) {
            if (err) throw err;
            if (result.length === 0) {
                callback("Not Words Add");
            }else{
                var words = "";
                var data = result[0].texts.split(",");
                for (var i = 0 ; i < data.length ; i++){
                    words = words + data[i] + "\n";
                }
                callback(words);
            }
        });
    }
}
module.exports = antiTextModel;