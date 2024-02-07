const express = require('express');
const { errorHandle, errorValidateHandle } = require('./middlewares/error.handlers');
const router = require('./routes');
const cors = require('cors');

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use('/api', router);
app.use(cors());
app.use(errorValidateHandle);
app.use(errorHandle);

module.exports = app;