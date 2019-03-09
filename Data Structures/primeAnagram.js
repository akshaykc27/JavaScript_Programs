/***************************************************************************** 
* 
*  Purpose         : Find primenumber which are the anagram in range 0-1000..
* 
*  @description    
* 
*  @file           : primeAnagram.js
*  @overview       : primes function to find primenumber which are the anagram in range of 0-1000..
*  @author         : Akshay K C <akshaykc27@gmail.com>
*  @version        : 1.0
*  @since          : 06-Mar-2019
*
******************************************************************************/
/**
 * To require the required files.
 */

const utility = require('../utility/utility');

function prime() {
    var anaPrime = []; notAnaPrime = [];
    var a = 0;
    var b = 100;
    for (var i = 0; i < 10; i++) {

        anaPrime[i] = utility.findAnaPrime(a, b);
        console.log("[ " + a + " " + b + "] ==> [" + anaPrime[i] + "]");
        a += 100;
        b += 100;
    }
}

prime();