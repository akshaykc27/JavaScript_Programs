/******************************************************************************
 *  Execution       :   1. default node          : cmd> node anagram.js
 *                      
 * 
 *  Purpose         : One string is an anagram of another if the second is simply
 *                    a rearrangement of the first. and check anagrams.
 * 
 *  @description    
 * 
 *  @file           : anagram.js
 *  @overview       : The Two Strings are Anagram or not.
 *  @author         : Akshay k C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 28-feb-2019
 *
 ******************************************************************************/

var anagram=require('../utility/utility');
var read=require("readline-sync");
var str1=read.question("enter the first string ");
var str2=read.question("enter the second string ");
var res=anagram.isAnagram(str1,str2);
if(res)
console.log(" it is an anagram");
else 
console.log("it is not an anagram");