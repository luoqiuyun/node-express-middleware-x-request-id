var shortid = require('shortid');
// To generate a unique ID, use shortid.generate()
function middleHandler(req, res, next) {
  var p = {
    "id": shortid.generate(),
    "timestamp": new Date().getTime(),
    "path": req.originalUrl
  };
  req.trace = p;
  
  next();
}

module.exports = middleHandler;