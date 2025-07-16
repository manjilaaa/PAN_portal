import db from '@/lib/db';
export default async function handler(req, res) {
  const { number } = req.query;

  try {
    const [rows] = await db.query('SELECT * FROM pan_users WHERE pan_number = ?', [number]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'PAN not found' });
    }
    res.status(200).json({ success: true, data: rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}