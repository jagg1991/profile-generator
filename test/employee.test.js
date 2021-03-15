const Employee = require('../lib/Employee');

describe('Employee', () => {

    describe('Initialization', () => {
        it('should create an employee with name, id, and email', () => {
            const employee = new Employee('John', 1, 'johnsmith@hotmail.com');

            expect(employee.name).toEqual('John');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('johnsmith@hotmail.com');
        });
    })

    describe('getName', () => {
        it('should return an employee\'s name', () => {
            const employee = new Employee('John', 1, 'johnsmith@hotmail.com');

            expect(employee.getName()).toEqual('John');
        })
    })

    describe('getId', () => {
        it('should return an employee\'s id', () => {
            const employee = new Employee('John', 1, 'johnsmith@hotmail.com');

            expect(employee.getId()).toEqual(1);
        })
    })

    describe('getEmail', () => {
        it('should return an employee\'s email', () => {
            const employee = new Employee('John', 1, 'johnsmith@hotmail.com');

            expect(employee.getEmail()).toEqual('johnsmith@hotmail.com');
        })
    })

    describe('getRole', () => {
        it('should return an employee\'s role', () => {
            const employee = new Employee('John', 1, 'johnsmith@hotmail.com');

            expect(employee.getRole()).toEqual('Employee');
        })
    })
})