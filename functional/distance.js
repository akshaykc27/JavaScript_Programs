/******************************************************************************
 *  Execution       :   1. default node          : cmd> node distance.js
 *                      
 * 
 *  Purpose         : To find the distance of two points 'x' & 'Y' from origin.
 * 
 *  @description    
 * 
 *  @file           : distance.js
 *  @overview       : The formulae to calculate distance = sqrt(x*x + y*y).
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 27-feb-2019
 *
 ******************************************************************************/

var dist=require('../utility/utility')
var read=require("readline-sync");
var x=read.questionInt("enter the x value ");
var y=read.questionInt("enter the value of Y ");
var res=dist.distance(x,y)
console.log("the euclidian distance is : " + res);