var userModelFactory = require('../models/user_models.js');
var util = require('../util.js');
var pathManager = require('../path_manager.js');
var fs = require('fs');
var path = require('path');

/**
* @constructor
* @class UserController
* @param {Object} options
*    databaseAccessor - the database accessor
*/
var UserController = function (options) {

  // Memory storage
  options = options || {};
  this.databaseAccessor_ = options.databaseAccessor;
};

UserController.prototype.errorList = {
  'NullStrings': 'NullStrings',
  'SignupPasswordsUnsame': 'SignupPasswordsUnsame',
  'SignupEmailExists': 'SignupEmailExists',
  'AccountNotExists': 'AccountNotExists',
  'WrongPassword': 'WrongPassword',
  'InvalidUserId': 'InvalidUserId'
};

UserController.prototype.addUser = function (options, cb) {
  options = options || {};
  var self = this;

  if (options.email == '' || options.firstname == '' || options.lastname == '' || options.password == '') {
    cb(new Error(self.errorList.NullStrings));
    return;
  }

  var queryObject = {};
  queryObject.email = options.email;

  self.databaseAccessor_.query("USER", queryObject, function (err, user) {
    if (err || user) {
      if (err) {
        cb(err);
      }
      else {
        cb(new Error(self.errorList.SignupEmailExists));
      }
    }
    else {
      var newUser = userModelFactory.secureUserModel(options);
      newUser.password = util.hash(newUser.password);

      self.databaseAccessor_.insert("USER", newUser, cb);
    }
  });
};

UserController.prototype.login = function (options, cb) {
  options= options || {};
  var self = this;

  if (options.email == '' || options.password == '') {
    cb(new Error(self.errorList.NullStrings));
    return;
  }

  var queryObject = {};
  queryObject.email = options.email;

  self.databaseAccessor_.query("USER", queryObject, function (err, user) {
    if (err || !user) {
      if (err) {
        cb(err);
      }
      else {
        cb(new Error(self.errorList.AccountNotExists));
      }
    }
    else {
      var psw = util.hash(options.password);
      if (user.password != psw) {
        cb(new Error(self.errorList.WrongPassword));
      }
      else {
        user = userModelFactory.apiUserModel(user);
        cb(null, user);
      }
    }
  });
};

UserController.prototype.userById = function (id, cb) {
  var self = this;

  if (!id || id == '') {
    cb(new Error(self.errorList.InvalidUserId));
    return;
  }

  var queryObject = {};
  queryObject.id = id;

  self.databaseAccessor_.query("USER", queryObject, function (err, user) {
    if (err || !user) {
      cb(util.internalErr());
    }
    else {
      user = userModelFactory.apiUserModel(user);
      cb(null, user);
    }
  });
};

var createUserController = function (options) {
  return new UserController(options);
};

module.exports = createUserController;