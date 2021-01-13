const config = require('../utils/config.js');
const createConnection = require("mysql").createConnection;

var connectionVar;
var connection = {
    create: function (callback) {
        connectionVar = createConnection(config.databaseOptions);
        connectionVar.connect(function(err) {
            if (err) throw err;
            callback(connectionVar);
        });
    },
    get:function (callback) {
        callback(connectionVar);
    }
}

module.exports = connection;