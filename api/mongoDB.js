import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!clientPromise) {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {email} = req.body;

      // conexión a Mongo
      const conn = await clientPromise;
      const db = conn.db("lista_de_ignore"); // cambia "miBase" por el nombre de tu DB
      const collection = db.collection("clentes_ignore"); // cambia "miColeccion" por el nombre de tu colección

      // inserción
      await collection.insertOne({
        email,
        fecha: new Date(),
      });

      res.status(200).json({ status: "ok", mensaje: "Guardado en Mongo" });
    } catch (error) {
      res.status(500).json({ status: "error", detalle: error.message });
    }
  } else {
    res.status(405).json({ status: "error", mensaje: "Método no permitido" });
  }
}