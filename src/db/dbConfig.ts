import mongoose from "mongoose"

type ConnectionObject = {
    isConnected?:number
}

const connection : ConnectionObject = {}   

async function connectDB():Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to database")
        return;
    }
    try {
        const db = await mongoose.connect(
          process.env.MONGODB_URI ||
            "mongodb+srv://ganesh:Ganesh@cluster0.crfhb.mongodb.net/codeGround?retryWrites=true&w=majority"
        );
        connection.isConnected = db.connections[0].readyState

        console.log("MongoDb connected successfully!")
    } catch (error) {
        console.log("Error creating database", error)
        process.exit(1) 
    }
}

export default connectDB