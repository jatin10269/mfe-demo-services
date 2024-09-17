const service = require("./user.service");

function validateUser(req, res, next) {
  const { userName, pwd } = req.body;
  response = service.validateUser(userName,pwd);
  if (!response) {
    return next({
      status: 403,
      message: `Invalid username pwd`,
    });
  }
  return res.json({data:response});
}
function getUserDetail(req, res, next) {
  const userId = req.params.user_id;
  if (userId) {
    response = service.getUserDetail(userId);
    if (!response) {
      return next({
        status: 400,
        message: `No user found`,
      });
    }
    return res.json({ data: response });
  } else {
    return next({
      status: 400,
      message: `No user id passed`,
    });
  }
}

module.exports = {
  validateUser,
  getUserDetail,
};
