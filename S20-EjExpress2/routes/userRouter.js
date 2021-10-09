const userRouter = require('express').Router();

const userController = require('../controllers/userController');

//CRUD

//READ ....

userRouter.get('/', async (req, res) => {
    try {
        res.json(await userController.login())
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

userRouter.get('/carrer', async (req, res) => {
    try {
        res.json(await userController.logout())
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

userRouter.get('/perfil', async (req, res) => {
    try {
        res.json(await userController.perfil())
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});





module.exports = userRouter;