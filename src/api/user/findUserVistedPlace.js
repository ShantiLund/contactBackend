const mongoose = require("mongoose");
const mongodb = require("../../../Mongodb/db.connect").database;
const User = require('../../../Mongodb/models/user.model');
const getUserByEmail = require("../user/getUserByEmail");
var ObjectId = require('mongodb').ObjectId;
module.exports = async(email, place_id) => {

    console.log(place_id);

    const user = await User.findOne({ $and: [{ email: email }, { visted_places: ObjectId(place_id) }] });
    if (user) {
        return {
            success: false,
            message: "Place Already exsist!!!"
        }
    } else {
        return {
            success: true,
            message: "Add place"
        }
    }
}