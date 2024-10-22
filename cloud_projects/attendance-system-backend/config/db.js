import { createConnection } from 'mysql';

require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;
const connection = createConnection({
  host: 'localhost',
  user: 'attendance_user',
  password: dbPassword,
  database: 'attendance_system'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});
export default connection;