function hello(name){
    console.log('hi,'+name);
}
hello('wisdom');

//npm의 uglify 설치
///npm install uglify-js -g

//uglifyjs pretty.js
///=> function hello(name){console.log("hi,"+name)}hello("wisdom");

//uglifyjs pretty.js -m
///=> function hello(o){console.log("hi,"+o)}hello("wisdom");

//uglifyjs pretty.js -o uglified.js -m
///=> uglified.js 파일이 -m이 되어 만들어짐
