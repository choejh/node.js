var express = require('express');
var app = express();
//코드 예쁘게
app.locals.pretty = true;
//템플릿 엔진
app.set('view engine', 'jade');
app.set('views','./views'); //jade를 여기 넣어야한다.




//정적인 파일이 위치할 디렉토리 지정
app.use(express.static('public'));


//사용자가 웹서버에 접속할때 get/post방식으로 접속
//일반적으로 url접속은 get방식!
//get방식 접속 사용자 2번째 인자로 전달한 함수가 실행되도록 약속
//get(~) <- 라우터라 말함 (사용자의 요청과 처리인 controller를 중개시켜주는 역할)


//form
app.get('/form',function(req,res){
    res.render('form');
})

//form-get
app.get('/form_receiver', function(req,res){
    var title = req.query.title;
    res.send(title);
})

//form-post
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.post('/form_receiver',function(req,res){
    var title = req.body.title;
    res.send(title);
})

//쿼리스트링
app.get('/topic', function(req,res){
    var topics = [
        'Javascript is ...',
        'Nodejs is ...',
        'Express is ...'
    ];
    var output = `
        <a href="/topic?id=0">JAVAScript</a><br>
        <a href="/topic?id=1">Nodejs</a><br>
        <a href="/topic?id=2">Express</a><br>
        ${topics[req.query.id]}
    `
    res.send(output);
})

//시맨틱 url
app.get('/topic2/:id', function(req,res){
    var topics = [
        'Javascript is ...',
        'Nodejs is ...',
        'Express is ...'
    ];
    var output = `
        <a href="/topic2/0">JAVAScript</a><br>
        <a href="/topic2/1">Nodejs</a><br>
        <a href="/topic2/2">Express</a><br>
        ${topics[req.params.id]}
    `
    res.send(output);
})

app.get('/topic/:id/:mode',function(req,res){
    res.send(req.params.id+','+req.params.mode);
})




app.get('/template',function(req,res){
    res.render('temp',{time:Date(),_title:'jade'}); //temp파일 읽어오고 렌더링

})


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

