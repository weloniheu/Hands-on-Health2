import { Db, MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

// Connect to MongoDB
dotenv.config();
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI is not defined in the environment variables");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error(`An error occurred connecting to MongoDB: ${error}`);
  }
}

connectDB();

export default client;
