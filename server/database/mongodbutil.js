const MongoClient = require('mongodb').MongoClient;

var mongodbutil = exports = module.exports;

/**
 * Open the input db's connection.
 *
 * @param param: including db url.
 * @return (db object)
 */
mongodbutil.opendb = function (param, callback) {
  MongoClient.connect(param.url, function (err, client) {
    if (err) {
      callback(err);
    }
    else {
      client.on("close", function (error) {

      });

      callback(null, client);
    }
  });
};

/**
 * close the input db's connection.
 * @param db: the target db.
 */
mongodbutil.shutdowndb = function (client) {
  client.close();
}

/**
 * insert doc to document
 * @param collection: collection object 
 * @param doc: the object to insert into db
 */
mongodbutil.insert = function (collection, doc, callback) {
  try {
    collection.insert(doc, callback);
  }
  catch (err) {
    if (typeof callback === 'function')
      process.nextTick(function () { callback(new Error('dabatase insert error')); });
  }
};

/**
 * remove item from db.
 * @param collection: collection object,
 * @param doc: the condition indicating which to remove.
 */
mongodbutil.remove = function (collection, doc, callback) {
  var cb = null;
  if (callback && typeof callback === 'function')
    cb = callback;

  try {
    collection.remove(doc, function (err, item) {
      if (cb)
        cb(err, item);
    });
  }
  catch (err) {
    if (cb)
      process.nextTick(function () { cb(new Error('dabatase reomve error')); });
  }
};

/**
 * update item from db.
 * @param collection: collection object, 
 * @param target: the condition indicating which to remove.
 * @param doc: indicate how to update
 * @param callback: callback function
 */
mongodbutil.update = function (collection, target, doc, callback) {
  var cb = null;
  if (callback && typeof callback === 'function')
    cb = callback;

  try {
    collection.update(target, { $set: doc }, { safe: true, multi: true }, function (err, num) {
      if (cb)
        cb(err, num);
    });
  }
  catch (err) {
    if (cb)
      process.nextTick(function () { cb(new Error('dabatase update error')); });
  }
};

/**
 * query item from db.
 * @param collection: collection object, 
 * @param object: the condition indicating how to query.
 * @param callback: callback function
 */
mongodbutil.query = function (collection, object, callback) {
  var cb = null;
  if (callback && (typeof callback === 'function'))
    cb = callback;

  if (cb) {
    try {
      collection.find(object).toArray(function (err, items) {
        cb(err, items);
      });
    }
    catch (err) {
      process.nextTick(function () { cb(new Error('dabatase query error')); });
    }
  }
};

/**
 * find one item from db.
 * @param collection: collection object, 
 * @param object: the condition indicating how to query.
 * @param callback: callback function
 */
mongodbutil.findOne = function (collection, object, callback) {
  var cb = null;
  if (callback && (typeof callback === 'function'))
    cb = callback;

  if (cb) {
    try {
      collection.findOne(object, function (err, item) {
        cb(err, item);
      });
    }
    catch (err) {
      process.nextTick(function () { cb(new Error('dabatase findOne error')); });
    }
  }
};

/**
 * find one item and modify it from db.
 * @param collection: collection object, 
 * @param object: the condition indicating how to query.
 * @param callback: callback function
 */
mongodbutil.findAndModify = function (collection, target, doc, callback) {
  var cb = null;
  if (callback && (typeof callback === 'function'))
    cb = callback;

  if (cb) {
    try {
      collection.findAndModify(target, [], { $set: doc }, function (err, item) {
        cb(err, item);
      });
    }
    catch (err) {
      process.nextTick(function () { cb(new Error('dabatase findAndModify error')); });
    }
  }
};



