
const mongoose = require("mongoose")
const mongoUri = process.env.MONGO_URL;

const dbConnection = async () => {
    try {
        await mongoose.connect(mongoUri, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true
        });
        console.log("Database connected");
    } catch (error) {
        console.log("Database connection error:", error);
    }
};

module.exports = dbConnection;
