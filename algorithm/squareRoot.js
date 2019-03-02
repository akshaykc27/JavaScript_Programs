/******************************************************************************
 *  Execution       :   1. default node          : cmd> node squareRoot.js
 *                      
 * 
 *  Purpose         : Compute the square root of a nonnegative number c given
 *                    in the input using Newton's method.
 * 
 *  @description    
 * 
 *  @file           : squareRoot.js
 *  @overview       : Square root of the given number.
 *  @author         : Akshay k C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 1-Mar-2019
 *
 ******************************************************************************/

var square=require('../utility/utility');
var read=require("readline-sync");
var c=read.questionInt("enter the number ");
square.squareRoot(c);
