const {AlunoModel}  = require('./bd')

module.exports = {
    novo: async (nome, curso) => {
        return await AlunoModel.create({nome: nome}, {CursoId: curso})
    },
    listatudo: async (id) => {
        return await AlunoModel.findAll()
    },
    buscaPorId: async (id) => {
        return await AlunoModel.findByPk(id)
    }
}