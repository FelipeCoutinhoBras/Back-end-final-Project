const {Sequelize, DataTypes, BelongsTo, HasMany} = require('sequelize')

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: './database.sqlite'
})

const DepartamentoModel = sequelize.define('Departamento', {
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

ProfessorModel.belongsTo(DepartamentoModel)
CursoModel.hasMany(AlunoModel)
CursoModel.belongsTo(DepartamentoModel) 
CursoModel.hasMany(ProfessorModel)


module.exports = {
    sequelize: sequelize,
    DepartamentoModel: DepartamentoModel,
    ProfessorModel: ProfessorModel,
    AlunoModel: AlunoModel,
    CursoModel: CursoModel
}