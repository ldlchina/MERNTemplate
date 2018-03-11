var util = require('../util.js');

var UserModelFactory = function () {};

UserModelFactory.secureUserModel = function (options) {
  options = options || {};
  var id = options.id || util.generateGUID();

  return {
    "type": "user",
    "id": id,
    "email": options.email,
    "userName": options.userName,
    "password": options.password
  };
};

UserModelFactory.apiUserModel = function (options) {
  options = options || {};

  return {
    "type": "user",
    "id": options.id,
    "email": options.email,
    "userName": options.userName
  };
};


module.exports = UserModelFactory;