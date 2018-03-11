var nconf = require('nconf');
var databaseAccessor = require('./database/database_accessor.js');


var ServerApplication = function () {

  // Load config settings.
  var config = nconf.argv().env().file({ file: __dirname + '/conf.json' });
  process.env.PORT = config.get('port');
  var serviceConf = config.get(config.get('build'));
  process.env.NODE_ENV = serviceConf.nodeEnv;

  // database
  var dba = databaseAccessor(serviceConf.db);

  this.userController = require('./controllers/user_controller.js')({ 'databaseAccessor': dba });
};

module.exports = new ServerApplication();