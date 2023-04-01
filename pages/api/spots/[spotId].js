import { connectDatabase, getDocumentById } from "@/helpers/mongodb-util";

export default async function handler(req, res) {
  const { spotId } = req.query;

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Failed to connect to database." });
    return;
  }

  if (req.method === "GET") {
    try {
      const spotWithId = await getDocumentById(client, "spots", spotId);
      res.status(200).json({ spot: spotWithId });
    } catch (error) {
      res.status(500).json({ message: "Failed to GET spot by ID." });
    }
  }
}
