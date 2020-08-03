var express = require('express');


var router = express.Router();



/* GET index page */
router.get('/', function(req, res, next) {
  //Access URL attributes=>   req.query.codeObj
  res.render('index', { title: 'Express Quick start' });
});


/* GET index page: with data */
router.get('/:pathname', function(req, res, next) {
  //Access path parameters => req.params.pathname
  res.json({"Path": req.params.pathname });
});


/* POST to index page*/
router.post('/', function(req, res, next) {
  //Access POST data (Json value myData)=>  req.body.myData
  res.json(JSON.parse(req.body.myData));
});


module.exports = router;
