/******************************************************************************
 *  Execution       :   1. default node          : cmd> node sumOfThree.js
 *                      
 * 
 *  Purpose         : A program with cubic running time. Read in N integers and
 *                    counts the   number of triples that sum to exactly 0.
 * 
 *  @description    
 * 
 *  @file           : sumOfThree.js
 *  @overview       : One Output is number of distinct triplets as well as the
 *                    second output is to print the distinct triplets.
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 26-feb-2019
 *
 ******************************************************************************/

var Access=require('../utility/utility');
var read=require("readline-sync");
var res=[];
res=Access.arrayCall();
var r=Access.sumOfThree(res);
if(r==false)
{
    console.log("no triplets");
}
