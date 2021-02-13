const mongoose = require("mongoose");
const mongodb = require("../../../Mongodb/db.connect").database;
const User = require("../../../Mongodb/models/user.model");

module.exports = async(email) => {
    const user = await User.find({ email: email })
    if (!user) {
        return {
            success: false,
            message: 'User not found'
        }
    } else {

        return user

    }



}