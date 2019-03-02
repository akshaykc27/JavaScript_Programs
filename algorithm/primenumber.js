/******************************************************************************
 *  Execution       :   1. default node          : cmd> node primenumber.js
 *                      
 * 
 *  Purpose         : Prints N th numbers of prime numbers
 * 
 *  @description    
 * 
 *  @file           : primenumber.js
 *  @overview       : Prints prime numbers.
 *  @author         : Akshay k C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 28-feb-2019
 *
 ******************************************************************************/

var prime=require('../utility/utility');
const read=require("readline-sync");
var n=read.questionInt("enter a number between 0 to 1000 ");
console.log("the prime numbers within "+n+" are");
    for(let i=2;i<n;i++)
    {
        
        if(prime.isPrime(i))
        {   
             console.log(i);
        }
    }

