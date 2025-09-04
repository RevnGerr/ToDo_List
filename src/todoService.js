// src/models/todo.js
const pool = require('../config/database'); // استيراد إعداد الاتصال بقاعدة البيانات

// دالة لجلب كل التودوهات
const getTodos = async () => {
  try {
    const result = await pool.query('SELECT * FROM todos');
    return result.rows; // إرجاع البيانات
  } catch (error) {
    throw new Error('Error fetching todos');
  }
};

// دالة لإضافة تودو جديد
const createTodo = async (title, description) => {
  try {
    const result = await pool.query(
      'INSERT INTO todos (title, description, is_completed) VALUES ($1, $2, $3) RETURNING *',
      [title, description, false]
    );
    return result.rows[0]; // إرجاع التودو الذي تم إضافته
  } catch (error) {
    throw new Error('Error creating todo');
  }
};

// دالة لتحديث تودو
const updateTodo = async (id, title, description, isCompleted) => {
  try {
    const result = await pool.query(
      'UPDATE todos SET title = $1, description = $2, is_completed = $3 WHERE id = $4 RETURNING *',
      [title, description, isCompleted, id]
    );
    return result.rows[0]; // إرجاع التودو الذي تم تحديثه
  } catch (error) {
    throw new Error('Error updating todo');
  }
};

// دالة لحذف تودو
const deleteTodo = async (id) => {
  try {
    await pool.query('DELETE FROM todos WHERE id = $1', [id]);
    return { message: 'Todo deleted' }; // إرجاع رسالة تأكيد بالحذف
  } catch (error) {
    throw new Error('Error deleting todo');
  }
};

// تصدير الدوال
module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
};
