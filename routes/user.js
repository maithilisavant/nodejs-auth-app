const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const userController = require("../controllers/userController");

router.post("/signin", catchErrors(userController.login));
router.post("/signup", catchErrors(userController.register));

module.exports = router;
