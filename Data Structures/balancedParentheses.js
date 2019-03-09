/*****************************************************************************************
 * Execution    :   1.default node               cmd> node balancedParentheses.js
 *                   
 * 
 * Purpose      :   Take an Arithmetic Expression and check whether it has balanced paranthesis or not
 * 
 * @description
 * 
 * @file        :   balancedParentheses.js
 * @overview    :   Use readfile to read all the words in the file with space as seperator.
 * @author      :   Akshay K C <akshaykc27@gmail.com>
 * @version     :   1.0
 * @since       :   05-03-2019
 * 
 * *************************************************************************************/
/**
 * To require the required files.
 */

var util = require('../utility/utility');
var stackAccess = require('./implementations/stack');
var read = require("readline-sync");


function balancedParentheses() {
  try {
    var st = new stackAccess.Stack(); // instantiating stack
    var exp = read.question("Enter a mathematical expression with parentheses ");
    var ch, i;
    for (i = 0; i < exp.length; i++) {
      ch = exp.charAt(i)

      if (ch == '(' || ch == '{' || ch == '[') {
        st.push(ch);
        // console.log(st);

      }
      else {
        switch (ch) {
          case ')': if (st.pop() != '(') {
            return false;
          }
            break;

          case '}': if (st.pop() != '{') {
            return false;
          }
            break;

          case ']': if (st.pop() != '[') {
            return false;
          }
            break;


        }
      }
    }
    if (st.getSize() === 0)
      console.log(" balanced parentheses ");
    else
      console.log("not balanced parentheses ");

  }
  catch (err) {
    console.log("ERROR" + err);
  }
}


balancedParentheses()


