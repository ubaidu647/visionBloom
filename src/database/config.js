const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');


const dbName = process.env.DBNAME;
let mongoClient;
let dbInstance = null;
let isMongooseConnected = false;

async function connectMongoClient() {
  try {
    if (!mongoClient) {
      mongoClient = new MongoClient(process.env.DB)
    }
    if (!dbInstance) {
      // const client = new MongoClient(process.env.DB);
      // dbInstance = client.db(dbName);
      await mongoClient.connect();
    dbInstance = mongoClient.db(process.env.DBNAME);
    console.log('mongoClient DB connected successfully');

    }
    return dbInstance;
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    throw err; // Propagate the error to the caller
  }
}

async function connectMongoose() {
    try {
  
      if (!isMongooseConnected) {
        if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.DB);
        isMongooseConnected = true;
        console.log('Mongoose connected successfully');
        }
      }
    } catch (error) {
      console.error("DB error:", error);
    }
  }

module.exports = {
    connectMongoClient,
    connectMongoose,
  };