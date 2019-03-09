/******************************************************************************
 *  Execution       :   1. default node          : cmd>node dayOfWeek.js 
 *                      
 * 
 *  Purpose         : Entered date comes which day
 * 
 *  @description    
 * 
 *  @file           : dayOfWeek.js
 *  @overview       : Output prints like 'sunday'
 *  @author         : Akshay k C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 1-Mar-2019
 *
 ******************************************************************************/

var day = require('../utility/utility');
var read = require("readline-sync");
var d = read.questionInt("enter the date ");
var m = read.questionInt("enter the month ");
var y = read.questionInt("enter the year ");
var num = day.dayOfWeek(d, m, y);
var res = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(num)
if (num <= res.length) {
    console.log("that date falls on " + res[num]);

}
else {
    console.log("Invalid Input");
}