show databases;
create database food_journal;
use food_journal;

create table user(
id INT(10) NOT NULL ,
    name VARCHAR(50) NOT NULL,
    email varchar(50) not null,
    primary key(id)
    )engine=InnoDB;
    
show tables;
select * from user;
show columns from user;

insert into user(id,name,email)
value (1,'thufeil','thufeil24@gmail.com');

create table food(
id INT(10) NOT NULL ,
userId int(10) not null,
    name VARCHAR(50) NOT NULL,
    url varchar(50) not null,
    description varchar(50) not null,
    primary key(id),
    KEY fk_user_food (userId),
  CONSTRAINT fk_user_food FOREIGN KEY (userId) REFERENCES user (id)
    )engine=InnoDB;
    
    show tables;
    show columns from food;
