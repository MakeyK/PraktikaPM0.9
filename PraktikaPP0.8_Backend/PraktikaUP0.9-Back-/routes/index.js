const Router = require('express')
const routes = new Router()
const RequestController = require('../controllers/RequestController')
const UserController = require('../controllers/User')
const authMiddleware = require("../authMiddleware")

routes.post('/registration', UserController.registration)
routes.post('/login', UserController.login)
routes.delete('/deleteuser', UserController.DelId)

routes.post('/req', authMiddleware, RequestController.createRequest)
routes.delete('/delrequest', authMiddleware, RequestController.DelId)
routes.get('/getrequest', authMiddleware, RequestController.getAllID)
routes.patch('/access', authMiddleware, RequestController.updateAccess)
routes.patch('/denied', authMiddleware, RequestController.updateDenied)
routes.get('/getall', authMiddleware, RequestController.getAll)



module.exports = routes