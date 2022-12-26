// var a = true;
// var a = "nimadur";
// a = " qiymat almashdi";

// console.log(a);

//-------------let  -------- //

let b = false;
b = "kim";

console.log(b);

//.--------.const--------------//

const userName = "John"

console.log(userName)

//----------solishtitrish-----//$RECYCLE.BIN

let number = 12;

console.log(12 == '12') //  true


number = 12;
console.log(number == '12') //true

number = 12;
console.log(true == 'absd') //false

number = 12;
console.log(true == 'true') //false


number = 12;
console.log(12 == '12') //false


number = 12;
const result = 12 + 12;
console.log(result); // 24


number = 12;
const result1 = 12 + '12';
console.log(result1); // 1212

number = 12;
const result2 = 12 + 2 + '5';
console.log(result2); //145

number = 12;
const result3 = '5' + 12 + 2;
console.log(result3); // 5122

number = 12;
const result4 = '5 ' - 3;
console.log(result4); //2

const result5 = 5 - 'salom';
console.log(result5); //NaN

const result6 = 5 - Number('salom');
console.log(result6); //NaN

const result7 = 5 + Number('salom');
console.log(result7); //NaN

const result8 = 5 + "3";
const result9 = 5 - "3";
console.log(result8); //53
console.log(result9); //2