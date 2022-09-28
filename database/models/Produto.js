module.exports = (sequelize, DataTypes) => {

    const Produto = sequelize.define("Produto", {
        
        nome: DataTypes.STRING,
        preco:DataTypes.NUMBER,
        marca:DataTypes.STRING,
        qtdeEmEstoque:DataTypes.INTEGER,
        descricao: DataTypes.STRING,
        categoria_id:DataTypes.INTEGER


    },
        {
            tableName: 'produtos',
            timestamps: false
        })
        
        Produto.associate = (models)=>{
         Produto.belongsTo(models.Categoria,{
                as:'produto_categoria',
                foreignKey:'categoria_id'
        })   
        }

        Produto.associate = (models) => {
            Produto.belongsTo(models.Categoria, {
                as: 'produto_categoria',
                foreignKey: 'categoria_id'
            })
            Produto.hasMany(models.Imagem, {
                as: 'produto_imagem',
                foreignKey: 'produto_id'
            })
            Produto.belongsToMany(models.Compra, {
                as: 'produto_compra',
                through: 'compra_has_produto',
                foreignKey: 'produto_id',
                otherKey: 'compra_id',
                timestamps: false
            })
        }
        return Produto
    }

        /*Produto.associate = (models)=>{

            Produto.hasMany(models.Imagem,{
                as:'produto_imagem',
                foreignKey:'produto_id'
    
            })
    
        }
       
            Produto.associate = (models)=>{
                 Produto.belongsToMany(models.Compra,{
                    as:'produto_compra',
                    through:'compra_has_produto',
                    foreignKey:'produto_id',
                    otherKey:'compra_id',
                    timestamps: false
                })   
                }

                
                     
        return Produto
            
        }*/

    
    
