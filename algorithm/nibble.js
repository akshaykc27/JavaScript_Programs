/******************************************************************************
 *  Execution       :   1. default node          : cmd> node nibble.js
 *                      
 * 
 *  Purpose         : i. Swap nibbles and find the new number.
                     ii. Find the resultant number is the number is a power of 2.
 * 
 *  @description    
 * 
 *  @file           : nibble.js
 *  @overview       : swaps the nibbles 
 *  @author         : Akshay k C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 1-mar-2019
 *
 ******************************************************************************/

var nib=require('../utility/utility');
var read=require("readline-sync");
var num=read.questionInt("enter the number in decimal format ");
var sum=nib.nibbleSwap(num);
console.log(sum);