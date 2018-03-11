var util = require('./util.js');
var path = require('path');
var fs = require('fs');


var PathManager = function(){};

PathManager.serverDataDir = function(){
  var dir = path.normalize('server_data');
  if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  return dir;
};

PathManager.usersDir = function(){
  var dir = path.join(PathManager.serverDataDir(), 'users');
  if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  return dir;
};

PathManager.userDir = function(userId){
  var dir = path.join(PathManager.usersDir(), userId);
  if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  return dir;
};

module.exports = PathManager;