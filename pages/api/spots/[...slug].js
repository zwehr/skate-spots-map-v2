import { connectDatabase, getDocumentsInBounds } from '@/helpers/mongodb-util';

export default async function handler(req, res) {
  const { slug } = req.query;
  const northBoundary = slug[0];
  const southBoundary = slug[1];
  const eastBoundary = slug[2];
  const westBoundary = slug[3];

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Failed to connect to database.' });
    return;
  }

  if (req.method === 'GET') {
    try {
      const documents = await getDocumentsInBounds(
        client,
        'spots',
        northBoundary,
        southBoundary,
        eastBoundary,
        westBoundary
      );
      console.log('spots documents are: ', documents);
      res.status(200).json({ spots: documents });
    } catch (error) {
      res.status(500).json({ message: 'Failed to GET spots.' });
    }
  }
}
