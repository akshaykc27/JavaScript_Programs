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
            break;
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