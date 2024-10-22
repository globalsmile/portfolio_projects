import express from 'express';
import { json } from 'body-parser';
import userRoutes from './routes/user';
import attendanceRoutes from './routes/attendance';
const app = express();
require('dotenv').config();

app.use(json());

app.use('/api', userRoutes);
app.use('/api', attendanceRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});