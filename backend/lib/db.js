import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '#manjisroot#',
  database:'pan_portal'
});

export default db;