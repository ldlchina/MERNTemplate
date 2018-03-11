var addRoute = function(options){
  if(!options.expressApp)
    return this;

  var expressApp = options.expressApp;
  var serverApp = options.serverApp;
  var userCtrl = serverApp.userController;
   
  /**********************************************************************/
  // Add the route implementation here
  /**********************************************************************/

  expressApp.post('/api/1.0/users/validate', function(req, res, next){
    console.log('post ==> /api/1.0/users/validate');

    userCtrl.login(req.body, function(err, data){
      if(err){
        next(err);
      }
      else{
        res.status(200).send(data);
      }
    });
  });

  expressApp.post('/api/1.0/users', function(req, res, next){
    console.log('post ==> /api/1.0/users');

    userCtrl.addUser(req.body, function(err, data){
      if(err){
        next(err);
      }
      else{
        res.status(200).send(data);
      }
    });
  });

  return this;
};


/**********************************************************************/
// Exports
/**********************************************************************/

module.exports = addRoute;