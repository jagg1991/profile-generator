const Intern = require('../lib/Intern');

describe('Intern', () => {

    describe('Initialization', () => {
        it('should create an intern with name, id, email, and school', () => {
            const intern = new Intern('Amber', 10, 'amber@gmail.com', 'UC Davis');

            expect(intern.name).toEqual('Amber');
            expect(intern.id).toEqual(10);
            expect(intern.email).toEqual('amber@gmail.com');
            expect(intern.school).toEqual('UC Davis');
        });
    })

    describe('getName', () => {
        it('should return an intern\'s name', () => {
            const intern = new Intern('Amber', 10, 'amber@gmail.com', 'UC Davis');

            expect(intern.getName()).toEqual('Amber');
        })
    })

    describe('getId', () => {
        it('should return an intern\'s id', () => {
            const intern = new Intern('Amber', 10, 'amber@gmail.com', 'UC Davis');

            expect(intern.getId()).toEqual(10);
        })
    })

    describe('getEmail', () => {
        it('should return an intern\'s email', () => {
            const intern = new Intern('Amber', 10, 'amber@gmail.com', 'UC Davis');

            expect(intern.getEmail()).toEqual('amber@gmail.com');
        })
    })

    describe('getSchool', () => {
        it('should return an intern\'s school', () => {
            const intern = new Intern('Amber', 10, 'amber@gmail.com', 'UC Davis');

            expect(intern.getSchool()).toEqual('UC Davis');
        })
    })

    describe('getRole', () => {
        it('should return an intern\'s role', () => {
            const intern = new Intern('Amber', 10, 'amber@gmail.com', 'UC Davis');

            expect(intern.getRole()).toEqual('Intern');
        })
    })
})