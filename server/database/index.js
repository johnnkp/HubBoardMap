require('dotenv').config();
const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI;

// Connect to the database
module.exports = {
    connect: () => {
        try {
            mongoose.connect(MONGODB_URI, {dbName: "HubBoard"}).catch(
                new MongoClient
                // Replace the following with your MongoDB deployment's connection string.
                ("mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority")
                    .connect()
                    .then(() => console.log('Connected to MongoDB'))
            );
            mongoose.connection.on('connected', () => {
                console.log('Connected to MongoDB')
            });
            mongoose.connection.on('error', (err) => {
                console.log('Error connecting to MongoDB: ' + err)
            });
        } catch (e) {
            new MongoClient
            // Replace the following with your MongoDB deployment's connection string.
            ("mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority")
                .connect()
                .then(() => console.log('Connected to MongoDB'));
        }
    }
}
