import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        min: [6]
    }
}, {timeseries: true})

export const User = mongoose.model('User',userSchema)