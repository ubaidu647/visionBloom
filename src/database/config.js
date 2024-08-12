const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const client = new MongoClient(process.env.DB);
const dbName = process.env.DBNAME;
let dbInstance = null;

async function connectMongoClient() {
  try {
    if (!dbInstance) {
      await client.connect();
      dbInstance = client.db(dbName);
      console.log('MongoDB mongoClient DB successfully');
    }
    return dbInstance;
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    throw err; // Propagate the error to the caller
  }
}

async function connectMongoose() {
    try {
  
      await mongoose.connect(process.env.DB);
      console.log("Connection mongoose db successful");
    } catch (error) {
      console.error("DB error:", error);
    }
  }

module.exports = {
    connectMongoClient,
    connectMongoose,
  };