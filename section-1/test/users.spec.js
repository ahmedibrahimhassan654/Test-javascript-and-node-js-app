const {findUserByEmail,findUserById}=require('../users')

const assert=require('assert')



describe('findUserByEmail function',()=>{
    it('find user by email',done=>{
        findUserByEmail('miss_myers@models.co.uk').then(res=>{
            assert.equal(res.message,'User found successfully.')
            done()
        })
    })

    it('find user by email using return promise method',()=>{
       return findUserByEmail('miss_myers@models.co.uk').then(res=>{
            assert.equal(res.message,'User found successfully.')
            
        })
    })

    it('find user by email using async await ',async()=>{
        const response=await findUserByEmail('miss_myers@models.co.uk')
        assert.equal(response.message,'User found successfully.')
             
         
     })

     it('rejects with error if user with email was not found',()=>{
         return findUserByEmail('miss_myers@models.co').then(()=>{
             assert.fail('expected findUserByEmail function to rejected')
         },error=>{
            assert.equal(error.message,'User with email: miss_myers@models.co was not found.')
         })
     })

}) 


describe('findUserById function',()=>{
    it('find user by Id using async await ',async()=>{
        const response=await findUserById(2)
        assert.equal(response.message,'User found successfully.')
             
         
     })
     it('rejects with error if user with id was not found',()=>{
        return findUserById(92).then(()=>{
            assert.fail('expected findUserById function to rejected')
        },error=>{
           assert.equal(error.message,'User with id: 92 was not found.')
        })
    })
}) 