const { DataTypes } = require("sequelize")
const sequelize = require("../helpers/db")
 
const CursoModel = sequelize.define('Curso', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,

        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = {
   lista: async function () {
        return await CursoModel.findAll()
   },

   salva: async function (nome) {
        return await CursoModel.create({nome: nome})
   },

   atualiza: async function(nome, novonome) {
        return await CursoModel.update(
            {nome: novonome},
            {where: {nome: nome}}   
        )
    },

    atualizaPorID: async function(nome, id) {
        return await CursoModel.update(
            {nome: nome}, 
            {where: {id: id}}
        )
    },

    delete: async function(nome) {
        return await CursoModel.destroy({where: {nome: nome}})
    },

    deletePeloId: async function(id) {
        return await CursoModel.destroy({where: {id: id}})
    },

    buscaPeloId: async function(id) {
        return await CursoModel.findByPk(id)
    },
    
    buscaPeloNome: async function(nome) {
        return await CursoModel.findOne({where: {nome: nome}})
    },

    model: CursoModel
}