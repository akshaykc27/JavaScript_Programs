/********************************************************************************************************
 * Execution        :    default node          : cmd> node binaryTree.js
 *                      
 *  @purpose        :   To find the number of different binary search trees that can
 *                      be created using these nodes.
 * 
 * 
 *  @file           :   binaryTree.js
 *  @overview       :   To search different binary search tree.
 *  @author         :   Akshay K C <akshaykc27@gmail.com>
 *  @version        :   1.0
 *  @since          :   09-03-2019
 * 
 ********************************************************************************************************/
/**
 * To require the required files.
 */
var readline = require('readline-sync');
module.exports = {

    binarySearchTree() {
        try {
            var number = readline.question("Enter the number of cases : ");
            if (isNaN(number)) throw "PLEASE ENTER AN INTEGER VALUE"; // input validations
            var arr = [];
            console.log("Enter your integer value");
            for (var i = 0; i < number; i++) {
                arr[i] = readline.question('');
                if (isNaN(arr[i])) throw "PLEASE ENTER A VALID NUMBER " // input validations
            }

            for (var j = 0; j < arr.length; j++) {
                var first = (this.factorial(2 * Number(arr[j])));
                var second = Number((this.factorial(Number(arr[j]) + 1)) * (this.factorial(Number(arr[j]))));
                var result = Math.floor((first / second));
                console.log("Node possible way of " + arr[j] + " is " + result);
            }
        }
        catch (err) {
            console.log("ERROR :" + err);

        }
    },

    // to find the factorial of the given number 
    factorial(num) {

        var fact = 1;
        for (let index = 1; index <= num; index++) {
            fact = fact * index;
        }
        return fact;

    }
}
