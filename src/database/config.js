const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

class Database {
  static instance = null;
  static mongoClient = null;
  static dbInstance = null;
  static isMongooseConnected = false;

  static async getMongoClient() {
    if (!Database.mongoClient) {
      Database.mongoClient = new MongoClient(process.env.DB);
      await Database.mongoClient.connect();
      Database.dbInstance = Database.mongoClient.db(process.env.DBNAME);
      console.log('MongoClient DB connected successfully');
    }
    return Database.dbInstance;
  }

  static async getMongoose() {
    if (!Database.isMongooseConnected) {
      if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.DB);
        Database.isMongooseConnected = true;
        console.log('Mongoose connected successfully');
      }
    }
    return mongoose.connection;
  }
}

module.exports = Database;
