const router = require("express").Router();
const controller = require("./user.controller");
router.route("/:user_id/details").get(controller.getUserDetail);
router.route("").post(controller.validateUser);

module.exports = router;
