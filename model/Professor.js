const { DataTypes } = require("sequelize")
const sequelize = require("../helpers/db")
 
const ProfessorModel = sequelize.define('Professor', {
    ra: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = {
    lista: async function () {
        return await ProfessorModel.findAll()
   },

   salva: async function (nome) {
        return await ProfessorModel.create({nome: nome})
   },

   atualiza: async function(nome, novonome) {
        return await ProfessorModel.update(
            {nome: novonome},
            {where: {nome: nome}}   
        )
    },

    atualizaPorID: async function(nome, id) {
        return await ProfessorModel.update(
            {nome: nome}, 
            {where: {ra: id}}
        )
    },

    delete: async function(nome) {
        return await ProfessorModel.destroy({where: {nome: nome}})
    },

    deletePeloId: async function(id) {
        return await ProfessorModel.destroy({where: {ra: id}})
    },

    buscaPeloId: async function(ra) {
        return await ProfessorModel.findByPk(ra)
    },
    
    buscaPeloNome: async function(nome) {
        return await ProfessorModel.findOne({where: {nome: nome}})
    },

    model: ProfessorModel
}