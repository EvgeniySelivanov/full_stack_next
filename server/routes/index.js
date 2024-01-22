const { Router } = require('express');
const userRouter = require('./userRouter');
const router = Router();

router.use('/users', userRouter);

module.exports = router;