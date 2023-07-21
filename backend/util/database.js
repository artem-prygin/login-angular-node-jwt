import mysql2 from 'mysql2';
import config from '../config/config.json';

export default mysql2.createPool(config).promise();
