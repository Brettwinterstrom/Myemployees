const DataQueries = require("./db/db");
const inquirer = require("inquirer");
require("console.table");

function mainPrompt() {
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
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
    }).then((answer) => {
        switch (answer.choice) {
            case "Add_Department":
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
    });

}

mainPrompt();

function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What Department do you want to add?"
        }
    ]).then((answer) => {
        console.log(answer);
        DataQueries.addDepartment(answer).then(() => {
            console.log("department successfully added");
            mainPrompt();
        });
    });
}

function addRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of the role you're adding?"
        },
        {
            type: "number",
            name: "salary",
            message: "What is the salary of the role you're adding?"
        },
        {
            type: "number",
            name: "department_id",
            message: "What is the department id?"
        }

    ]).then((answer) => {
        DataQueries.addRole(answer).then(() => {
            console.log("role successfull added!");
            mainPrompt();
        })
    })

}

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
        },
        {
            type: "number",
            name: "role_id",
            message: "What is the employee's role id?"
        },
        {
            type: "number",
            name: "manager_id",
            message: "What is the employee's managers's id?"
        }
    ]).then((answer) => {
        DataQueries.addEmployee(answer).then(() => {
            console.log("employee sucessfully added!");
            mainPrompt();
        })
    })

}

function viewDepartments() {
    DataQueries.findAllDepartments().then((departments) => {
        console.table(departments);
        mainPrompt();
    });
}

// function viewRoles() {
//     mainPrompt()
// }

function viewEmployees() {
    DataQueries.findAllEmployees().then((employees) => {
        console.table(employees);
        mainPrompt();
    });
}

// function updateRoles() {
//     mainPrompt()
// }

function quit() {
    DataQueries.quit();
}


