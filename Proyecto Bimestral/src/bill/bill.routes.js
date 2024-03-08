import { Router } from 'express';
import { saveBill, listBills, buy } from '../bill/bill.controller.js'
import { validateJwt, isAdmin} from '../../middlewares/validate-jwt.js'
const api = Router()




api.post('/saveBill', [validateJwt, isAdmin], saveBill)
api.get('/listBills', [validateJwt, isAdmin], listBills)
api.post('/buy', [validateJwt], buy)


export default api