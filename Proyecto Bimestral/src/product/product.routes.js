'use strict'

import { Router } from 'express'
import { saveProduct, listProduct, deleteProduct, updateProduct, productNoStock, productSearchCategory, getTopSellingProduct, searchProductByName } from './product.controller.js'
import { validateJwt, isAdmin} from '../../middlewares/validate-jwt.js'

const api = Router()

api.post('/saveProduct',[validateJwt, isAdmin], saveProduct)
api.put('/updateProduct/:id',[validateJwt, isAdmin], updateProduct)
api.delete('/deleteProduct/:id',[validateJwt, isAdmin], deleteProduct)

api.get('/listProduct', listProduct)
api.get('/productNoStock', productNoStock)
api.get('/productSearchCategory/:id', productSearchCategory)
api.get('/getTopSellingProduct', getTopSellingProduct)
api.get('/searchProductByName', searchProductByName)

export default api