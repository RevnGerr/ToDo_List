// src/config/database.js
const { Pool } = require('pg'); // استيراد مكتبة pg
require('dotenv').config(); // لتحميل المتغيرات من ملف .env

// إعداد الاتصال بقاعدة البيانات PostgreSQL باستخدام Pool
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// تصدير pool لاستخدامه في أجزاء أخرى من التطبيق
module.exports = pool;
