var path = require("path");

var addRoute = function(options){
  if(!options.expressApp)
    return this;

  var expressApp = options.expressApp;
   
  /**********************************************************************/
  // Add the route implementation here
  /**********************************************************************/

  expressApp.get('*', function(req, res, next){
    console.log('get ==> *');

    res.sendFile(path.resolve(__dirname, '../../public', 'index.html'));
  });

  return this;
};


/**********************************************************************/
// Exports
/**********************************************************************/

module.exports = addRoute;