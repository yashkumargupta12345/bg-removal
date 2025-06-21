import mongoose from 'mongoose'

mongoose.connection.on('connected', () => {
    console.log("Database Connected")
})

mongoose.connection.on('error', (err) => {
    console.error("Database connection error:", err)
})

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`)
    } catch (error) {
        console.error("Failed to connect to database:", error)
        process.exit(1)
    }
}

export default connectDB
