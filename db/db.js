//consume connection
const connection = require("./connection");

//easy way to export all queries function
class DataQueries {
    //make contructor that uses connection
    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees() {
        return this.connection.query(`
        SELECT
            employee.id,
            employee.first_name,
            employee.last_name,
            role.title,
            department.name As department,
            role.salary,
            CONCAT(manager.first_name,' ',manager.last_name) As manager
        FROM
            employee
                LEFT JOIN role on employee.role_id = role.id
                LEFT JOIN department on role.department_id = department.id
                LEFT JOIN employee manager on manager.id = employee.manager_id
        `);
    }

    findAllDepartments() {
        return this.connection.query(`
        SELECT
           *
        FROM
            department
        `);
    }

    addDepartment(department) {
        return this.connection.query(`INSERT INTO department SET ?`, department);
    }

    addRole(role) {
        return this.connection.query('INSERT INTO role SET ?', role);
    }

    addEmployee(employee) {
        return this.connection.query('INSERT INTO employee SET ?', employee);
    }

    quit() {
        return this.connection.end();
    }


}

module.exports = new DataQueries(connection);