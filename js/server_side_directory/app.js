var express = require('express');
var app = express();

//정적인 파일이 위치할 디렉토리 지정
app.use(express.static('public'));

//사용자가 웹서버에 접속할때 get/post방식으로 접속
//일반적으로 url접속은 get방식!
//get방식 접속 사용자 2번째 인자로 전달한 함수가 실행되도록 약속
//get(~) <- 라우터라 말함 (사용자의 요청과 처리인 controller를 중개시켜주는 역할)



app.get('/',function(req,res){
    res.send('hello home page');
}); 

app.get('/route',function(req,res){
    res.send('hello router, <img src="/panda.jpg">')}
);

app.get('/login',function(req,res){
    res.send('Login please');
}); 

app.get('/dynamic',function(req,res){
    var lis = '';
    for(var i=0; i<5; i++){
        lis = lis + '<li>coding</li>';
    }
    var time = Date();

    
    var output = 
    `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title></title>
        </head>
        <body>
            Hello,Dynamic!
            동적이기 때문에
            cmd에서 node 를 껐다가 켜야 나와!
            <ul>
            ${lis}
            </ul>
            ${time}
        </body>
    </html>`;
    res.send(output);
});



app.listen(3000,function(){
    console.log('Connected 3000 port!');
});

