const fs = require('fs');

function LogSite(req, res, next){
    fs.appendFileSync('log.txt', 'usuario acessou: ' + req.url)

    next();
}

module.exports = LogSite;