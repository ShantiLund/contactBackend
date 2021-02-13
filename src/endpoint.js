const methods = require('./methods');
console.log(methods);
module.exports = [{
        url: "/api/v1/signUpUser",
        method: "post",
        execute: methods.userSignUp
    },
    {
        url: "/api/v1/loginUser",
        method: "post",
        execute: methods.userLogin
    },


    {
        url: "/api/v1/postContacts",
        method: "post",
        execute: methods.postContact

    },
    {
        url: "/api/v1/getAllContacts",
        method: "get",
        execute: methods.getAllContacts

    },
    {
        url: "/api/v1/updateContact",
        method: "post",
        execute: methods.updateContact

    },
    {
        url: "/api/v1/deleteContact",
        method: "post",
        execute: methods.deleteContact

    }
]