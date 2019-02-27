var Access=require('../utility/utility');
var read=require("readline-sync");
var number=read.questionInt("Enter the number of times the coin has been flipped");
Access.flipCoin(number)