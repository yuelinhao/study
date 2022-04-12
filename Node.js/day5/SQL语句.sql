-- select * from users

-- select username,password from users

-- insert into users(username,password) values('tony stark','098123')

-- select * from users

-- update users set password='888888' where id=4

-- select * from users

-- update users set password='admin123',status=1 where id=2

-- select * from users

-- delete from users where id=4

-- select * from users

-- select * from users where status=1

-- select * from users where id>2

-- select * from users where username<>'ls'
-- select * from users where username!='ls'

-- select * from users where status=0 and id<3

-- select * from users where status=1 or username='zs'

-- select * from users order by status

-- 按照id对结果进行降序排序
-- select * from users order by id desc

-- select * from users order by status desc,username asc

-- count(*) 函数用于返回查询结果的总数据条数
-- select count(*) from users where status=0

-- 使用 as 为列设置别名
-- select count(*) as total from users where status=0
-- select username as uname,password as upwd from users

