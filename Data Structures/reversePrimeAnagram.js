/* /*******************************************************************************************
 * Execution    :   1.default node       cmd> node primeanagram.js
 *                   
 * 
 * Purpose      :   to  store only the prime numbers that are Anagrams in the given range. 
 * 
 * @description
 * 
 * @file        :   primeanagram.js
 * @overview    :   store the numbers that are Anagram 
 * @author      :   Akshay K C <akshaykc27@gmail.com>
 * @version     :   1.0
 * @since       :   07-03-2019
 * 
 * ********************************************************************************************/
/**
 * To require the required files.
 */

var util = require('../utility/utility');
var stackAccess = require('./implementations/stackLinkedList');
var take = require('util')

function reverseAnagram() {
    try {
        var arr = [];
        for (let i = 0; i < 1000; i++) {
            if (util.isPrime(i)) {
                arr.push(i);
            }
        }

        var stk = new stackAccess.StackLinkedList;
        var k = 0;

        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (util.isAnagram(arr[i].toString(), arr[j].toString())) {
                    stk.push(arr[i]);
                    stk.push(arr[j]);
                    k++;
                }
            }
        }
        console.log("before reversing")
        console.log("--------------------------------------");
        stk.display();
        console.log("\n\n");


        console.log("after reversing");
        console.log("----------------------------------------");

        console.log(2 * k);
        for (let i = 0; i < 2 * k; i++) {
            take.print(stk.pop() + ",");
        }

        console.log("\n\n");
    }
    catch (err) {
        console("ERROR :" + err);
    }
}
reverseAnagram()