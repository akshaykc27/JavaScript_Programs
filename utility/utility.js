//const readline=require('readline-sync');

module.exports={

    //--------------------------------BUSINESS LOGIC'S----------------------------------------
/************************************* Flip Coin *****************************************/ 
/* Flip Coin
*---------------
* @purpose : By using random function flip the coin. accept user input to flip number of times to flip coin
*            and print the percentage of head vs tails
*
* @description : Declaring a function and passing the userinput for fliping the coin
*                no of times
* @function: coinflip takes the no of times to flip coin and print the percentage of
*            head and tail
*/ 

flipCoin(number)
{
    var head=0,tail=0;
    for(let i=0;i<=number;i++)
    {
        var random=Math.random();
        if(random>0.5) head++;
        else tail++;
    }
    console.log("percentage of head = "+ head*100/number+"%");
    console.log("percentage of head = "+ tail*100/number+"%");
},



/*********************************** Power of Two ****************************************/
/* 4. Power of Two
*------------------
* @purpose : To Accept value of "N" from user and prints a table of the powers of 2 
*that are less than or equal to 2^N. value of N should be less then 31.
*
* @description : Prints the value of two's power
*                
* @function: function checks the given number is less then 31, if less then 31, then it prints
the value of two's power i.e., 2^N value.
*/   


    powerOfTwo(number) {
		
		
		if(number<31)
		{
		 for(let i=0;i<=number;i++)
		 {
			var res=Math.pow(2,i);
            console.log("2 ^ "+i+" = "+res);
         }
        }
        else
         console.log("You are entered grearthan 31 so overflows..")
		
    },


    /**************************************** Leap year ************************************/
/*3. Leap year
*--------------
* @purpose : Accept four digit input of year from the user and check given inputs is Leap year or not
*
* @description : Declaring a function and passing the four digit number from  user input.
*                
* @function: function checks length of the given number, if length equals to 4, then it prints
*given number is Leap year or not.
*/ 

leapYear(year)
{
    if(year>999 && year<10000)
    {
        if(year%4==0 && year%100!=0 || year%400==0)
            console.log(year+" is a leap year");
            else
            console.log(year+" is not a leap year");

    }
    else
    console.log("enter a 4 digit year");
},

/* 5. Harmonic Number 
*--------------------
* @purpose : To generate Harmonic numbersTo Accept value of "N" from user and prints a table of the powers of 2 
*that are less than or equal to 2^N. 
*
* @description : To generate sum of harmonic numbers by accepting input from user.
*                
* @function: function Harmonic function takes user input and sum it number of times that user given.
*/

harmonic(num)
{
    var sum=0;
    if(num>0)
    {
        for(let i=1;i<=num;i++)
        {
            sum=sum+(1/i);
        }

    }
    console.log("Harmonic series sum is "+sum);
},


/*6. Factors 
*-----------
* @purpose : To compute the prime factorization of N using brute force.
*
* @description : To compute the prime factorization of N by accepting input from user.
*                
*/

factors(num)
{
    console.log("The prime factors of "+num+ " are ")
    for(let i=2;i*i<=num;i++)
    {
        while(num%i==0)
        {
            console.log(i+" ");
            num/=i;
        }
    }
    if(num>2)
    console.log(num);

},

//*************************************** Gambler **************************************/
/*7. Gambler 
*-----------
* @purpose : Simulates a gambler who start with some initial stake amount and place fair 1 bets until 
*he/she goes broke (i.e. has no money) or reach goal(gains expected amount). Keeps track of the number of 
*times he/she wins and the number of bets he/she makes. will run the experiment N times, 
*averages the results, and prints them out.
*
* @description : Play till the gambler is broke or has won
*                
*/

gambler(stake,goal,trials)
{
    var bets=0,wins=0;
    for(let i=0;i<trials;i++)
    {
        var cash=stake;
        while(cash>0 && cash<goal)
        {
            bets++;
            if(Math.random()>0.5) cash++;
            else cash--;

        }
        if(cash==goal) wins++;
    }    
        
        console.log(wins+"wins of "+trials);
        console.log("number of bets made = "+bets);
        console.log("win percentage="+wins*100/trials) 
},


//*********************************** Coupon Numbers **************************************/
/*8. Coupon Numbers
*
* @purpose : Given N distinct Coupon Numbers, how many random numbers do you 
*need to generate distinct coupon number? This program simulates this random process.
*
*
* @description : total random number needed to have all distinct numbers.
*                
*/

coupon(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr[i]=Math.floor(Math.random()*num);
        for(var j=0;j<i;j++)
        {
            if(arr[i]==arr[j])
            i--;
        }    
    }
    console.log(arr);
},


//*********************************** 2D Array **************************************/
/*9. 2D Array
*
* @purpose : Given N distinct Coupon Numbers, how many random numbers do you 
*need to generate distinct coupon number? This program simulates this random process.
*
*
* @description : total random number needed to have all distinct numbers.
*                
*/

twoDarray(m,n,arr)
{
    var read=require("readline-sync");
    for(let i=0;i<m;i++)
    {
        arr.push([]);
        for(let j=0;j<n;j++)
        {   
            
            arr[i][j]=read.question("Enter value :");

        }
    }
    return arr;

},

printArray(arr)
{
  for(let i=0;i<arr.length;i++)
  {
      console.log(arr[i]);
  }  
}, 

//***************************** Sum of three Integer adds to ZERO ***********************/
/*10. Sum of three Integer adds to ZERO
*------------------
* @purpose : A program with cubic running time. Read in N integers and counts the 
*number of triples that sum to exactly 0.
*
*
* @description :Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
*                
*/

arrayCall(arr)
{
    var read=require("readline-sync");
    var size=read.question("Enter the number of elements");
    console.log(" Enter the elements ")
    for(let i=0;i<size;i++)
    {
        arr[i]=read.question(" ")
    }
    return arr;

},

sumOfThree(res)
{
    var count=0;
    for(let i=0;i<res.length-2;i++)
    {
        for(let j=i+1;j<res.length-1;j++)
        {
            for(k=j+1;k<res.length;k++)
            {
                if(res[i]+res[j]+res[k]==0) 
                {
                    count++
                    console.log("[ "+res[i] +"," +res[j] +","+ res[k]  +"]");
                }
            }
        }
    }
    console.log("total count = "+count)
},

//************************************* Distance ***************************************/
/*11. Distance
*-------------
* @purpose : A program with cubic running time. Read in N integers and counts the 
*number of triples that sum to exactly 0.
*
*
* @description :Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
*                
*/

distance(x,y)
{
    var res=Math.sqrt(x*x+y*y);
    return res;

},

/*
* @description: return the time in seconds from 1970.
*/

currentSeconds()
{   
    var date=new Date();
    return date.getSeconds();
},

/*13. Stop Watch
*-------------
* @purpose : A Stopwatch Program for measuring the time that elapses between 
the start and end clicks
*
*
* @description :Measure the elapsed time between start and end.
*                
*/

stopwatch()
{
    var read=require("readline-sync");
    var start=0,stop=0;
    var t1=read.question("press 0 to start timer"); 
        start=this.currentSeconds();
        var t2=read.question("press 1 to stop the timer");
        stop=this.currentSeconds();
         console.log("the time elasped is "+(stop-start)+" seconds ");


    
},


//************************************* Tic-Tac-Toe ***************************************/
/*14. Tic-Tac-Toe
*-----------------
* @purpose : Program to play a Cross Game or Tic-Tac-Toe Game. 
*
*
* @description : Program to play a Cross Game or Tic-Tac-Toe Game. Player 1 is the 
* Computer and the Player 2 is the user. Player 1 take Random Cell that is the Column
* and Row. 
*                
*/

initializeGame()
{
    var game=[];
    for(let i=0;i<=2;i++)
    {
        game.push([]);
        for(let j=0;j<=2;j++)
        {
            game[i][j]='-';
        }
    }
    return game;
},

random()
{
    var value=Math.floor(Math.random()*3);
    console.log(value+1);
    return value;
},

mark(game,x,y,value)
{
    if(game[x][y]='-')
    game[x][y]=value;
    for(let i=0;i<=2;i++)
    {
        var print=[];
        for(j=0;j<=2;j++)
        print[j]=game[i][j];
        console.log(print);

    }
    return game;
    
},

computerPlayer(game)
{
    var arr;
    var flag=false;
    while(flag==false)
    {
        var x=this.random();
        var y=this.random();
        if(game[x][y]=='-')
        {
            arr=this.mark(game,x,y,'O');
            flag=true;
        }
    }
    return game;
},

userPlayer(game)
{
    var read=require("readline-sync");
    var flag=false;
    while(flag==false)
    {
        console.log("enter the number of rows and columns")
        var x=read.questionInt("enter the row value (1,2,3)")-1;
        var y=read.questionInt("enter the coloumn value (1,2,3)")-1;
        if(game[x][y]=='-')
        {
            this.mark(game,x,y,'X')
            flag=true;
        }
        else
        console.log("enter proper values");
    }
    return game;
},

check(game)
{
    for(let i=0;i<=2;i++)
    {
        if(game[i][0]==game[i][1] && game[i][1]==game[i][2])
        {
            if (game[i][0] == 'O' || game[i][0] == 'X') 

            return true;
        }

        if(game[0][i]==game[1][i] && game[1][i]==game[i][2])
        {
            if (game[0][i] == 'O' || game[0][i] == 'X') 

            return true;
        }
    } 
        var k=0;l=0;
        if(game[k][k]==game[k][k+1] && game[k+1][k+1]==game[k+2][k+2])
        {
            if (game[0][0] == 'O' || game[0][0] == 'X') 
            return true;
        }
        if(game[l][l+2]==game[l+1][l+1] && game[l+1][l+1]==game[l+2][l])
        {
            if (game[2][0] == 'O' || game[2][0] == 'X')
            return true;
        }
        return false;

    
},

 //************************************* Root of a equation ***************************************/
/*15. Root of a equation
*-----------------
* @purpose : To find the roots of the equation a*x*x + b*x + c. 
*Since the equation is x*x, hence there are 2 roots. The 2 roots of the equation can be 
*found using a formula.
*
*
* @description : Take a, b and c as input values to find the roots of x.
*                
*/

quadraticEquation(a,b,c)
{
    var delta=b*b-(4*a*c);
    var root1=(-b+(Math.sqrt(delta)))/(2*a);
    var root2=(-b-(Math.sqrt(delta)))/(2*a);
    console.log(" First root is : "+root1);
    console.log(" Second root is : "+root2);

},

//************************************* Wind Chill ***************************************/
/*16. Wind Chill
*-----------------
* @purpose : To find the windchill. The temperature t (in Fahrenheit) and the
* wind speed v (in miles per hour),the National Weather Service defines the 
*effective temperature (the wind chill) .
*
* @description : The formula is given by the national weather service. Formula is not
* valid if t is larger than 50 in absolute value or if v is larger than 120 or less than 3  
*                
*/

windChill(t,v)
{
    if(t<+50 && v>3 && v<120)
    {
        var result=35.74+0.6215*t+(0.4275*t-30.75)*(Math.pow(v,0.16));
        console.log("windchill is "+result);
    }
    else
    console.log("enter valid inputs");

},


}