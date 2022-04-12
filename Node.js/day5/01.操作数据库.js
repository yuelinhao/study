//导入mysql 模块
const mysql = require('mysql')

//建立与 mysql 数据库的连接关系
const db = mysql.createPool({
    host: '127.0.0.1', //数据库的ip地址
    user: 'root', //登录数据库的账号
    password: 'admin123', //登录数据库的密码
    database: 'my_db_01' //指定要操作哪个数据库
})

//测试mysql模块能否正常工作
/* db.query('select 1', (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    console.log(results);
}) */

//查询 user 表中所有的数据
/* const sqlStr = 'select * from users'
db.query(sqlStr, (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    console.log(results);
}) */

//插入数据
/* const user = { username: 'Spider-Man', password: 'pcc123' }
const sqlStr = 'insert into users (username, password) values (?, ?)'
db.query(sqlStr, [user.username, user.password], (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    if (results.affectedRows === 1) {
        console.log('插入数据成功');
    }
}) */

/* const user = { username: 'Spider-Man2', password: 'pcc4321' }
const sqlStr = 'insert into users set ?'
db.query(sqlStr, user, (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    if (results.affectedRows === 1) {
        console.log('插入数据成功');
    }
}) */

//更新数据
/* const user = { id: 6, username: 'aaa', password: '000' }
const sqlStr = 'update users set username=?, password=? where id=?'
db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    if (results.affectedRows === 1) {
        console.log('更新成功');
    }
})
 */
/* const user = { id: 6, username: 'aaaa', password: '0000' }
const sqlStr = 'update users set ? where id=?'
db.query(sqlStr, [user, user.id], (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    if (results.affectedRows === 1) {
        console.log('更新成功');
    }
}) */

//删除数据
/* const sqlStr = 'delete from users where id=?'
db.query(sqlStr, 5, (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    if (results.affectedRows === 1) {
        console.log('删除数据成功');
    }
}) */

//标记删除
const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr, [1, 6], (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    if (results.affectedRows === 1) {
        console.log('标记删除成功');
    }
})