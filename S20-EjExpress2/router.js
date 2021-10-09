
//Entorno
const router = require('express').Router();

const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');

//Rutas
router.use("/user", userRouter);
router.use("/product", productRouter);


module.exports = router;