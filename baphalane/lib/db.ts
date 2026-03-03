import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.YOUR_HOST,          
  user: process.env.YOUR_DB_USERNAME,
  password: process.env.YOUR_DB_PASSWORD,
  database: process.env.YOUR_DATABASE_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

export default pool;