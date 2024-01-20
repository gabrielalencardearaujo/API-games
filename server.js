require('dotenv').config();
require('module-alias/register');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./router');
const config = require('./src/configs/config');
const connection = require('@root/database/connection.js');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connection.authenticate()
  .then(() => {
    console.log('Conexao com banco de dados estabelecida')
  })
  .catch(err => {
    console.error('Conexao com banco de dados falhou.', err)
  });

app.use(routes);

app.listen(8080, () => {
  console.log(config.server.port);
  console.log(`API rodando na porta http://localhost:8080`);
})