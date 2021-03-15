const Engineer = require('../lib/Engineer');

describe('Engineer', () => {

    describe('Initialization', () => {
        it('should create an engineer with name, id, email, and github', () => {
            const engineer = new Engineer('Danny', 3, 'danny@techdood.com', 'techdood');

            expect(engineer.name).toEqual('Danny');
            expect(engineer.id).toEqual(3);
            expect(engineer.email).toEqual('danny@techdood.com');
            expect(engineer.github).toEqual('techdood');
        });
    })

    describe('getName', () => {
        it('should return an engineer\'s name', () => {
            const engineer = new Engineer('Danny', 3, 'danny@techdood.com', 'techdood');

            expect(engineer.getName()).toEqual('Danny');
        })
    })

    describe('getId', () => {
        it('should return an engineer\'s id', () => {
            const engineer = new Engineer('Danny', 3, 'danny@techdood.com', 'techdood');

            expect(engineer.getId()).toEqual(3);
        })
    })

    describe('getEmail', () => {
        it('should return an engineer\'s email', () => {
            const engineer = new Engineer('Danny', 3, 'danny@techdood.com', 'techdood');

            expect(engineer.getEmail()).toEqual('danny@techdood.com');
        })
    })

    describe('getGithub', () => {
        it('should return an engineer\'s github user name', () => {
            const engineer = new Engineer('Danny', 3, 'danny@techdood.com', 'techdood');

            expect(engineer.getGithub()).toEqual('techdood');
        })
    })

    describe('getRole', () => {
        it('should return an engineer\'s role', () => {
            const engineer = new Engineer('Danny', 3, 'danny@techdood.com', 'techdood');

            expect(engineer.getRole()).toEqual('Engineer');
        })
    })
})