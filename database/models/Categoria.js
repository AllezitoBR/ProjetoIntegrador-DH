module.exports = (sequelize, DataTypes) => {

    const Categoria = sequelize.define("Categoria", {
        descricao: DataTypes.STRING,
        departamento_id:DataTypes.INTEGER


    },
        {
            tableName: 'categorias',
            timestamps: false
        })
        Categoria.associate = (models)=>{
         Categoria.belongsTo(models.Departamento,{
                as:'categoria_departamento',
                foreignKey:'departamento_id'
        })   
        }


        Categoria.associate = (models)=>{

            Categoria.hasMany(models.Produto,{
                as:'categoria_produto',
                foreignKey:'categoria_id'
    
            })
    
        }

        

    return Categoria
}