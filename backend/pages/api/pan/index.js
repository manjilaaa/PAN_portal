import db from '@/lib/db';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, dob, address, pan_number,phone } = req.body;

    try {
      const [result] = await db.query(
        'INSERT INTO pan_users (name, email, dob, address, pan_number,phone) VALUES (?, ?, ?, ?, ?,?)',
        [name, email, dob, address, pan_number,phone]
      );
      res.status(201).json({ success: true, id: result.insertId });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
