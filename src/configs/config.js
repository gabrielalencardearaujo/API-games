require('dotenv').config();

module.exports = {
  database: {
    host: process.env.HOST,
    user: process.env.USER || 'root',
    password: process.env.USER_PASSWORD,

  },
  server: {
    port: process.env.PORT_SERVER || 8080,
  }
}