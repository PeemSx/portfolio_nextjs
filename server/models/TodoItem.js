const mongoose = require("mongoose");

const TodoItemSchema = new mongoose.Schema({

    topic:{
        type : String,
        required : [true, 'Please add a topic']
    },
    description:{
        type : String,
        required : [true, 'Please add a description']
    },
    status:{
        type : String,
        default : 'not complete',
        required : [true, 'Please define the status']
    },
    startedDate: {
        type: Date,
        default : Date.now,
        required: [true, 'Please add the date']
    },
    completedDate :{
        type: Date,
        default : Date.now
    },
    ownerId : {
        type: String,
        required: ['true', 'TodoItem mush have the owner']
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

const TodoItem = mongoose.model("TodoItem", TodoItemSchema);

module.exports = TodoItem;