const express = require("express");
const { checkoutController } = require("../controllers/controller");

const route = express.Router();

route.post('/checkout',checkoutController)


module.exports = route ;