var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/product');

router.get('/test', product_controller.test);


router.post('/', product_controller.product_create);

router.get('/', product_controller.product_details);

router.put('/:id', product_controller.product_update);

router.delete('/:id', product_controller.product_delete);


module.exports = router;