class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school; 
    }

    // Returns school
    getSchool() {
        return this.school;
    }
    
    // Overrides Employee role
    getRole() {
        return "Manager";
    }
}