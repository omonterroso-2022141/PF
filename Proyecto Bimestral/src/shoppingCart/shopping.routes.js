'use strict'

import { Router } from 'express'
import { shoppingCart} from './shopping.controll.js'
import { validateJwt} from '../../middlewares/validate-jwt.js'


let api = Router()

api.post('/shoppingCart/:id', [validateJwt], shoppingCart)

export default api