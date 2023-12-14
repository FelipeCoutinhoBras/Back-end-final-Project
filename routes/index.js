var express = require('express');
var router = express.Router();

const {sequelize} = require('../model/bd')
const AlunoService = require('../model/Aluno')
const CursoService = require('../model/Curso')
const ProfessorService = require('../model/Professor')

/* GET home page. */
router.get('/install', async function(req, res, next) {
  await sequelize.sync({force: true})
  let aluno = await AlunoService.novo("Jose", "Fisica")

  res.json({msg: "Instalado com sucesso!", aluno: aluno});
});


module.exports = router;
