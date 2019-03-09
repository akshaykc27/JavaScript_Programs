/******************************************************************************
 *  Execution       :   1. default node          : cmd>node twoDarray.js 
 *                      
 * 
 *  Purpose         : A library for reading in 2D arrays of integers from 
 *                    standard input and printing them out to standard output.
 * 
 *  @description    
 * 
 *  @file           : twoDarray.js 
 *  @overview       : Print function to print 2 Dimensional Array. In Java use 
 *                    PrintWriter with OutputStreamWriter to print the output to 
 *                    the screen.
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 27-feb-2019
 *
 ******************************************************************************/

var Access = require('../utility/utility');
var read = require("readline-sync");
var m = read.questionInt("enter the number of rows");
var n = read.questionInt("enter the number of coloumns");
var arr = [];
var result = Access.twoDarray(m, n, arr);
console.log(result);
Access.printArray(result);