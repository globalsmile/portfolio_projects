import { createConnection } from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbDatabase = process.env.DB_DATABASE;
const connection = createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbDatabase
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

export default connection;
