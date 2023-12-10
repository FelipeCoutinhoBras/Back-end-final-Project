const {ProfessorModel}  = require('./bd')

module.exports = {
    novo: async (nome) => {
        return await ProfessorModel.create({nome: nome})
    },
    listatudo: async (id) => {
        return await ProfessorModel.findAll()
    },
    buscaPorId: async (id) => {
        return await ProfessorModel.findByPk(id)
    }
}