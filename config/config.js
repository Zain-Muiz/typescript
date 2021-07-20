// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD ,
    "host": process.env.DB_HOST,
    "database": process.env.DB_DBNAME,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD ,
    "host": process.env.DB_HOST,
    "database": process.env.DB_DBNAME,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD ,
    "host": process.env.DB_HOST,
    "database": process.env.DB_DBNAME,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT
  }
}
