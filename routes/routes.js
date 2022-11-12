const express = require('express')

const loginRoute = require('../login_jwtauth/login')
const foodRoute = require('../food-user/food')
const userRoute = require('../food-user/user')

const authMiddleware = require('../login_jwtauth/jwt_authentication')

const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        message: "food journal"
    });
});

router.post('/login', loginRoute.login)

router.get('/food', authMiddleware.isAuthenticate, foodRoute.listfood)
router.post('/food', authMiddleware.isAuthenticate, foodRoute.insertfood)
router.put('/food/:id', authMiddleware.isAuthenticate, foodRoute.updatefood)
router.delete('/food/:id', authMiddleware.isAuthenticate, foodRoute.deletefood)

router.get('/user', authMiddleware.isAuthenticate, userRoute.listuser)
router.post('/user', authMiddleware.isAuthenticate, userRoute.insertuser)
router.put('/user/:id', authMiddleware.isAuthenticate, userRoute.updateuser)
router.delete('/user/:id', authMiddleware.isAuthenticate, userRoute.deleteuser)

module.exports = router