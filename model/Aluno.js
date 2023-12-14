const { DataTypes } = require("sequelize")
const sequelize = require("../helpers/db")
 
const AlunoModel = sequelize.define('Aluno', {
    ra: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

module.exports = {
    lista: async function () {
        const aluno = await AlunoModel.findAll()
        return aluno
    },

    salva: async function (nome) {
        const alunonovo = await AlunoModel.create({nome: nome})
        return alunonovo
    },

    atualiza: async function(nome, novonome) {
        const alunoatualizado = await AlunoModel.update(
            {nome: novonome},
            {where: {nome: nome}}
        )
        return alunoatualizado
    },

    atualizaPorID: async function(nome, id) {
        return await AlunoModel.update(
            {nome: nome}, 
            {where: {ra: id}}
        )
    },

    deleta: async function(nome) {
        return await AlunoModel.destroy({where: {nome: nome}})
    },

    deletaPeloId: async function(id) {
        return await AlunoModel.destroy({where: {ra: id}})
    },

    buscaPeloId: async function(id) {
        return await AlunoModel.findByPk(ra)
    },
    buscaPorNome: async function(nome) {
        return await AlunoModel.findOne({where: {nome: nome}})
    },

    model: AlunoModel
}