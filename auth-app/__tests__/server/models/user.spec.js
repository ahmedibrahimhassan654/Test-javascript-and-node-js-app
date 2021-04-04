import User from '../../../server/models/User'

import mongoose from "mongoose"
import Bcrypt from 'bcryptjs'

describe('The User model', () => {
    
    it('should hash the user password befour saving on data base ',async ()=>{
        //connect with db
        await mongoose.connect("mongodb://localhost:27017/auth-app_test")

        const user={
            name:'Test User 1',
          
            email: 'test@user.com',
          
            password: "password",
        }
        const createdUser=await User.create(user)

        expect(Bcrypt.compareSync(user.password,createdUser.password)).toBe(true)


    })

})
