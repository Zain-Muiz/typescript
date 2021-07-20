'use strict';

import path from 'path';
import { Sequelize } from 'sequelize';
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '/../config/config.js'))[env];

const url = config.use_env_variable ? process.env[config.use_env_variable] : '';

const sequelize = url
  ? new Sequelize(url, config)
  : new Sequelize(config.database, config.username, config.password, {
      dialect: 'postgres',
    });

export { sequelize, Sequelize };
