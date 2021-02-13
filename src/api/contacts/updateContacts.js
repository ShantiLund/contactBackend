const mongoose = require("mongoose");
var ObjectId = require('mongodb').ObjectId;
const mongodb = require("../../../Mongodb/db.connect").database;
const Contacts = require("../../../Mongodb/models/contacts.model");

module.exports = async(request) => {
    let { body } = request;
    const contact = await Contacts.findOneAndUpdate({ _id: ObjectId(body.id) }, {
        name: body.name,
        ContactNumber: body.ContactNumber
    });
    if (!contact) {
        return {
            success: false,
            message: "Cann't Update!!"
        };

    } else {
        return {
            success: true,
            message: "Updated Sucessfully!!"
        };
    }
}