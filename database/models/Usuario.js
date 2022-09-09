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


  /*        Usuario.associate = (models)=>{
            Usuario.hasMany(models.Endereco,{
                as:'usuario_endereco',
                foreignKey:'usuarios_id'
            })
    
        }  */
    return Usuario
}