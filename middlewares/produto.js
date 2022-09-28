const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productController = require('../controllers/productController');


router.get('/:rota', productController.metodo);



/*router.get('/pratoFundo', productController.indexFundo); 
router.get('/pratoRaso', productController.indexRaso);
router.get('/pratoSobremesa', productController.indexSobremesa);
router.get('/sousplat', productController.indexSousplat);
router.get('/20Pecas', productController.index20Pecas); 
router.get('/30Pecas', productController.index30Pecas);
router.get('/42Pecas', productController.index42Pecas);
router.get('/bowls', productController.indexBowls);
router.get('/canecas', productController.indexCanecas); 
router.get('/petisqueiras', productController.indexPetisqueiras);
router.get('/pratoDeBolo', productController.indexPratoDeBolo);
router.get('/tigelas', productController.indexTigelas);
router.get('/travessas', productController.indexTravessas); 
router.get('/xicaraDeCafe', productController.indexXicaraDeCafe);
router.get('/xicaraDeCha', productController.indexXicaraDeCha);*/


module.exports = router;


