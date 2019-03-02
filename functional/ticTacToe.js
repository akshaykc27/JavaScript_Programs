/******************************************************************************
 *  Execution       :   1. default node          : cmd> node node ticTacToe.js
 *                      
 * 
 *  Purpose         : Program to play a Cross Game or Tic-Tac-Toe Game. Player 1
 * 					  is the Computer and the Player 2 is the user. Player 1 take 
 * 					  Random Cell that is the Column and Row. 
 * 
 *  @description    
 * 
 *  @file           : ticTacToe.js
 *  @overview       : Print the Col and the Cell after every step
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 27-feb-2019
 *
 ******************************************************************************/

var Access=require('../utility/utility');
var read=require("readline-sync");
function ticTacToe(){
var flag=false;
var arr=Access.initializeGame();
console.log("Player 1: Computer , Symbol O");
console.log("Player 2: User , Symbol X");
var count=0;
while(count<=9)
{   
    arr=Access.computerPlayer(arr)
    count++;
    while(flag>4)
    {
        Access.check(arr)
        break;
    }
    if(flag)
    {
        console.log("COMPUTER WINS!!! Better luck next time");
        break;
    }
    else if(count==8)
    {
        console.log("IT'S A DRAW ");
        break;

    }

    arr=Access.userPlayer(arr)
    {
        while(flag>4)
        {
            Access.check(arr);

        }
        if(flag)
        {
            console.log("YESSSS!!! YOU WON ...");
            break;
        }
        count++
    }
}
console.log("GAME ENDS");
}

ticTacToe();