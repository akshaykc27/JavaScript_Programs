/******************************************************************************
 *  Execution       :   1. default node          : cmd> node binaryConv.js
 *                      
 * 
 *  Purpose         : Convert decimal to binary numbers
 * 
 *  @description    
 * 
 *  @file           : binaryConv.js
 *  @overview       : prints binary numbers
 *  @author         : Akshay k C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 1-mar-2019
 *
 ******************************************************************************/
var conv=require('../utility/utility');
var read=require("readline-sync");
var num=read.questionInt("enter the decimal number");
var b=conv.toBinary1(num);
console.log("the binary of "+num+" is " + b);