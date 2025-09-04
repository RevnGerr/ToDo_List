// src/routes/todoRoutes.js
const express = require('express');
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const router = express.Router();

// جلب كل التودوهات
router.get('/', getTodos);

// إضافة تودو جديد
router.post('/', createTodo);

// تحديث تودو
router.put('/:id', updateTodo);

// حذف تودو
router.delete('/:id', deleteTodo);

module.exports = router;
