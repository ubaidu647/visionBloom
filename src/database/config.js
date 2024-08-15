const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const client = new MongoClient(process.env.DB);
const dbName = process.env.DBNAME;
let dbInstance = null;
let isMongooseConnected = false;

async function connectMongoClient() {
  try {
    if (!dbInstance) {
      await client.connect();
      dbInstance = client.db(dbName);
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
        await mongoose.connect(process.env.DB);
        isMongooseConnected = true;
        console.log('Mongoose connected successfully');
      }
    } catch (error) {
      console.error("DB error:", error);
    }
  }

module.exports = {
    connectMongoClient,
    connectMongoose,
  };