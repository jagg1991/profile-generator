const Employee = require('../lib/Employee');

describe('Employee', () => {

    describe('Initialization', () => {
        it('should create an employee with name, id, and email', () => {
            const employee = new Employee('Sacha', 1, 'sacha@baroncohen.com');

            expect(employee.name).toEqual('Sacha');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('sacha@baroncohen.com');
        });
    })

    describe('getName', () => {
        it('should return an employee\'s name', () => {
            const employee = new Employee('Sacha', 1, 'sacha@baroncohen.com');

            expect(employee.getName()).toEqual('Sacha');
        })
    })

    describe('getId', () => {
        it('should return an employee\'s id', () => {
            const employee = new Employee('Sacha', 1, 'sacha@baroncohen.com');

            expect(employee.getId()).toEqual(1);
        })
    })

    describe('getEmail', () => {
        it('should return an employee\'s email', () => {
            const employee = new Employee('Sacha', 1, 'sacha@baroncohen.com');

            expect(employee.getEmail()).toEqual('sacha@baroncohen.com');
        })
    })

    describe('getRole', () => {
        it('should return an employee\'s role', () => {
            const employee = new Employee('Sacha', 1, 'sacha@baroncohen.com');

            expect(employee.getRole()).toEqual('Employee');
        })
    })
})