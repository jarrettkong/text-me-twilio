require('dot-env');

const app = require('express')();
const serveStatic = require('serve-static');
const port = process.env.PORT || 5000;

app.use(serveStatic(__dirname + '/dist'));

app.post('/sms', (req, res) => {
  
})

app.listen(port, console.log('server started ' + port));