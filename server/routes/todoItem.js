const express = require('express');
const {createTodoItem, getTodoItemsByUserID, getTodoItemsById, deleteTodoItemById} = require('../controllers/todoItem');

const router = express.Router();
const {protect, authorize} = require('../middleware/auth');
router.route('/')
    .post(protect,authorize('admin', 'user'),createTodoItem);

router.route('/:id')
    .get(protect,authorize('admin', 'user'),getTodoItemsById)
    .delete(protect,authorize('admin', 'user'), deleteTodoItemById);

router.route('/user/:id')
    .get(protect,authorize('admin', 'user'), getTodoItemsByUserID)

// router.post('/login', login);
// router.get('/me',protect,getMe);
// router.get('/logout', logout); 

module.exports = router;
