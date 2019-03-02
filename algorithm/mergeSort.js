/******************************************************************************
 *  Execution       :   1. default node          : cmd> node mergeSort.js
 *                      
 * 
 *  Purpose         : Reads in array from standard input and prints them in 
 *                    sorted order.Uses mergesort.
 * 
 *  @description    
 * 
 *  @file           : mergeSort.js
 *  @overview       : Print the Sorted List
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 1-Mar-2019
 *
 ******************************************************************************/

var merge=require('../utility/utility');
var read=require("readline-sync");
const num=read.questionInt("enter the number of elements ");
var arr=merge.createArray(num,read);
arr=merge.mergeSort(arr);
console.log(arr);