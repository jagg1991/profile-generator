const Engineer = require('../lib/Engineer');

describe('Engineer', () => {

    describe('Initialization', () => {
        it('should create an engineer with name, id, email, and github', () => {
            const engineer = new Engineer('Ted', 3, 'tedtalk@gmail.com', 'tedtalk');

            expect(engineer.name).toEqual('Ted');
            expect(engineer.id).toEqual(3);
            expect(engineer.email).toEqual('tedtalk@gmail.com');
            expect(engineer.github).toEqual('tedtalk');
        });
    })

    describe('getName', () => {
        it('should return an engineer\'s name', () => {
            const engineer = new Engineer('Ted', 3, 'tedtalk@gmail.com', 'tedtalk');

            expect(engineer.getName()).toEqual('Ted');
        })
    })

    describe('getId', () => {
        it('should return an engineer\'s id', () => {
            const engineer = new Engineer('Ted', 3, 'tedtalk@gmail.com', 'tedtalk');

            expect(engineer.getId()).toEqual(3);
        })
    })

    describe('getEmail', () => {
        it('should return an engineer\'s email', () => {
            const engineer = new Engineer('Ted', 3, 'tedtalk@gmail.com', 'tedtalk');

            expect(engineer.getEmail()).toEqual('tedtalk@gmail.com');
        })
    })

    describe('getGithub', () => {
        it('should return an engineer\'s github user name', () => {
            const engineer = new Engineer('Ted', 3, 'tedtalk@gmail.com', 'tedtalk');

            expect(engineer.getGithub()).toEqual('tedtalk');
        })
    })

    describe('getRole', () => {
        it('should return an engineer\'s role', () => {
            const engineer = new Engineer('Ted', 3, 'tedtalk@gmail.com', 'tedtalk');

            expect(engineer.getRole()).toEqual('Engineer');
        })
    })
})