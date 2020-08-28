let router = require('express').Router();
let PagesController = require('../controllers/PagesController');
let bodyParser = require('body-parser');
let urlendecodedParser = bodyParser.urlencoded({ extended: true});


router.get('/', PagesController.homepage);

router.get('/about-us', PagesController.about);

router.get('/products/create', PagesController.crear);

router.get('/crear-producto', PagesController.crear);

router.get('/products/:id', PagesController.producto);

router.get('/products/:id/edit', PagesController.editar);

router.post('/products', urlendecodedParser, PagesController.store);

router.put('/products/:id', urlendecodedParser, PagesController.update);

router.delete('/products/:id', PagesController.delete);






module.exports = router;

