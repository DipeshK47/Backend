// import mongoose from 'mongoose';
// import {DB_NAME} from './constants'
import connectDB from './db/index.js'
import dotenv from "dotenv"
import {app} from './app.js'
dotenv.config({
    path: './env'
})


/* SECOND APPROACH */

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT || 8000}`)
        })
    })
    .catch((err) => {
        console.log("MONGO DB Connection failure", err)
    })


/*  *FIRST APPROACH*
import express from "express"
const app = express()

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR",error);
            throw err;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR", error)
        throw err
    }
})()
*/