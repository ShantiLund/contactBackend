const mongoose = require("mongoose");
const mongodb = require("../../../Mongodb/db.connect").database;
const Contacts = require("../../../Mongodb/models/contacts.model");

module.exports = async(email) => {
    const contact = await Contacts.find()
    if (!contact) {
        return {
            success: false,
            message: 'Contact not found'
        }
    } else {

        return contact

    }



}