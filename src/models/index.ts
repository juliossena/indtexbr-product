import { Sequelize } from 'sequelize';
import { productBuild } from './product';

const config = require('../../config/config.json');

const env = process.env.NODE_ENV || 'development';

config[env].logging = false;
config[env].operatorsAliases = null;
const sequelize = new Sequelize(config[env]);

productBuild(sequelize);

export default sequelize;
