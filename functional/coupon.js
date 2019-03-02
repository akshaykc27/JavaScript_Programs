/******************************************************************************
 *  Execution       :   1. default node          : cmd>node coupon.js 
 *                      
 * 
 *  Purpose         : Generate random coupon number 
 * 
 *  @description       
 * 
 *  @file           : coupon.js
 *  @overview       : Total random number needed to have all distinct numbers
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @since          : 26-feb-2019
 *
 ******************************************************************************/

 var Access= require('../utility/utility');
 var read= require("readline-sync");
 var num= read.questionInt("Enter the number");
 Access.coupon(num)
