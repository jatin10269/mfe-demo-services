const service = require("./product.service");

function list(req, res, next) {
  response = service.list();
  if (response.length === 0) {
    return next({
      status: 400,
      message: `No products found`,
    });
  }
  return res.json(response);
}
function getProductDetail(req, res, next) {
  const productId = req.params.product_id;
  if (productId) {
    response = service.getProductDetail(productId);
    if (!response) {
      return next({
        status: 400,
        message: `No product found`,
      });
    }
    return res.json({ data: response });
  } else {
    return next({
      status: 400,
      message: `No product id passed`,
    });
  }
}

module.exports = {
  list,
  getProductDetail,
};
