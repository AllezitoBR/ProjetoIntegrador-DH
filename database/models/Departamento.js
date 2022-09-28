module.exports = (sequelize, DataType) => {
    const Departamento = sequelize.define("Departamento", {
       
        descricao:DataType.STRING,

                
    },{
        tablename:'departamentos',
        timestamps:false
    })

    Departamento.associate = (models)=>{

        Departamento.hasMany(models.Categoria,{
            as:'departamento_categoria',
            foreignKey:'departamento_id'

        })

    }

  



        return Departamento
}