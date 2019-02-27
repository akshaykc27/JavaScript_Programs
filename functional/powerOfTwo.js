/******************************************************************************
 *  Execution       :   1. default node          : cmd> node powerOfTwo.js
 *                      
 * 
 *  Purpose         : This program takes a command-line argument N and prints a table 
 *                    of the powers of 2 that are less than or equal to 2^N.
 * 
 *  @description    
 * 
 *  @file           : powerOfTwo.js
 *  @overview       : print power of 2 numbers until N th number.
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 26-feb-2019
 *
 ******************************************************************************/
var Access=require('../utility/utility');
const readline=require('readline-sync');
var number=readline.questionInt("please enter Number :");
Access.powerOfTwo(number);