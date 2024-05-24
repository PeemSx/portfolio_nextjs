const User = require('../models/User');
const TodoItem = require('../models/TodoItem');

exports.createTodoItem = async (req,res,next) => {
    try{
        const {topic, description, status ,startedDate, ownerId} = req.body;

        const todoItem = await TodoItem.create({
            topic,
            description,
            status,
            startedDate,
            ownerId
        });
        
        res.status(200).json({
            success:true,
            data:todoItem
        });

    }catch (err){
        res.status(400).json({success : false});
        console.log(err);
    }
};

exports.getTodoItemsByUserID = async (req,res,next) => {
    try{
        const userId = req.params.id;
        const user = User.findById(userId);

        if(!user){  
            res.status(404).json({success : false, message:'The user ID does noy match with any'});
        }
        
        // console.log(userId);

        const todoItems = await TodoItem.find({ownerId: userId});
        
        if(!todoItems){
            throw console.error("No todoItems with the user ID");
        }
        
        res.status(200).json({
            success:true,
            data:todoItems
        });

    }catch (err){
        res.status(400).json({success : false});
        console.log(err);
    }
};

exports.getTodoItemsById = async (req,res,next) => {
    try{
        const id = req.params.id;
        const todoItem = await TodoItem.findById(id)
        
        if(!todoItem){  
            res.status(404).json({success : false, message:'The TodoItem ID does not match with any'});
        }
        
        
        res.status(200).json({
            success:true,
            data:todoItem
        });

    }catch (err){
        res.status(400).json({success : false});
        console.log(err);
    }
};

exports.deleteTodoItemById = async (req,res,next) => {
    try{
        const id = req.params.id;
        const todoItem = await TodoItem.findById(id)
        

        if(!todoItem){  
            res.status(404).json({success : false, message:'There is no TodoItem with this ID'});
        }   

        const uid = req.user.id;
        const {ownerId} = todoItem;
        
        if(ownerId !== uid){
            res.status(401).json({success : false, message:'User does not own this TodoItem'});
        }

        const deletedItem = await TodoItem.findByIdAndDelete(id)
        
        res.status(200).json({
            success:true,
            data:deletedItem
        });

    }catch (err){
        res.status(400).json({success : false});
        console.log(err);
    }
};