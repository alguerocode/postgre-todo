const Pool = require('pg').Pool;
require('dotenv').config();
const pg = require('pg');


const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST

}
const proConfig = {
  connectionString: process.env.DATABASE_URL
}

const pool = new Pool(process.env.NODE_ENV === 'production' ? proConfig : devConfig)
pool.query()


module.exports = pool;