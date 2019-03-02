/******************************************************************************
 *  Execution       :   1. default node          : cmd> node guessedNumber.js
 *                      
 * 
 *  Purpose         : Find the number between start and end(mid)
 * 
 *  @description    
 * 
 *  @file           : guessedNumber.js
 *  @overview       : Print the intermediary number and the final answer
 *  @author         : Akshay k C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 28-feb-2019
 *
 ******************************************************************************/

var utility =require('../utility/utility');
var read = require('readline-sync');

var low = read.questionInt("Enter starting number : ");
var high=read.questionInt("Enter last number : ");
var n = utility.findNumber(low,high);
console.log("Your number is : "+n);
