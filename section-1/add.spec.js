const add=require('./add')


const result=add(1,3)

if (result===4) {
    console.log('test pass');
} else {
throw new Error('expect 1+3 to equal 4')
}
