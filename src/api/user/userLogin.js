const mongoose = require("mongoose");
const mongodb = require("../../../Mongodb/db.connect").database;
const decryptPassword = require("../auth/decryptPassword");
const User = require('../../../Mongodb/models/user.model');
const getUserByEmail = require("../user/getUserByEmail");
module.exports = async(request) => {

    let { email, password } = request.body;
    console.log(request.body);
    const result = await getUserByEmail(email);
    console.log(result);
    if (result) {
        const userPassword = result[0].password;
        const isPasswordMatch = await decryptPassword(password, userPassword);
        if (isPasswordMatch) {
            return {
                success: true,
                message: "Authentication Success",
                email: result[0].email
            }
        } else {
            return {
                success: false,
                message: "Password incorrect"
            }
        }
    }










}