const data = require("../data/products.json");
function list() {
  return data;
}
function getProductDetail(id){
  return data.products.find(item=>item.id==id);
}
module.exports = {
  list,
  getProductDetail
};
