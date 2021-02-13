const userSignUp = require('./user/userSignUp');
const userLogin = require('./user/userLogin');
const postContact = require('./contacts/postContacts');
const getAllContacts = require('./contacts/getAllContacts')
const updateContact = require('./contacts/updateContacts');
const deleteContact = require('./contacts/deleteContacts');

module.exports = {
    userSignUp,
    userLogin,
    postContact,
    getAllContacts,
    updateContact,
    deleteContact
};