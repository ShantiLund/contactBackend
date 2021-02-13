const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    ContactNumber: {
        type: String,
        required: true,
        trim: true
    }


})


const Contacts = mongoose.model('Contacts', contactSchema);
module.exports = Contacts