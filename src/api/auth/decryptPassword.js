const bcrypt=require("bcryptjs");
const User=require("../../../Mongodb/models/user.model");

module.exports = async function (password,userPassword) {
 return await bcrypt.compare(password, userPassword);
 
}