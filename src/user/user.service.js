const data = require("../data/user.json");
function list() {
  return data;
}
function getUserDetail(userId){
  return data.users.find(user=>user.userId==userId);
}
function validateUser(userName,pwd){
  return data.users.find(user=>user.userName===userName&&user.pwd===pwd);
}
module.exports = {
  validateUser,
  getUserDetail
};
