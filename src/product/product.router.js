const router = require("express").Router();
const controller = require("./product.controller");
router.route("/:product_id/details").get(controller.getProductDetail);
router.route("/search").get(controller.list);

module.exports = router;
