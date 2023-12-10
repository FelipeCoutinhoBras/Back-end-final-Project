var express = require('express');
var router = express.Router();

const sequelize = require('../model/bd')

/* GET home page. */
router.get('/', async function(req, res, next) {
  await sequelize.sync()
  res.json({msg: "Hello World!"});
});

module.exports = router;
