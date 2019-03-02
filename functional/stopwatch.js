/******************************************************************************
 *  Execution       :   1. default node          : cmd>node stopwatch.js 
 *                      
 * 
 *  Purpose         : Stopwatch Program for measuring the time that elapses 
 *                    between the start and end clicks
 * 
 *  @description    
 * 
 *  @file           : stopwatch.js 
 *  @overview       : Print the elapsed time
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 27-feb-2019
 *
 ******************************************************************************/

var watch=require('../utility/utility');
var read=require("readline-sync");
var res=watch.stopwatch();
console.log("the time elasped is "+res+" seconds ");