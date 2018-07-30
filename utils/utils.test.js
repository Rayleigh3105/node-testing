const expect = require('expect')
const utils = require('./utils')

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add( 33, 11 );

            expect(res).toBe(44).toBeA('number');

        });
    })

    it('should square a number',  () => {
        var res = utils.square( 3 );

        expect(res).toBe(9).toBeA('number');
    });

    it('should expect some values', () => {
        //expect(12).toNotBe(22);
        //expect( {name: 'Moritz'} ).toEqual( {name: 'Moritz'} );
        //expect([2,3,4]).toInclude(5);
        expect({
            name: 'Moritz',
            age: 20,
            location: 'bayer'
        }).toInclude({
            age: 20
        })
    });

    it('should verify that first and last names are set',  () => {
        var user ={
            age: 20,
            location: 'Bayern'};
        var res = utils.setName( user, 'Moritz Vogt')

        expect(res)
            .toInclude({
                firstName: 'Moritz',
                lastName: 'Vogt'
            })
    });

// TESTING ASYNCHRONOUS FUNCTIONS
    it('should async add two numbers', ( done ) => {
        utils.asyncAdd( 4, 3, ( sum ) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        })
    });

    it('should async square two numbers', ( done ) => {
        utils.asyncSquare( 3, ( sum ) => {
            expect( sum ).toBe( 9 ).toBeA( 'number' );
            done();
        })
    });
})

