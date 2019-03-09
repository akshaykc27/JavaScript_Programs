/*************************************************************************************
 * Execution    :   1.default node           cmd> node unorderedList.js
 *                   
 *                  
 * 
 * Purpose      :   Search a element if present remove it otherwise add it to the file.
 * 
 * @description
 * 
 * @file        :   unorderedList.js
 * @overview    :   Use readfile to read all the words in the file with space as seperator.
 * @author      :   Akshay K C <akshaykc27@gmail.com>
 * @version     :   1.0
 * @since       :   05-03-2019
 * 
 * *********************************************************************************/
/**
 * To require the required files.
 */

var util = require('../utility/utility');
var read = require("readline-sync");
var list = require('./implementations/linkedList');

try {
  var linkedList = new list.LinkedList();
  var fs = util.fileCall('/home/admin1/Documents/javascript/Data Structures/files/file.txt');  // reading the file
  var arr = fs.split(' ');
  for (let i = 0; i < arr.length; i++) {
    linkedList.add(arr[i]);

  }
  linkedList.display(); //displaying the list
  var word = read.question(" Enter the word you want to search ");
  var check = linkedList.search(word); //checking if the word is present in the list
  if (check) {
    linkedList.remove(word); //removing the word from the list 
  }
  else {

    linkedList.add(word); // addding the word into the list
  }
  var str = linkedList.getdata();
  console.log(str);

  util.writeFile('/home/admin1/Documents/javascript/Data Structures/files/file1.txt', str); //writing into the file
}
catch (err) {
  console.error(err);
}

