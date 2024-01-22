const express = require('express');
const { errorHandle, errorValidateHandle } = require('./middlewares/error.handlers');
const router = require('./routes');
const cors = require('cors');

const app = express();
app.get('/api/users', (req, res) => {
 const users=[
  {id:1,name:'fafdfasd'},{id2,name:'sdasdwww'}
 ]
 return res.status(200).json({users});
});
app.use(express.static('public'));
app.use(express.json());
app.use('/api', router);
app.use(cors());
app.use(errorValidateHandle);
app.use(errorHandle);

module.exports = app;