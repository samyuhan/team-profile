class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber; 
    }

    // Overrides Employee role
    getRole() {
        return "Manager";
    }
}