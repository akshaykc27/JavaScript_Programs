var Access= require('../utility/utility');
var read=require("readline-sync");
var m=read.questionInt("enter the number of rows");
var n=read.questionInt("enter the number of coloumns");
var arr=[];
var result= Access.twoDarray(m,n,arr);
Access.printArray(result);