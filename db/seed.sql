INSERT INTO department (name)
VALUES ('Art'),('Sales'),('Legal'),('Engineering');

INSERT INTO role (title, salary, department_id)
VALUES ('Software Engineer', 100000, 4), ('Animator', 80000, 1), ('Legal Advisor', 70000, 3), ('Sales Associate', 25000, 2), ('Lead Salesperson', 60000, 2), ('front-end developer', 80000, 4), ('Lead Artist', 50000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Bob', 'Barker', 2, NULL), ('Jeremy', 'Lin', 2, 1), ('Stacy', 'Mac', 3, NULL), ('Brett', 'Winterstrom', 4, NULL), ('Chad', 'Chadington', 4, 4), ('Rebecca', 'Stevens', 1, NULL), ('Bill', 'Billers', 1, 6);
