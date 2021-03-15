const Manager = require('../lib/Manager');

describe('Manager', () => {

    describe('Initialization', () => {
        it('should create a manager with name, id, email, and officeNumber', () => {
            const manager = new Manager('Genghis', 2, 'gkhan@empire.com', 100);

            expect(manager.name).toEqual('Genghis');
            expect(manager.id).toEqual(2);
            expect(manager.email).toEqual('gkhan@empire.com');
            expect(manager.officeNumber).toEqual(100);
        });
    })

    describe('getName', () => {
        it('should return a manager\'s name', () => {
            const manager = new Manager('Genghis', 2, 'gkhan@empire.com', 100);

            expect(manager.getName()).toEqual('Genghis');
        })
    })

    describe('getId', () => {
        it('should return a manager\'s id', () => {
            const manager = new Manager('Genghis', 2, 'gkhan@empire.com', 100);

            expect(manager.getId()).toEqual(2);
        })
    })

    describe('getEmail', () => {
        it('should return a manager\'s email', () => {
            const manager = new Manager('Genghis', 2, 'gkhan@empire.com', 100);

            expect(manager.getEmail()).toEqual('gkhan@empire.com');
        })
    })

    describe('getOfficeNumber', () => {
        it('should return a manager\'s office number', () => {
            const manager = new Manager('Genghis', 2, 'gkhan@empire.com', 100);

            expect(manager.getOfficeNumber()).toEqual(100);
        })
    })

    describe('getRole', () => {
        it('should return a manager\'s role', () => {
            const manager = new Manager('Genghis', 2, 'gkhan@empire.com', 100);

            expect(manager.getRole()).toEqual('Manager');
        })
    })
})