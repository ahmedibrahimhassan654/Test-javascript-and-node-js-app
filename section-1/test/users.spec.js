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
        const response=await findUserByEmail('miss_myers@models.co')
        assert.equal(response.message,'User found successully.')
             
         
     })
}) 