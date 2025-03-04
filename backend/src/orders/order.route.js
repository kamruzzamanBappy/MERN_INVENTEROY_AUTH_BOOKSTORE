const express = require("express");


const router = express.Router();

const { createAOrder } = require('./order.controller');
//create order end point
router.post("/",createAOrder)

module.exports = router;