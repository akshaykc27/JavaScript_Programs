/*****************************************************************************************
 * Execution    :   1.default node               cmd> node bankingCashCounter.js
 *                   
 * 
 * Purpose      :   Program which creates Banking Cash Counter where people come in to 
 *                  deposit Cash and withdraw Cash. 
 * 
 * @description
 * 
 * @file        :   bankingCashCounter.js
 * @overview    :   Banking Cash Counter where people come in to deposit Cash and withdraw
 *                  Cash. Maintain the Cash Balance.
 * @author      :   Akshay K C <akshaykc27@gmail.com>
 * @version     :   1.0
 * @since       :   06-03-2019
 * 
 * *************************************************************************************/
/**
 * To require the required files.
 */

var util = require('../utility/utility');
var queueAcccess = require('./implementations/queue');
var read = require("readline-sync");

function bankingCashCounter() {

    var q = new queueAcccess.Queue;
    try {
        var n = read.questionInt("Enter the number of people ");
        if (isNaN(n)) throw "please enter a valid number !!! ";           // input validation

        for (let i = 1; i <= n; i++) {
            var name = read.question("Please enter your name ");
            if (!isNaN(name)) throw " Enter a valid name!!";  // input validation
            q.enqueue(name);

        }

        q.print();
        var totalAmount = parseInt(30000);

        for (let i = 1; i <= n; i++) {
            console.log("WELCOME :) " + q.dequeue());
            var choice = read.questionInt("Please enter your choice \n Enter 1 to Deposit \n Enter 2 to Withdraw ");
            if (choice === 1) {
                var amount = read.questionInt("Enter the amount to be deposited ");
                if (isNaN(amount)) throw "please enter a valid amount "; // input validation
                totalAmount += amount;
                console.log("Your deposit was successful, Thank you ");
                console.log("Balance after the deposit is " + totalAmount);
            }
            else if (choice === 2) {
                var amount = read.questionInt("Enter the amount to be withdrawed ");
                if (isNaN(amount)) throw "please enter a valid amount ";
                if (amount > totalAmount) {
                    console.log("Insufficient balance, try with a smaller amount");
                }
                else {
                    totalAmount -= amount;
                    console.log("Withdrawal was successful, Thank you ");
                    console.log("Balance after the withdrawal is " + totalAmount);
                }
            }
            else {
                console.log("Choose within the given options ");
            }

        }
    }
    catch (err) {
        console.log("ERROR: " + err);
    }
}

bankingCashCounter();