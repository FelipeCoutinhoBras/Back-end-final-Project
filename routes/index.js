var express = require('express');
var router = express.Router();

const {sequelize} = require('../model/bd')

/* GET home page. */
router.get('/install', async function(req, res, next) {
  await sequelize.sync({force: true})
  res.json({msg: "Instalado com sucesso!"});
});

module.exports = router;
