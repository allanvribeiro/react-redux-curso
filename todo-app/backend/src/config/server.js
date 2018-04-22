const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');

//configuração do middleware do express para fazer o parser o formulário
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(allowCors)

server.listen(port, function(){
    console.log(`BACKEND está rodando na porta ${port}.`);
});

module.exports = server
