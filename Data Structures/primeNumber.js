/* /*******************************************************************************************
 * Execution    :   1.default node       cmd> node primeNumber.js
 *                   
 * 
 * Purpose      :   Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.
 * 
 * @description
 * 
 * @file        :   primeNumber.js
 * @overview    :   2D Array, the first dimension represents the range 0-100, 100-200, and so 
 *                  on. While the second dimension represents the prime numbers in that range
 * @author      :   Akshay K C <akshaykc27@gmail.com>
 * @version     :   1.0
 * @since       :   06-03-2019
 * 
 * ********************************************************************************************/
/**
 * To require the required files.
 */

var req = require('util');
var utility = require('../utility/utility');

function primeNumber() {
    try {
        var array = [["0-100 "], ["100-200  "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
        var i = 0; var j = 1; var range = 100;
        for (let prime = 1; prime <= 1000; prime++) {
            if (utility.isPrime(prime)) {    // checking whether the number is prime

                if (prime <= range) {
                    console.log(prime);
                    array[i][j] = prime;
                    j++;

                }
                else {
                    j = 1;
                    range = range + 100;
                    i++;
                    array[i][j] = prime;
                }
            }
        }
        console.log("The prime numbers are presents in the given range ");
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array[i].length; j++) {
                req.print(array[i][j] + " ");
            }
            console.log();
        }
        console.log();

    }
    catch (err) {
        console.log("ERROR : " + err)
    }
}

primeNumber()
