const crypto = require("crypto");

module.exports = {
    MD5_KEY:"hfafjlkanvauof_2453421@31*&*",
    md5:function (str) {
        let obj = crypto.createHash("md5");
        obj.update(str);
        return obj.digest("hex");
    },
};