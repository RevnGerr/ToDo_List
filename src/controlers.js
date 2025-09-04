// src/controllers/todoController.js
const Todo = require('../models/todo'); // استيراد دوال التفاعل مع الـ Database

// جلب كل التودوهات
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.getTodos(); // استدعاء دالة جلب التودوهات
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos', error: error.message });
  }
};

// إضافة تودو جديد
const createTodo = async (req, res) => {
  const { title, description } = req.body; // استخراج البيانات من الجسم
  try {
    const newTodo = await Todo.createTodo(title, description); // استدعاء دالة إضافة التودو
    res.status(201).json(newTodo); // إرجاع التودو الذي تم إضافته
  } catch (error) {
    res.status(500).json({ message: 'Error creating todo', error: error.message });
  }
};

// تحديث تودو
const updateTodo = async (req, res) => {
  const { id } = req.params; // استخراج الـ ID من الـ URL
  const { title, description, isCompleted } = req.body; // استخراج البيانات من الجسم
  try {
    const updatedTodo = await Todo.updateTodo(id, title, description, isCompleted); // استدعاء دالة تحديث التودو
    res.status(200).json(updatedTodo); // إرجاع التودو الذي تم تحديثه
  } catch (error) {
    res.status(500).json({ message: 'Error updating todo', error: error.message });
  }
};

// حذف تودو
const deleteTodo = async (req, res) => {
  const { id } = req.params; // استخراج الـ ID من الـ URL
  try {
    const response = await Todo.deleteTodo(id); // استدعاء دالة حذف التودو
    res.status(200).json(response); // إرجاع رسالة تأكيد الحذف
  } catch (error) {


    
    res.status(500).json({ message: 'Error deleting todo', error: error.message });
  }
};

// تصدير الـ controllers
module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
};
