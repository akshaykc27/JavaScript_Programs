
/******************************************************************************
 *  Execution       :   1. default node          : cmd> node monthlyPayment.js
 *                      
 * 
 *  Purpose         : To calculate monthly payment.
 * 
 *  @description    
 * 
 *  @file           : monthlyPayment.js
 *  @overview       : Displays calculation results.
 *  @author         : Akshay k C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 1-Mar-2019
 *
 ******************************************************************************/


var pay=require('../utility/utility');
var read=require("readline-sync");
var p=read.questionInt("Enter the principle amount ");
var r=read.questionInt("enter the rate of intrest ");
var y=read.questionInt("enter the year ");
pay.monthlyPayment(p,r,y);
