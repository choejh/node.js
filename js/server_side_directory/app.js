var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('hello home page');
}); 
//사용자가 웹서버에 접속할때 get/post방식으로 접속
//일반적으로 url접속은 get방식!
//get방식 접속 사용자 2번째 인자로 전달한 함수가 실행되도록 약속
//get(~) <- 라우터라 말함 (사용자의 요청과 처리인 controller를 중개시켜주는 역할)

app.get('/login',function(req,res){
    res.send('Login please');
}); 


app.listen(3000,function(){
    console.log('Connected 3000 port!');
});

