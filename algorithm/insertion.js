/******************************************************************************
 *  Execution       :   1. default node          : cmd> node insertion.js
 *                      
 * 
 *  Purpose         : Reads in array from standard input and prints them in 
 *                    sorted order.Uses insertion sort.
 * 
 *  @description    
 * 
 *  @file           : insertion.js
 *  @overview       : Print the Sorted List
 *  @author         : Akshay k C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 28-feb-2019
 *
 ******************************************************************************/
var ins=require('../utility/utility');
var read=require('readline-sync');
var num=read.questionInt("enter the  number of elements ")
var arr=ins.createArray(num,read);
arr=ins.insertionSort(arr);
console.log(arr);