export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const allowedNames = {
    aslam: [2],
    shafique: [3, 5, 8],
    yasir: [4],
    qaisar: [6],
    ayaz: [7],
    mohsin: [9],
    asif: [10],
    imran: [11],
  };

  const { name } = req.body;

  if (!name || !allowedNames[name.toLowerCase()]) {
    res.status(400).json({ error: 'نام درست درج کریں' });
    return;
  }

  // Load or create user record
  const storageKey = `assigned_${name.toLowerCase()}`;
  let assigned = globalThis[storageKey];

  if (!assigned) {
    const options = allowedNames[name.toLowerCase()];
    const randomIndex = Math.floor(Math.random() * options.length);
    assigned = options[randomIndex];
    globalThis[storageKey] = assigned; // Store in memory
  }

  res.status(200).json({ number: assigned });
}
