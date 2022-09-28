module.exports = (sequelize, DataTypes) => {

    const Endereco = sequelize.define("Endereco", {
        rua: DataTypes.STRING,
        numero: DataTypes.STRING,
        complemento: DataTypes.STRING,
        cep: DataTypes.INTEGER,
        bairro: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING,
        usuarios_id: DataTypes.INTEGER
    },
        {
            tableName: 'enderecos',
            timestamps: false
        })

        Endereco.associate= (models)=>{
            Endereco.belongsTo(models.Usuario,{
                as:'endereco_usuario',
                foreignKey:'usuarios_id'
            })
        }   

        
    return Endereco
}