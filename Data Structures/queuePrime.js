/* /*******************************************************************************************
 * Execution    :   1.default node       cmd> node primequeue.js
 *                   
 * 
 * Purpose      :   Prime Number Program and store only the numbers in that range that are 
 *                  Anagrams using Queue. 
 * 
 * @description
 * 
 * @file        :   primequeue.js
 * @overview    :   Store in Anagram numbers using Queue.
 * @author      :   Akshay K C <akshaykc27@gmail.com>
 * @version     :   1.0
 * @since       :   07-03-2019
 * 
 * ********************************************************************************************/

/**
 * To require the required files.
 */

var util = require('../utility/utility');
var qAccess = require('./implementations/queueLinkedList');

var q = new qAccess.QueueLinkedList;
var arr = [];
for( let i = 0; i < 1000 ; i++)
{
    if(util.isPrime(i))
    {
        arr.push(i);    
    
    }

}

for( let i = 0 ; i < arr.length; i++)
{
    for( let j = i + 1; j < arr.length ; j++)
    {
        if(util.isAnagram(arr[i].toString(),arr[j].toString()))
        {
            q.enqueue(arr[i]);
            q.enqueue(arr[j]);
        }
    }
}
console.log(q.display() + " ");