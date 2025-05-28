export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const fixedAssignments = {
    imran: [2, 5],
    asif: [3],
    atif: [4],
    mohsin: [6, 7],
    aslam: [10],
    ayaz: [9],
    shafique: [8, 12, 13],
    qaisar: [11],
  };

  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: 'نام درج کرنا ضروری ہے۔' });
    return;
  }

  const cleanName = name.trim().toLowerCase();
  const assigned = fixedAssignments[cleanName];

  if (!assigned) {
    res.status(400).json({ error: 'یہ نام فہرست میں موجود نہیں ہے۔' });
    return;
  }

  res.status(200).json({ numbers: assigned });
}
