/*****************************************************************************************
 * Execution    :   1.default node           cmd> node palindromeChecker.js
 *                   
 * 
 * Purpose      :  Show if the String is Palindrome or not.  
 *                   
 * 
 * @description
 * 
 * @file        :   palindromeChecker.js
 * @overview    :   A palindrome is a string that reads the same forward and backward, for
 *                  example, radar, toot, and madam.
 * @author      :   Akshay k C <akshaykc27@gmail.com>
 * @version     :   1.0
 * @since       :   06-03-2019
 * 
 * *************************************************************************************/

/**
 * To require the required files.
 */

var util = require('../utility/utility');
var dequeAccess = require('./implementations/deque');
var read = require("readline-sync");

/**
 * function definition.
 */

function palindromeChecker() {
    var dq = new dequeAccess.Deque;

    try {
        var word = read.question(" enter the string ");
        if (!isNaN(word)) throw "enter a valid word";

        var arr = word.split("");
        for (let i = 0; i < arr.length; i++) {
            dq.addFront(arr[i]);
        }
        var str1 = "", str2 = "";
        for (let i = 0; i < arr.length; i++) {
            str1 += " " + dq.removeFront();
        }

        for (let i = 0; i < arr.length; i++) {
            dq.addFront(arr[i]);
        }

        for (let i = 0; i < arr.length; i++) {
            str2 += " " + dq.removeRear();
        }

        if (str1 === str2) {
            console.log(word + " is a Palindrome ");
        }
        else {
            console.log(word + " is not a palindrome ");
        }

    }
    catch (err) {
        console.log(err.message);
    }
}
/**
 * function calls.
 */
palindromeChecker()