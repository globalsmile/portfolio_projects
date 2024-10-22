import { createConnection } from 'mysql';
const connection = createConnection({
  host: 'localhost',
  user: 'attendance_user',
  password: 'your_password',
  database: 'attendance_system'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});
export default connection;