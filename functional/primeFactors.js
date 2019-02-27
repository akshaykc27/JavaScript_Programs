/******************************************************************************
 *  Execution       :   1. default node          : cmd>node primeFactors.js 
 *                      
 * 
 *  Purpose         : To get the prime factorization of user asked number.
 * 
 *  @description    
 * 
 *  @file           : primeFactors.js
 *  @overview       : To check the divisiblity from 2 to sqare root of the number Iteratively.
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 26-feb-2019
 *
 ******************************************************************************/
var Access=require('../utility/utility');
var read=require("readline-sync");
var num = read.questionInt("Enter the number");
Access.factors(num)