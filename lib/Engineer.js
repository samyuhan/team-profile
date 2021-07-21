var Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github; 
    }

    // Returns Github
    getGithub() {
        return this.github;
    }

    // Overrides Employee role
    getRole() {
        return "Engineer";
    }
} 