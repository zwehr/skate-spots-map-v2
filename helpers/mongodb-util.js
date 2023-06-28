import { MongoClient, ObjectId } from 'mongodb';

export async function connectDatabase() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}

export async function getDocumentById(client, collection, id) {
  const db = client.db();

  const documentWithId = await db
    .collection(collection)
    .findOne({ _id: new ObjectId(id) });

  return documentWithId;
}

export async function getDocumentsInBounds(
  client,
  collection,
  northBoundary,
  southBoundary,
  eastBoundary,
  westBoundary
) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find({
      lat: { $lt: 41, $gt: 39 },
      lng: { $lt: -120, $gt: 0 },
    })
    .toArray();

  return documents;
}
