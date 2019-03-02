/******************************************************************************
 *  Execution       :   1. default node          : cmd> node palindrome.js
 *                      
 * 
 *  Purpose         : Print palindrome numbers
 * 
 *  @description    
 * 
 *  @file           : palindrome.js
 *  @overview       : prints palindrome
 *  @author         : Akshay k C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 28-feb-2019
 *
 ******************************************************************************/


var palin=require('../utility/utility');
var read=require("readline-sync");
var str=read.question("enter the number ");
var res=palin.isPalindrome(str);
if(res)
console.log("is a palindrome");
else
console.log("is not a palindrome");