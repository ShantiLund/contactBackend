const mongoose = require("mongoose");
const mongodb = require("../../../Mongodb/db.connect").database;
const User = require('../../../Mongodb/models/user.model');
const getUserByEmail = require("../user/getUserByEmail");
const findUserVistedPlace = require("../user/findUserVistedPlace");
module.exports = async(email, place_id) => {
    const result = await findUserVistedPlace(email, place_id);
    console.log(result);
    if (result["success"]) {

        const user = await User.findOneAndUpdate({ email }, {
            $push: { visted_places: place_id }
        }, { new: true, useFindAndModify: false })
        if (user) {
            console.log("here");

            return {
                success: true,
                message: "user location Updated Sucessfully!!!"
            }
        }
    } else {
        return {
            success: false,
            message: "User location already exsist!!"
        }
    }

}