import { getSpots } from "../../lib/mongo/spots";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { spots, error } = await getSpots();
      if (error) throw new Error(error);

      return res.status(200).json({ spots });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET"]);
  res.status(405).end(`Method ${req.method} is not allowed.`);
}
