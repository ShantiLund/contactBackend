const express = require("express");
require('dotenv').config({ path: '.env' });
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const morgan = require("morgan");
const config = require('./src/serverConfig');
const endPoints = require("./src/endpoint");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, x-auth-user, x-amz-meta-fieldname,x-auth-token,brand-folder"
    );
    next();
});

for (const endpoint of endPoints) {
    console.log(endpoint)
    const { execute, method, url } = endpoint;

    app[method](url, async(req, res) => {
        let json = {};
        try {
            json = {
                status: 200,
                data: await execute(req)
            };


        } catch (error) {
            console.log(error);
            const { status = 500, statusText = "Internal server error" } =
            error.response || {};

            json = {
                code: status,
                error: statusText,
            };
        } finally {
            return res.json(json);
        }
    });
}
const { port, host } = config.server;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});