/******************************************************************************
 * 
 *  Purpose         : TO store the value.
 * 
 *  @description    
 * 
 *  @file           : hashingFunction.js
 *  @overview       : to store the hash value..
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 09-03-2019
 *
 ******************************************************************************/
const utility = require('../utility/utility');
const readline = require('readline-sync');
const hash = require('./implementations/hashTable');


function hashstore() {
    try {
        var num = readline.question("Enter the number of hash elements ");
        if (isNaN(num)) throw "PLZ ENTER A VALID NUMBER "
        var arr = utility.arrayCall(num);
        var hs = new hash.Hashtable();
        for (let index = 0; index < arr.length; index++) {

            hs.addhash(arr[index]);
        }
        hs.print();
    }
    catch (err) {
          console.log("ERROR :" + err);

 }
}
hashstore();