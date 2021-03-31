const add=require('./add')

const assert=require('assert')

const result=add(1,3)
 
const expected=4


assert.equal(result,expected,'add function doesnt work' )

// if (result===expected) {
//     console.log('test pass');
// } else {
// throw new Error('expect 1+3 to equal 4')
// }
