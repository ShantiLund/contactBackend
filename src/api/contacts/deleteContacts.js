const mongoose = require("mongoose");
var ObjectId = require('mongodb').ObjectId;
const mongodb = require("../../../Mongodb/db.connect").database;
const Contacts = require("../../../Mongodb/models/contacts.model");

module.exports = async(request) => {
    let { body } = request;
    const contact = await Contacts.findOneAndRemove({ _id: ObjectId(body.id) });
    if (!contact) {
        return {
            success: false,
            message: "no deleted "
        };

    } else {
        return {
            success: true,
            message: "deleted Successfully!!"
        };
    }
}