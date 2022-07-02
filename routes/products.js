const express = require('express')
const router = express.Router()
 const {getAllProducts,addProducts,getAllProductsStatic} = require('../controllers/products')


 router.route('/').get(getAllProducts).post(addProducts)
 router.get('/static',getAllProductsStatic)




module.exports = router