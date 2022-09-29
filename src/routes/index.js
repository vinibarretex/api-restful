const router = require('express').Router()

// VERBOS HTTP - (4 TIPOS)
// GET - obter dados
// POST - enviar/receber dados
// PUT - atualizar dados
// DELETE - remover dados

const ProductsController = require('../controllers/products')

// parametro id é opcional 
router.get('/products/:id?', ProductsController.get)

router.post('/products', ProductsController.post)
router.put('/products/:id', ProductsController.put)
router.delete('/products/:id', ProductsController.remove)

module.exports = router