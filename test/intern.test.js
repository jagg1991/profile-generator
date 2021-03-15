const Intern = require('../lib/Intern');

describe('Intern', () => {

    describe('Initialization', () => {
        it('should create an intern with name, id, email, and school', () => {
            const intern = new Intern('Penelope', 10, 'penelope@scu.edu', 'Santa Clara University');

            expect(intern.name).toEqual('Penelope');
            expect(intern.id).toEqual(10);
            expect(intern.email).toEqual('penelope@scu.edu');
            expect(intern.school).toEqual('Santa Clara University');
        });
    })

    describe('getName', () => {
        it('should return an intern\'s name', () => {
            const intern = new Intern('Penelope', 10, 'penelope@scu.edu', 'Santa Clara University');

            expect(intern.getName()).toEqual('Penelope');
        })
    })

    describe('getId', () => {
        it('should return an intern\'s id', () => {
            const intern = new Intern('Penelope', 10, 'penelope@scu.edu', 'Santa Clara University');

            expect(intern.getId()).toEqual(10);
        })
    })

    describe('getEmail', () => {
        it('should return an intern\'s email', () => {
            const intern = new Intern('Penelope', 10, 'penelope@scu.edu', 'Santa Clara University');

            expect(intern.getEmail()).toEqual('penelope@scu.edu');
        })
    })

    describe('getSchool', () => {
        it('should return an intern\'s school', () => {
            const intern = new Intern('Penelope', 10, 'penelope@scu.edu', 'Santa Clara University');

            expect(intern.getSchool()).toEqual('Santa Clara University');
        })
    })

    describe('getRole', () => {
        it('should return an intern\'s role', () => {
            const intern = new Intern('Penelope', 10, 'penelope@scu.edu', 'Santa Clara University');

            expect(intern.getRole()).toEqual('Intern');
        })
    })
})