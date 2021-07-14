const { Router } = require("express");
const authController = require(".../controllers/authControllers");
const router = Router();
const auth = require("../middleware/auth");

router.post("/register", authController.signup);
router.post("/login", authController.login);
router.post("/user", authController.user);

module.exports = router;
