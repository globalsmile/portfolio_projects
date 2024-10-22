import { createConnection } from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const dbPassword = process.env.DB_PASSWORD;
const connection = createConnection({
  host: 'localhost',
  user: 'attendance_user',
  password: dbPassword,
  database: 'attendance_system'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

export default connection;
