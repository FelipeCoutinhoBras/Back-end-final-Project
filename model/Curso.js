const {CursoModel}  = require('./bd')

module.exports = {
    novo: async (nome) => {
        return await CursoModel.create({nome: nome})
    },
    listatudo: async (id) => {
        return await CursoModel.findAll()
    },
    buscaPorId: async (id) => {
        return await CursoModel.findByPk(id)
    }
}