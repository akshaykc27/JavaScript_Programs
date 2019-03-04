
/******************************************************************************
 *  Execution       :   1. default node          : cmd> node temperature.js
 *                      
 * 
 *  Purpose         : Given the temperature in fahrenheit as input outputs the 
 *                    temperature in Celsius or viceversa
 * 
 *  @description    
 * 
 *  @file           : temperature.js
 *  @overview       : Prints converted output.
 *  @author         : Akshay k C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 1-Mar-2019
 *
 ******************************************************************************/


var conv=require('../utility/utility');
var read=require("readline-sync");
console.log("Press 0 to convert Farenheit to Celsius");
console.log("Press 1 to convert Celsius to Farenheit");
const choice=read.questionInt();
console.log("enter the temperature");
var temp=read.questionInt();
conv.temperatureConversion(choice,temp);

