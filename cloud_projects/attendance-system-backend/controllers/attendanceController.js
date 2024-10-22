import { query as _query } from '../config/db';

export function checkin(req, res) {
  const { userId, checkinTime } = req.body;
  const query = 'INSERT INTO attendance (user_id, checkin_time) VALUES (?, ?)';
  _query(query, [userId, checkinTime], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Check-in recorded', attendanceId: result.insertId });
  });
}

export function checkout(req, res) {
  const { attendanceId, checkoutTime } = req.body;
  const query = 'UPDATE attendance SET checkout_time = ? WHERE id = ?';
  _query(query, [checkoutTime, attendanceId], (err) => {
    if (err) throw err;
    const calcQuery = 'SELECT TIMESTAMPDIFF(HOUR, checkin_time, checkout_time) AS totalHours FROM attendance WHERE id = ?';
    _query(calcQuery, [attendanceId], (err, result) => {
      if (err) throw err;
      res.json({ message: 'Check-out recorded', totalHours: result[0].totalHours });
    });
  });
}