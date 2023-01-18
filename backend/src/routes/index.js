const { Router } = require("express");
const registration = require("./registration.routes.js");

const routes = Router();

routes.use("/cadastro", registration);

module.exports = routes;