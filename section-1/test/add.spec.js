const add=require('../add')

// const assert=require('assert')


describe('The Add Function',()=>{
    it('add two numbers',()=>{
        const actual=add(1,3) 
        const expected=4
        // assert.equal(actual,expected,'add function doesnt work' )
        expect(actual).toBe(expected)
    })
})
// const actual=add(1,3)
// const expected=4
// assert.equal(actual,expected,'add function doesnt work' )


