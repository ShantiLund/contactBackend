const mongoose = require("mongoose");
const mongodb = require("../../../Mongodb/db.connect").database;
const Contacts = require('../../../Mongodb/models/contacts.model');

module.exports = async(request) => {

    let { body } = request;

    const contact = new Contacts(body);

    await contact.save();

    return {
        success: true,
        message: "New Contact  Added ",

    };
}