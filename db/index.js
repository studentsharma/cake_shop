const mongoose = require('mongoose')

const connectDB = async ()=>{

    try{

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/cake_db`)

    }catch(error){
        console.error("happening in database connection ", error)
    }
}

module.exports = connectDB;