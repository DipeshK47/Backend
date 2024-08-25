import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
    content: {
        type: String,
        requied: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timeseries: true})

export const SubTodo = mongoose.model("SubTodo", subTodoSchema)