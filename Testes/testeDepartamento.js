const {sequelize, Departamento} = require('./database/models/index');


async function buscaDepartamentos(){
    const al = await Departamento.findAll();
    console.log(al.map(a=>a.toJSON()));
}




buscaDepartamentos();