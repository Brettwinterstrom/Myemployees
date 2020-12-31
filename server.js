const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '257789601Me$',
    database: 'employee_trackerdb',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    mainPrompt();
})

function mainPrompt() {
    inquirer
        .prompt({
            name: "main",
            type: "list",
            message: "What would you like to do?",
            choice: [
                {
                    name: "Add Department",
                    value: "Add_Department"
                },
                {
                    name: "Add Role",
                    value: "Add_Role"
                },
                {
                    name: "Add Employee",
                    value: "Add_employee"
                },
                {
                    name: "View All Departments",
                    value: "View_departments"
                },
                {
                    name: "View All Roles",
                    value: "View_roles"
                },
                {
                    name: "View All Employees",
                    value: "View_employees"
                },
                {
                    name: "Update Employee roles",
                    value: "Update_roles"
                },
                {
                    name: "Quit",
                    value: "Quit"
                }
            ]
        });

    switch (choice) {
        case "Add_department":
            return addDepartment();
            break;
        case "Add_Role":
            return addRole();
            break;
        case "Add_employee":
            return addEmployee();
            break;
        case "View_departments":
            return viewDepartments();
            break;
        case "View_roles":
            return viewRoles();
            break;
        case "View_employees":
            return viewEmployees();
            break;
        case "Update_roles":
            return updateRoles();
            break;
        case "Quit":
            return quit();
            break;

    }
}

