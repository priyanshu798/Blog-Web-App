const express=require('express')
require('dotenv').config()
const { default: mongoose } = require('mongoose')

const app=express()


//database
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database connected")
    }
    catch(err){
        console.log(err)
    }
}


app.listen(process.env.PORT,()=>{
    connectDB()
    console.log('AFDSF port '+process.env.PORT)
} )