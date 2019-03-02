var palin=require('../utility/utility');
var read=require("readline-sync");
var str=read.question("enter the string ");
var res=palin.palindromeString(str);
if(res)
{
    console.log("it is a palindrome");
}
else
{
    console.log("it is not a palindrome");
}