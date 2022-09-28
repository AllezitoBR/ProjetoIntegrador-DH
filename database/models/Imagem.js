module.exports = (sequelize, DataTypes) => {

    const Imagem = sequelize.define("Imagem", {
        url: DataTypes.STRING,
        produto_id:DataTypes.INTEGER


    },
        {
            tableName: 'imagem',
            timestamps: false
        })

        Imagem.associate = (models)=>{
         Imagem.belongsTo(models.Produto,{
                as:'imagem_produto',
                foreignKey:'produto_id'
        })   
        }

            

    return Imagem

}