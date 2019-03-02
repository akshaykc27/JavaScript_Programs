/******************************************************************************
 *  Execution       :   1. default node          : cmd> node quadratic.js
 *                      
 * 
 *  Purpose         : Find the roots of quadratic equation.
 * 
 *  @description    
 * 
 *  @file           : quadratic.js
 *  @overview       : Result as quadratic equation output.
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 27-feb-2019
 *
 ******************************************************************************/

var quad=require('../utility/utility');
var read=require("readline-sync");
var a=read.questionInt("enter the value of a");
var b=read.questionInt("enter the value of b");
var c=read.questionInt("enter the value of c");
quad.quadraticEquation(a,b,c);