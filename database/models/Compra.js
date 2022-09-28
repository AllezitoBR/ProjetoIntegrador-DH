module.exports = (sequelize, DataTypes) => {

    const Compra = sequelize.define("Compra", {
        total: DataTypes.INTEGER,
        data: DataTypes.DATE,
        pago:DataTypes.TINYINT(1),
        enderecoEntrega:DataTypes.STRING,
        usuarios_id:DataTypes.INTEGER
        
    },
        {
            tableName: 'compra',
            timestamps: false
        })



        Compra.associate = (models) => {

            Compra.belongsToMany(models.Produto, {
                as: 'compra_produto',
                through: 'compra_has_produto',
                foreignKey: 'compra_id',
                otherKey: 'produto_id',
                timestamps: false
            })
    
            Compra.belongsTo(models.Usuario, {
                as: 'compra_usuario',
                foreignKey: 'usuarios_id'
            })
        }
    
    
        return Compra
    }

        /*Compra.associate = (models)=>{
         Compra.belongsToMany(models.Produto,{
            as:'compra_produto',
            through:'compra_has_produto',
            foreignKey:'compra_id',
            otherKey:'produto_id',
            timestamps: false
        })   
        }

        

        Compra.associate= (models)=>{
            Compra.belongsTo(models.Usuario,{
                as:'compra_usuario',
                foreignKey:'usuarios_id'
            })
        }   

    return Compra
}*/