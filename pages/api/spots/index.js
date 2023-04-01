import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from "@/helpers/mongodb-util";

export default async function handler(req, res) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Failed to connect to database." });
    return;
  }

  if (req.method === "POST") {
    try {
      await insertDocument(client, "spots", req.body);
    } catch (error) {
      res.status(500).json({ message: "Failed to insert spot data." });
      return;
    }
    res.status(201).json({ message: "Successfully added spot." });
  }

  if ((req.method = "GET")) {
    try {
      const documents = await getAllDocuments(client, "spots", { _id: -1 });
      res.status(200).json({ spots: documents });
    } catch (error) {
      res.status(500).json({ message: "Failed to GET spots." });
    }
  }
}
