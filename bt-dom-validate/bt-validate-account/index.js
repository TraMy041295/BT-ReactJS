function testAccount(str){
    const account = /^[_a-z0-9]{6,}$/;
    if (account.test(str)){
        console.log("account hợp lệ")
    }
    else {console.log("account không hợp lệ")}

}

testAccount("123abc_")
testAccount("_abc123")
testAccount("______")
testAccount("123456")
testAccount("abcdefg")
testAccount(".@")