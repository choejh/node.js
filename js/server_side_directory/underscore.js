//모듈을 가져와서 객체 리턴 해줌
var _ = require('underscore');

var arr = [3,6,9,1,12];
console.log(arr[0]);
console.log(_.first(arr));
console.log(arr[arr.length-1]);
console.log(_.last(arr));

