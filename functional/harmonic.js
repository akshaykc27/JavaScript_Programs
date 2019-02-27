/******************************************************************************
 *  Execution       :   1. default node          : cmd> node harmonic.js
 *                      
 * 
 *  Purpose         : Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N 
 * 
 *  @description    
 * 
 *  @file           : harmonic.js
 *  @overview       : Print the Nth Harmonic Value
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 26-feb-2019
 *
 ******************************************************************************/
var Access=require('../utility/utility');
var read= require('readline-sync');
var num=read.questionInt("Enter the Nth number ");
Access.harmonic(num)