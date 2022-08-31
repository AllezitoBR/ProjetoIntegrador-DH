module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define("Usuario", {
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        nome: DataTypes.STRING,
        cpf:DataTypes.INTEGER,
        rg:DataTypes.INTEGER,
        sexo: DataTypes.STRING,
        dataNascimento: DataTypes.DATE,
        telefones: DataTypes.STRING
    },
        {
            tableName: 'usuarios',
            timestamps: false
        })

/*         Endereco.associate = (models)=>{
            Endereco.belongsTo(models.Departamento,{
                as:'endereco_usuario',
                foreignKey:'departamento_id'
        })   
        } */
 
/*         Categoria.associate = (models)=>{

            Categoria.hasMany(models.Produto,{
                as:'categoria_produto',
                foreignKey:'categoria_id'
    
            })
    
        } */
    return Usuario
}