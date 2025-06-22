require('dotenv').config();

const { createPool } = require('mysql2/promise');

const host = process.env.DB_HOST 
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const database = process.env.DB_DATABASE
const port = process.env.DB_PORT;


const pool = createPool({
    host: host,
    user: user,
    password: password,
    database: database,
    port: port,
});

pool.getConnection()
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Database connection failed:', err));

module.exports = pool;