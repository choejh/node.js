var fs = require('fs');


//Sync
console.log(1);
var data = fs.readFileSync('data.txt',{encoding:'utf8'});
console.log(data);

//fs.readFile(path[, options], callback)

//Async
console.log(2);
fs.readFile('data.txt',{encoding:'utf8'},
function(err,data){ 
    console.log(3);
    console.log(data); 
});

console.log(4);

//결과
//동기
//1
//Hello Sync And ASync

//비동기
//2
//4
//3
//Hello Sync And ASync

//그래서 노드js는 빠른게 장점 (물론 단점도 있다!)
