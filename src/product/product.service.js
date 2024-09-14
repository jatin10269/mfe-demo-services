const products = require("../data/products.json");
function list() {
  return products;
}
function getProductDetail(id){
  return products.data.find(item=>item.id==id);
}
module.exports = {
  list,
  getProductDetail
};
