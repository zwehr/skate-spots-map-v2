import clientPromise from ".";

let client;
let db;
let spots;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
    spots = await db.collection("spots");
  } catch (error) {
    throw new Error("Failed to establish connection to database");
  }
}

(async () => {
  await init();
})();

// Spots

export async function getSpots() {
  try {
    if (!spots) await init();
    const result = await spots.find({}).limit(100).toArray();
    return { spots: result };
  } catch (error) {
    return { error: "Failed to fetch movies!" };
  }
}
