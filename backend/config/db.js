const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MONGO DB Connected: ${conn.connection.host}`.cyan.underline)
    }
    catch (error) {
        console.log(`ERROR: ${error.message}`.red.underline)
        process.exit(1)
    }
}

module.exports = connectDB