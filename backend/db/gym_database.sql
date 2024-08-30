CREATE DATABASE gym_database;

USE gym_database;

DROP TABLE members;
DROP TABLE membership_plans;
DROP TABLE payments;

CREATE TABLE members (
	member_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    date_of_birth DATE,
    join_date DATE,
    membership_plan_id INT,
    membership_end_date DATE,
    FOREIGN KEY (membership_plan_id) REFERENCES membership_plans(plan_id)
);


CREATE TABLE membership_plans(
	plan_id INT AUTO_INCREMENT PRIMARY KEY,
    full_access BOOLEAN,
    name VARCHAR(50),
    description TEXT,
    price DECIMAL(10,2),
    duration_in_days int
);
select * from members;
select * from membership_plans;

CREATE TABLE payments (
	payment_id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT,
    payment_date DATE,
    amount DECIMAL (10,2),
    payment_method VARCHAR(50),
    FOREIGN KEY (member_id) REFERENCES members(member_id)
);
select * from payments;

UPDATE membership_plans
SET full_access = False
WHERE plan_id = 3;

show databases;
show tables;



INSERT INTO membership_plans (name, description, price, duration_in_days)
	VALUES ('Full Day', 'Access from 0500 - 2200 Mon - Friday, 0700 - 1700 Sat, 0700 - 1500 Sun', 3000.00, 30),
			('Half Day', 'Access from 0700 - 1500 Mon - Friday, 0700 - 1700 Sat, 0700 - 1500 Sun', 2500.00, 30),
			('Estudante', 'Access from 0700 - 1500 Mon - Friday, 0700 - 1700 Sat, 0700 - 1500 Sun', 1750.00, 30),
			('TRIMESTRAL Full Day', 'Access from 0500 - 2200 Mon - Friday, 0700 - 1700 Sat, 0700 - 1500 Sun', 8550.00, 90),
			('SEMESTRAL Full Day', 'Access from 0500 - 2200 Mon - Friday, 0700 - 1700 Sat, 0700 - 1500 Sun', 16200.00, 180),
            ('SEMESTRAL Full Day', 'Access from 0500 - 2200 Mon - Friday, 0700 - 1700 Sat, 0700 - 1500 Sun', 30600.00, 365);
