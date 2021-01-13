var roles = ["kos", "kir", "kon"];
var rolesController = {
    check:async function (msg,callback) {
        if(msg.member.roles.cache.some(role => role.name === "IDI") === true){
            callback(true);
        }else{
            callback(false);
        }
    },
    add:function (name,callback) {
        roles.join(name);
        callback(true);
    },
    remove:function (name,callback) {
        var found = roles.indexOf(name);
        if (found !== -1){
            roles.splice(found, 1);
            callback(true);
        }else{
            callback(false);
        }
    },
    deleteRolesUser:function (msg,name,callback) {

    },
    addRolesUser:function (key,callback) {

    }
}
module.exports = rolesController;