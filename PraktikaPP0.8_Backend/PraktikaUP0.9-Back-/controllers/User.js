const { Sequelize } = require('../database')
const { User } = require('../models/model')
const ApiError = require('../ApiError')
const { Op } = require("sequelize");
const jwt = require('jsonwebtoken')

const generateJwt = (id_user, role) => {
    return jwt.sign(
        { id_user, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}


class UserController {
    async registration(req, res, next) {
        try {
            const { FIO, email, login, password } = req.body
            let candidate = await User.findOne({ where: { login } })
            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким login уже существует'))
            }
            const user = await User.create({ FIO, email, login, password })
            const token = generateJwt(user.id_user, user.role)
            return res.json({ token })
        }
        catch (error) {
            next(ApiError.badRequest("Что-то пошло не так"))
            console.log(error)
        }
    }

    async login(req, res, next) {
        try {
            const { login, password } = req.body
            if (!login) {
                return next(ApiError.badRequest('Введите логин'))
            }
            if (!password) {
                return next(ApiError.badRequest('Введите пароль'))
            }
            const obj = { login, password } //объект для динамического условия из-за возможности не вводить почту или телефон
            let condition = []
            condition = Object.entries(obj).reduce((accum, [key, value]) => { //запись в accum пар [key,value]
                if (value) { //запись значений не являющихся undefined или null
                    accum[key] = value
                }
                return accum
            }, {}) //используем объект как первичное значение accum
            console.log(condition)
            const user = await User.findOne({
                where: { [Op.or]: condition }
            })
            if (!user) {
                return next(ApiError.internal('Введен неверный логин или нет учётной записи'))
            }
            const token = generateJwt(user.id_user, user.role)
            return res.json({ token })
        } catch (error) {
            next(ApiError.badRequest("Что-то пошло не так"))
            console.log(error)
        }
    }
    // Удаление по выбранному ID таблицы users
    async DelId(req, res) {
        const { id_user } = req.params
        let delidus = await User.destroy({ where: { id_user } })
        return res.json(delidus)
    }

}

module.exports = new UserController()
