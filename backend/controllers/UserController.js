const UserModel = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
    jwt_auth_secret
} = require('../config/keys');
const UserController = {
    async getAll(req, res) {
        try {
            const users = await UserModel.find()
            res.send({
                users
            })
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },
    async update(req, res) {
        try {
            const user = await UserModel.findByIdAndUpdate(req.body.id, {...req.body }, { new: true })
            res.send({
                user
            })
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },
    async delete(req, res) {
        try {
            const user = await UserModel.findByIdAndDelete(req.body.id)
            res.send({
                user
            })
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },
    async register(req, res) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 9)
            const user = await UserModel.create(req.body);
            res.status(201).send({
                user,
                message: 'Usuario creado con éxito'
            })
        } catch (error) {
            res.status(500).send({
                message: 'Hubo un problema al intentar registrar al usuario',
                error
            })
        }
    },
    async login(req, res) {
        try {
            const user = await UserModel.findOne({
                username: req.body.username
            });
            if (!user) {
                return res.status(400).send({
                    message: 'Usuario o contraseña incorrectos'
                })
            }
            const isMatch = bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({
                    message: 'Usuario o contraseña incorrectos'
                })
            }
            const token = jwt.sign({
                _id: user._id
            }, jwt_auth_secret);
            if (user.tokens.length > 4) user.tokens.shift();
            user.tokens.push(token);
            await user.replaceOne(user);
            res.send({
                user,
                token,
                message: 'Conectado con éxito'
            })
        } catch (error) {
            console.error(error)
            res.status(500).send({
                message: 'Hubo un problema al intentar conectar al usuario'
            })
        }
    },

    logout(req, res) {
        UserModel.findByIdAndUpdate(req.user._id, { $pull: { tokens: req.headers.authorization } })
            .then(() => res.send({ message: 'Desconectado con éxito' }))
            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'Hubo un problema al intentar conectar al usuario'
                })
            })
    }
}

module.exports = UserController;