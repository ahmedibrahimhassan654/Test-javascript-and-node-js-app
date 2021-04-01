const {parse,stringify}=require('../parse-strigify')
const assert=require('assert')



describe('the strigify function ',()=>{
    it('should strigify an object into valid query string',()=>{
        const actual=stringify({by:'ahmedibrahim'})
        const expected='by=ahmedibrahim'
   expect(actual).toBe(expected)
      //  assert.equal(actual,expected ,`it should be ${expected}`)
    })
})


describe('the parse function ',()=>{
    it('should parse a query string into an object ',()=>{
        const actual=parse('by=ahmedibrahim')
        const expected={by:'ahmedibrahim'}
         expect(actual).toEqual(expected)
        //assert.deepEqual(actual,expected ,`it should be ${expected}`)
    })
})