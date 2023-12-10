const {Sequelize, DataTypes, BelongsTo, HasMany} = require('sequelize')

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: './database.sqlite'
})
const CursoModel = sequelize.define('Curso', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

const ProfessorModel = sequelize.define('Professor', {
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
CursoModel.hasMany(AlunoModel)
CursoModel.hasMany(ProfessorModel)
AlunoModel.belongsTo(CursoModel)

module.exports = {
    sequelize: sequelize,
    ProfessorModel: ProfessorModel,
    AlunoModel: AlunoModel,
    CursoModel: CursoModel
}