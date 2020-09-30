const MongoClient = require("mongodb").MongoClient;
const mongoURL = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:27017/`;

module.exports = {
    CLIENT: MongoClient.connect(mongoURL),
    DB: process.env.MONGO_DB || "measures-db",
}
