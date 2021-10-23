const MovieRouter = require('./views/MovieRouter');
const router = require('express').Router();

router.use('/movies', MovieRouter);

module.exports = router;
