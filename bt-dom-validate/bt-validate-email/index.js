function testEmail(str){
    const email = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    console.log(email.test(str))
}

testEmail("a@gmail.com")
testEmail("ab@gmail.com")
testEmail("abc@gmail.com")
testEmail("@gmail.com")
testEmail("ab@gmail.")
testEmail("@#a@gmail.com")