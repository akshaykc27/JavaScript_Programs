var per=require('../utility/utility');
var read=require("readline-sync");
var str=read.question("enter the string ");
var arr=per.permutationString(str);
console.log(arr)
//console.log(arr);