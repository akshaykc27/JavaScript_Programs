/* /************************************************************************************
 * Execution    :   1.default node       cmd> node orderedList.js
 *                   
 * 
 * Purpose      :   Search a element if present remove it otherwise add it to the file.
 * 
 * @description
 * 
 * @file        :   orderedList.js
 * @overview    :   Use readfile to read all the words in the file with space as seperator.
 * @author      :   Akshay K C <akshaykc27@gmail.com>
 * @version     :   1.0
 * @since       :   05-03-2019
 * 
 * ***********************************************************************************/
/**
 * To require the required files.
 */
var util = require('../utility/utility');
var read = require("readline-sync");
var list = require('./implementations/linkedList');

function ordedlist() {
    try {
        var fs = util.fileCall('/home/admin1/Documents/javascript/Data Structures/files/file.txt'); // read the input from the file
        var st = fs.split(' ');
        var list1 = new list.LinkedList; //instantiating linkedList 

        for (var i = 0; i < st.length; i++) {
            list1.add(st[i]);  //adding the elements into the list 

        }
        console.log("Before sorting");
        console.log("-----------------------------------");

        list1.display(); //displaying the list
        list1.sort(); // sorting the list 
        console.log("After sorting");
        console.log("-----------------------------------");

        list1.display();
        var filename = '/home/admin1/Documents/javascript/Data Structures/files/file1.txt';

        var search = read.question("Enter your number to search ");
        if (isNaN(search)) throw "Your input in not a number";  // input validations
        if (search == "") throw "please enter an input ";   // input validations
        if (list1.search(search)) {

            list1.remove(search);   // removing the searched word if it is present in the list 
            var data = list1.getdata();
            util.writeFile(filename, data); // writing into the file

            list1.display();
        }
        else {
            list1.add(search);  // adding the searched word if not present in the list
            list1.sort();
            var data = list1.getdata();
            util.writeFile(filename, data);

            list1.display();
        }
    }
    catch (err) {
        console.log("ERROR: " + err);
    }

}
ordedlist();