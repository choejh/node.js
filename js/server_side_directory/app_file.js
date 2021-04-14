var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

var fs = require('fs');

app.locals.pretty = true;

app.set('views','./views_file');
app.set('view engine','jade');

app.get('/topic/new', function(req,res){
    res.render('new');
});

app.get('/topic', function(req,res){
    fs.readdir('data',function(err,files){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.render('view',{topics:files});
         })  
});


app.post('/topic', function(req,res){
   var title = req.body.title;
   var description = req.body.description;
   fs.writeFile('data/'+title,description,function(err){
    if(err){
        res.status(500).send('Internal Server Error');
    }
    res.send('success~!');
   });
})
app.listen(3000, function(){
    console.log('connected,3000 port!')
});

