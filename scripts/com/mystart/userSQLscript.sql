create database userDB;

use userDB;

create table userT(
id int primary key not null,
user_type varchar(70),
psw_user varchar(70)
);

insert into userT
values(1, 'admin', 'adminMyStart2021');

insert into userT
values(2, 'general' , 'MyStart2021');

Select * from userT;

