/******************************************************************************
 *  Execution       :   1. default node          : cmd> node bubblesort.js
 *                      
 * 
 *  Purpose         : Reads in integers prints them in sorted order using Bubble Sort
 * 
 *  @description    
 * 
 *  @file           : bubblesort.js
 *  @overview       : Print the Sorted List
 *  @author         : Akshay k C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 28-feb-2019
 *
 ******************************************************************************/
var bub=require('../utility/utility');
var read=require("readline-sync");
var num=read.questionInt("enter the number of elements ");
var arr=bub.createArray(num,read);
arr=bub.bubbleSort(arr);
console.log(arr);
