/******************************************************************************
 *  Execution       :   1. default node          : cmd> node gambler.js
 *                      
 * 
 *  Purpose         : To play Gambling game till player reaches his goal or losses all his money.
 * 
 *  @description    
 * 
 *  @file           : gambler.js
 *  @overview       : To play Gambling game till player reaches his goal or losses all his money.
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 26-feb-2019
 *
 ******************************************************************************/

 var Access=require('../utility/utility');
 var read=require("readline-sync");
 var stake=read.questionInt("Enter the stake ");
 var goal=read.questionInt("enter the goal ");
 var trials=read.questionInt("enter the number of trails ");
 Access.gambler(stake,goal,trials)