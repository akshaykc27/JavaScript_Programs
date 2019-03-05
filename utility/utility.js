const read=require('readline-sync');

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
		
		
		if(number<=31)
		{
		 for(let i=0;i<=number;i++)
		 {
			var res=Math.pow(2,i);
            console.log("2 ^ "+i+" = "+res);
         }
        }
        else
         console.log("You have entered a number greater than 31. Please enter a number less than 31")
		
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
    console.log("Please enter a 4 digit year");
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
        var winP=wins*100/trials;
        var lossP=100-winP;
        console.log(wins+"wins of "+trials);
        console.log("number of bets made = "+bets);
        console.log("win percentage="+winP+"%");
        console.log("loss percentage = "+lossP+"%");

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

arrayCall()
{
    var arr=[];
    var size=read.questionInt("Enter the number of elements");
    console.log(" Enter the elements ")
    for(let i=0;i<size;i++)
    {
        arr[i]=read.questionInt(" ")
    }
    return arr;

},

sumOfThree(arr)
{
    console.log(arr);

    for (let i=0; i<arr.length-2;i++) 
    {
        for (let j =i+1;j<arr.length-1;j++) 
        {
            for (let k =j+1;k<arr.length;k++) 
            {
                if (arr[i]+arr[j]+arr[k] == 0) 
                {
                    console.log("your Triplets are " + arr[i] + " " + arr[j] + " " + arr[k]);
                    return true;
                }
            }

        }
       
    }
    return false;
    
},

//********************************** Permutation of String ***************************************/
/*12. Permutation of string
*--------------------------
---------------------------
* @purpose     : A functions to return all permutation of a String 
* @description : Checks if the arrays returned by two string functions are equal.
*                
*/

permutationString(string) {
    var results = [];
    console.log("Now a String:" + string)
    console.log("String length:" + string.length)
    
    
    if (string.length === 1) {
    results.push(string);
    return results;
    }
    
    for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    console.log("Now First char:" + firstChar)
    var otherChar = string.substring(0, i) + string.substring(i + 1);
    console.log("now other char:" + otherChar)
    var otherPermutations = this.permutationString(otherChar);
    
    for (var j = 0; j < otherPermutations.length; j++) {
    results.push(firstChar + otherPermutations[j]);
    console.log("char in array:" + results)
    }
    }
    return results;
    
    
    
    
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
* @description: return the time in seconds.
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
    var start=0,stop=0,res=0;
    var t1=read.questionInt("press 0 to start timer"); 
    start=this.currentSeconds();
    var t2=read.questionInt("press 1 to stop the timer");
    stop=this.currentSeconds();
    res=stop-start;
    return res; 
    
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
    if(game[x][y]=='-')
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
            game=this.mark(game,x,y,'O');
            flag=true;
        }
    }
    return game;
},

userPlayer(game)
{
    var flag=false;
    while(flag==false)
    {
        var x=read.questionInt("enter the row value (1,2,3) ")-1;
        var y=read.questionInt("enter the coloumn value (1,2,3) ")-1;
        if(game[x][y]=='-')
        {
            game=this.mark(game,x,y,'X')
            flag=true;
        }
        else
        {
            console.log("enter proper values");
            return false;
            
        }
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

        if(game[0][i]==game[1][i] && game[1][i]==game[2][i])
        {
            if (game[0][i] == 'O' || game[0][i] == 'X') 

            return true;
        }
    } 
        var k=0;l=0;
        if(game[k][k]==game[k+1][k+1] && game[k+1][k+1]==game[k+2][k+2])
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
    if(t<=50 && v>3 && v<120)
    {
        var result=35.74+0.6215*t+(0.4275*t-30.75)*(Math.pow(v,0.16));
        console.log("windchill is "+result);
    }
    else
    console.log("enter valid inputs");

},


//*******************************End of Functional Programs ***************************************/


/*********************************** Algorithm Programs ************************************/

/************************************ Anagram Detection **********************************/
/*1.0 Anagram Detection
*-----------------
* @purpose : Take 2 Strings as Input such abcd and dcba and Check for Anagrams
*
* @description : One string is an anagram of another if the second is simply a rearrangement 
* of the first. For example, 'heart' and 'earth' are anagrams...  
*                
*/

isAnagram(a,b){
    
    var x=a.toLowerCase();
    var y=b.toLowerCase();
    if(x.length!=y.length){
        return false;
        //console.log("Given string is not Anagram.");
    }
    else{
        var m=[],n=[];
        m=x.split("");
        n=y.split("");
        m=m.sort();
        n=n.sort();
        if(m.length==n.length)
        {
            for(let i=0;i<m.length;i++)
            {
                if(m[i]!=n[i])
                {
                    return false;
                }
               
            }      
             return true;
        }
    }
    },

 /**
 * @description:This method is used to find the Prime number between 1 to 1000.
 * 
 */

    isPrime(n)
    {
        if(n==0||n==1)
        {
            return false;
        }

        for(let i=2;i<=n/2;i++)
        {    
            if(n%i==0)
            return false;
        }
        return true;

        
    },


 /**
     * @description:This method is used to find palindrome value
     * @param {number} n 
     */


isPalindrome(n) {
    var t = n;

    var rev = 0;
    while (n != 0) {
        var r = n % 10;

        rev = rev * 10 + r;

        n = Math.floor(n / 10);
    }
    if (rev == t) {
        return true;

    }
    return false;

},

/**
     * @description:This method is used to check whether the given string is a palindrome
     * @param {string} str 
     */


palindromeString(str)
{
    var str1='';
    for(i=0;i<str.length;i++)
    {
        str1=str.charAt(i)+str1;
    }

    if(str==str1)
    {
        return true;
    }
    else
    return false;

},

 /**
     * @description:This method is used to find prime nummber that are palindrome and anagrams.
     *   
     * 
     */

isAnagramPalindrome()
{
    var arr=[];
    for(let i=2;i<=500;i++)
    {
        if(this.isPrime(i))
        {
            arr.push(i);
        
        }
    }
    console.log("prime numbers that are anagram within 500 are : ")
    for(let j=0;j<arr.length;j++)
    {
        
        for(let k=j+1;k<arr.length;k++)
        {
            
            if(this.isAnagram(arr[j].toString(),arr[k].toString()))
            {
                console.log(arr[j], arr[k]);

            }
        }
    }
    console.log("prime numbers that are palindrome within 500 are : ")

    for(let l=0;l<arr.length;l++)
    {
        
        if(this.isPalindrome(arr[l]))
        {
            console.log( arr[l] );
        }
    }   
},

/**
     * @description:This method is used to find element in binary search
     * @param {array} arr 
     * @param {Element} ele 
     */

binarySearchNum(arr,ele)
{
    var l=0
    var h=arr.length-1;
    while(l<=h)
    {
        var m=math.floor(h+l/2);
        if(arr[m]==ele)
        {
            return true;
        }
        else if(ele>arr[m])
        {
            l=m+1;
        }
        else if(ele<arr[m])
        {
            h=m-1;
        }
        else 
        return m;

    }
    return -1;
},

/* @description:This method is used to find  element in binary search in String
     * @param {Array} arr 
     * @param {Element} ele 
     */

binarySearchString(arr,ele)
{
    l=0;
    h=arr.length-1;
    while(l<h)
    {
        var m=l+h/2;
        if(arr[m]==ele)
        {
            return true;
        }
        else if(ele>arr[m])
        {
            l=m+1;
        }
        else if(ele<arr[m])
        {
            h=m-1;

        }
        else
        return false;
    }
    return -1;

},

/**
    * @description:This method is used to sort the array in insertionSort
    * @param {array} arr 
    */

insertionSort(arr)
{
        var a;
        for(let i=0;i<arr.length;i++)
        {
            for(let j=i+1;j>0;j--)
            {
                if(arr[j-1]>arr[j])
                {
                    a=arr[j];
                    arr[j]=arr[j-1];
                    arr[j-1]=a;
                }
            }
        }
        return arr;
    


},

 /**
    * @description:This method is used to sort the array in BubbleSort
    * @param {array} arr 
    */
bubbleSort(arr) 
{

    for (let i = 0; i < arr.length; i++)
    {
        for (let j = i + 1; j < arr.length; j++) 
        {
                if (arr[i] > arr[j]) 
                {
                    var temp;
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
        }
    }

    return arr;
},

/**
     * @description:This method is used to find the guessed number
     * @param {range} left 
     * @param {Range} right 
     */

findNumber(low,high)
{
    var mid = low + Math.floor((high - low)/2); //adding low because the number may not start from 0 
    if (low<high)
    {
        if(low==high-1)
        {
            var c;
            c = read.question("Is the number "+low +" if yes, press 'Y'. Else Press 'N' : ")
            if(c=='y')
            return low;
            if(c=='n')
            return high;
        }
        c = read.question("Is the number between " +mid+"&"+high+" if yes, press 'y'. Else Press 'n' : ")
        if(c=='y')
        mid = this.findNumber(mid, high)
        if(c=='n')
        mid = this.findNumber(low, mid-1)
    }
    return mid;
},

 /**
     * @description:This method is used to find the minimum notes
     * @param {amount} c
     * @param {array} arr
     */

vendingMachine(c,arr)
{   
    
    for(let i=0;i<arr.length;i++)
    {
        if(c/arr[i]>=1)
        {
            var notes=Math.floor(c/arr[i]);
            console.log(arr[i] +" : notes dispatched " + notes);
            c=c%arr[i];
        }

    }
},

/**
     * @description:This method is used for converting Celsius to Fahrenheit and
    Fahrenheit to Celsius.
    * @param {choice} choice
    * @param {temperature} temp
     */

temperatureConversion(choice,temp)
{
    if(choice==0)
    {
        var celsius=(temp-32)*(5/9);
        console.log(temp+"F = " + celsius +"C");
    }
    else if(choice==1)
    {
        var f=(temp*(9/5)+32);
        console.log(temp+"C = " + f +"F");

    }
    else
    console.log("enter an choice from the given options");

},

 /**
     * @description :This method is used to  find the monthly payment...
     */

monthlyPayment(p,r,y)
{
    var n=12*y;
    var m=r/(12*100);
    var payment = p*m/1-Math.pow(1+m,(-n));
    console.log("the payment to be made is "+payment)
},


/**
     * @description :this method is used to get squre root of non negative value.
     * @param {number} c 
     */

squareRoot(c)
{
    if(c>0)
    {
        var t=c;
        var e=1e-15;
        while(Math.abs(t-c/t)>e*t)
        {
            t=(t+c/t)/2;

        }
        console.log("the square root of "+c+" is "+ t);

    }
    else
    {
        console.log("enter a valid number");
    }
},

 /**
     * @description:This method is used to find day of the passed value.
     * @param {day} d 
     * @param {month} m 
     * @param {year} y 
     */

dayOfWeek(d,m,y)
{
        var y0=y-Math.floor((14-m)/12);
        var x=y0+Math.floor((y0/4))-Math.floor(y0/100)+Math.floor(y0/400);
        m0=m+12*Math.floor((14-m)/12)-2;
        var d0=(d+x+Math.floor((31*m0)/12))%7;
        return d0;
},

/**
     * @description: This method is used to Covert the decimal number to binary value.
     * @param {number} n
     */

padding(str)
{
    for(i=str.length;i<8;i++)
    {
        str="0"+str;
    }
    return str;

},

/**
     * @description: This method is used to Covert the dicimal number to binary value.
     * @param {number} n
     */

toBinary1(n)
{
    var str="";
    while(n!=0)
    {
        var r=n%2;
        str=r+str;
        n=Math.floor(n/2);
    }
    // str = str.split(""); 
    // str = str.reverse();
    // str = str.join("");
    return this.padding(str);
},

/**
     * @description :This method is used to swap the nibbles 
     * @param {number } num 
     */

isPowerOf2(num)
{

        if(num==0)
        return false;
        while(num!=1)
        {
            if(num%2!=0)
            return false;
            num=num/2;

        }
        return true;
},


 nibbleSwap(num)
 {
     var str=this.toBinary1(num);
     console.log(str);
     var swappedNumber=str.substring(str.length,str.length/2)+str.substring(0,str.length/2);
     console.log(swappedNumber);
    //  var mid=Math.floor(str.length/2);
    
    //         var arr1=[],arr2=[];
    //         for(let i=0;i<mid;i++)
    //         {
    //             arr1[i]=str[i];
    //         }
    //         var k=0;
    //         for(let j=mid;j<str.length;j++)
    //         {
    //             arr2[k]=str[j];
    //             k++
    //         }
    //         console.log(arr1);

    //         var s="";
    //         for(let i=0;i<arr1.length;i++)
    //         {
    //             s=s+arr1[i];
    //         }
    //         console.log(arr2);

    //         var s1="";
    //         for(let i=0;i<arr2.length;i++)
    //         {
    //             s1=s1+arr2[i]
    //         }
    //         console.log(s);
    //         console.log(s1);
    //        var nib=s1+s;
            console.log("the swapped nibble is "+swappedNumber);
            var dec = parseInt(swappedNumber, 2);
            console.log("the new decimal number is "+dec);
            var x=this.isPowerOf2(dec)
            if(x)
            console.log(dec+" is a power of two");
            else
            console.log(dec+" is not a power of two");


    
},

/**
     * @description :This method is used to create an array 
     * @param {number } n
     */

createArray(n)
{
    var arr=[];
    for(let i=0;i<n;i++)
    {
        arr[i]=read.questionInt("enter the array elements ");

    }
    return arr;
},


/**
     * @description:This method is used to sort the array in merge sort
     * @param {Array} arr 
     */

mergeSort(arr)
{
    if(arr.length==1)
    {
        return arr;
    }
    const m=Math.floor(arr.length/2);
    const left=arr.slice(0,m);
    const right=arr.slice(m);
    return this.merge(this.mergeSort(left),this.mergeSort(right));

},

merge(left,right)
{
    var res=[];
    var i=0,j=0;
    while(i<left.length && j<right.length)
    {
        if(left[i]<right[j])
        {
            res.push(left[i]);
            i++
        }
        else
        {
            res.push(right[j]);
            j++;
        }
    }
    return res.concat(left.slice(i)).concat(right.slice(j));
},


}

/***************************END OF ALGORITHM PROGRAMS ******************************/

 
