import { query as _query } from '../config/db';

export function register(req, res) {
  const { name, email, password } = req.body;
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  _query(query, [name, email, password], (err, result) => {
    if (err) throw err;
    res.json({ message: 'User registered successfully', userId: result.insertId });
  });
}