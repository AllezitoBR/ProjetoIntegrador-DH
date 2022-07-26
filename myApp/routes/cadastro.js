var express = require('express');
var router = express.Router();


/*rota para a página cadastro*/
router.get('/cadastro', function(req, res) {
  res.send('respond with a resource');
});

/*criar a rota post para envio do formulário de cadastro*/

module.exports = router;
