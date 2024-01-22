const http = require('http');
const app = require('./app');

const port = process.env.PORT || 5000||5222;
const server = http.createServer(app);

server.listen(port, () => {
  console.log('server started at port ' + port);
});
