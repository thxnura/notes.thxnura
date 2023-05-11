const uri = "mongodb+srv://thxnura_notes:etGmMZxX6CKJbcQJ@cluster0.z4o2e3i.mongodb.net/my-database?retryWrites=true&w=majority";
const mongoose = require("mongoose");

const connectMongoDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectMongoDB;
