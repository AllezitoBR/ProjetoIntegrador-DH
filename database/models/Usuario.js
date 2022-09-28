module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define("Usuario", {
       
        email:DataType.STRING,
        senha:DataType.STRING,
        nome:DataType.STRING,
        cpf:DataType.INTEGER,
        rg:DataType.INTEGER,
        sexo:DataType.STRING,
        dataNascimento:DataType.DATE,
        telefones:DataType.STRING

                
    },{
        tablename:'usuarios',
        timestamps:false
    })

    Usuario.associate = (models)=>{
        Usuario.hasMany(models.Endereco,{as:'usuario_endereco',foreignKey:'usuarios_id'})
    } 
    
        return Usuario
}