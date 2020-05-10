const express = require("express");
const router = express.Router();

const userController = new (require('../controllers/userController'));


router.post("/registration", userController.add)
router.post("/login", userController.login)


module.exports = router;