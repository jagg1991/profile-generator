const Manager = require('../lib/Manager');

describe('Manager', () => {

    describe('Initialization', () => {
        it('should create a manager with name, id, email, and officeNumber', () => {
            const manager = new Manager('Giannis', 2, 'giannisantetokounmpo@bucks.com', 100);

            expect(manager.name).toEqual('Giannis');
            expect(manager.id).toEqual(2);
            expect(manager.email).toEqual('giannisantetokounmpo@bucks.com');
            expect(manager.officeNumber).toEqual(100);
        });
    })

    describe('getName', () => {
        it('should return a manager\'s name', () => {
            const manager = new Manager('Giannis', 2, 'giannisantetokounmpo@bucks.com', 100);

            expect(manager.getName()).toEqual('Giannis');
        })
    })

    describe('getId', () => {
        it('should return a manager\'s id', () => {
            const manager = new Manager('Giannis', 2, 'giannisantetokounmpo@bucks.com', 100);

            expect(manager.getId()).toEqual(2);
        })
    })

    describe('getEmail', () => {
        it('should return a manager\'s email', () => {
            const manager = new Manager('Giannis', 2, 'giannisantetokounmpo@bucks.com', 100);

            expect(manager.getEmail()).toEqual('giannisantetokounmpo@bucks.com');
        })
    })

    describe('getOfficeNumber', () => {
        it('should return a manager\'s office number', () => {
            const manager = new Manager('Giannis', 2, 'giannisantetokounmpo@bucks.com', 100);

            expect(manager.getOfficeNumber()).toEqual(100);
        })
    })

    describe('getRole', () => {
        it('should return a manager\'s role', () => {
            const manager = new Manager('Giannis', 2, 'giannisantetokounmpo@bucks.com', 100);

            expect(manager.getRole()).toEqual('Manager');
        })
    })
})