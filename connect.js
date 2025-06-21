const mongoose = require("mongoose")
mongoose.set("strictQuery", true)

async function connectToMongooDB(url) {
    return mongoose.connect(url)
}

module.exports = {
    connectToMongooDB
};