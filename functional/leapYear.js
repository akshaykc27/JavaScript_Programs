/******************************************************************************
 *  Execution       :   1. default node          : cmd>node leapYear.js 
 *                      
 * 
 *  Purpose         : checks whether the given year is a leap year or not
 * 
 *  @description       
 * 
 *  @file           : leapYear.js
 *  @overview       : prints whether the year is a leap year or not
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 26-feb-2019
 *
 ******************************************************************************/

var Access=require('../utility/utility');
var read=require("readline-sync");
var year=read.questionInt("enter the year ");
Access.leapYear(year)