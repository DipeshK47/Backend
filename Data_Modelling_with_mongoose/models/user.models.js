import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: String,            // 2 ways to declare variables, like username and email

    password: {
        type: String,
        required: [true, "password is required"],
        min: [6]

    }
}, {timestamps: true}
)

export const User = mongoose.model("User", userSchema)
