/******************************************************************************
 *  Execution       :   1. default node          : cmd>node flipCoin.js 
 *                      
 * 
 *  Purpose         : To flip coin and get the percentage of head and tails obtained.
 * 
 *  @description    
 * 
 *  @file           : flipCoin.js
 *  @overview       : Sum the number of times the count of heads and tails,calculate the percentage.
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 26-feb-2019
 *
 ******************************************************************************/

var Access=require('../utility/utility');
var read=require("readline-sync");
var number=read.questionInt("Enter the number of times the coin has been flipped ");
Access.flipCoin(number)