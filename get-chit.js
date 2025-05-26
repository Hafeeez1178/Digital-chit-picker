export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error: 'Only POST allowed'});

  const assignments = {
    aslam: [2],
    shafique: [3, 7, 10],
    yasir: [4],
    qaisar: [5],
    ayaz: [6],
    mohsin: [8],
    asif: [9],
    imran: [11]
  };

  const { name } = req.body;
  if (!name) return res.status(400).json({error: 'Name missing'});

  const chits = assignments[name.toLowerCase()];
  if (!chits) return res.status(404).json({error: 'Name not found'});

  res.status(200).json({chits});
}