/******************************************************************************
 *  Execution       :   1. default node          : cmd> node windChill.js
 *                      
 * 
 *  Purpose         : Program to windchill. 
 * 
 *  @description    
 * 
 *  @file           : windChill.js
 *  @overview       : Calculation done.
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 27-feb-2019
 *
 ******************************************************************************/

var wind=require('../utility/utility');
var read=require("readline-sync");
var t=read.questionInt("enter the temperature in farenheit(less than 50) ");
var v=read.questionInt("enter the wind speed(3<v<120 ");
wind.windChill(t,v);
