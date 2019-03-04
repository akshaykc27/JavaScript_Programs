/******************************************************************************
 *  Execution       :   1. default node          : cmd> node vendingmachine.js
 *                      
 * 
 *  Purpose         : Program to calculate the minimum number of Notes as well as 
 *                    the Notes to be returned by the Vending Machine as a Change

 * 
 *  @description    
 * 
 *  @file           : vendingmachine.js
 *  @overview       : Two Outputs - 
 *                     one the number of minimum Note needed to give the change and
 *                     second list of Rs Notes that would given in the Change
 *  @author         : Akshay k C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 1-Mar-2019
 *
 ******************************************************************************/

var ven=require('../utility/utility');
var read=require("readline-sync");
var change=read.questionInt("enter the change to be given ");
var arr=[1000,500,100,50,10,5,2,1]
ven.vendingMachine(change,arr);