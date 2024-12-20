const {Sequelize} = require('../database')
const {User, Request} = require('../models/model')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
const ApiError = require('../ApiError')


class RequestController
{
    // Создание записи в таблице Request
    async createRequest(req, res, next)
    {
        try {
            const {description_problem, tema } = req.body
            const id_user = req.user.id_user
            if(!description_problem||!tema)
            {
                return next(ApiError.badRequest("Введите полностью данные"))
            }
            const createreq = await Request.create({id_user: id_user, tema, description_problem})
            return res.json({message: "Заявка создана"})
        } catch (error) {
            next(ApiError.badRequest("Что-то пошло не так"))
            console.log(error)
        }
    }
    // Заявка подтверждена
    async updateAccess(req, res, next) {
        try {
            const { id_request } = req.body
            const role = req.user.role
            if (role != "admin") {
                return res.status(500).json({message: "Недостаточно прав!"})
            }
            const candidate = await Request.findOne({ where: { id_request: id_request } })
            if (candidate.status_request != "Новое") {
                return res.status(500).json({message: "Можно изменять только новые заявки"})
            }
            const access = await Request.update({ status: "Подтверждено" },
                { where: { id_request: id_request } })
            return res.json(access)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "Не удалось принять заявку"})
        }
    }
    // Заявка отклонена
    async updateDenied(req, res, next) {
        try {
            const { id_request } = req.body
            const role = req.user.role
            if (role != "admin") {
                return res.status(500).json({message: "Недостаточно прав!"})
            }
            const candidate = await Request.findOne({ where: { id_request: id_request } })
            if (candidate.status_request != "Новое") {
                return res.status(500).json({message: "Можно изменять только новые заявки"})
            }
            const denied = await Request.update({ status: "denied" },
                { where: { id_request: id_request } })
            return res.json(denied)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "Не удалось отклонить заявку"})
        }
    }
    // Для User
    async getAll(req, res, next) {
        try {
            const role = req.user.role
            if (role != "admin") {
                return res.status(500).json({message: "Недостаточно прав!"})
                
            }
            const requests = await Request.findAll()
            return res.json(requests)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Не удалось вывести все данные" })
        }
    }
    // Для Админа
    async getAllID(req, res, next) {
        try {
            const id_user = req.user.id_user
            const requests = await Request.findAll({ where: { id_user: id_user } })
            return res.json(requests)    
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Не удалось вывести все данные по этому ID" })
        }
    }
    // Удаление по выбранному ID таблицы request
    async DelId(req,res)
    {
        const {id_user} = req.params
        let delidreq = await Request.destroy({where:{id_user}})
        return res.json(delidreq)
    }
}

module.exports= new RequestController()