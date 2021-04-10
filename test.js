var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root', // root@57956b556823:
  password : '123456'
});

connection.connect(); // 连接数据库

connection.query('CREATE DATABASE IF NOT EXISTS cheng DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;', function (error, results, fields) {
  if (error) throw error;
  console.log('创建数据库');
  console.log(results);
});
/* 使用 cheng 数据库 */
connection.query('use cheng')
/* 创建一个名为 user 的表 */
connection.query(`CREATE TABLE IF NOT EXISTS user(
  name text,
  age int
)`, function (error, results, fields) {
  if (error) throw error;
  console.log('创建表');
  console.log(results);
});


connection.end();