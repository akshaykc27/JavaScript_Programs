/******************************************************************************
 *  Execution       :   1. default node          : cmd> node regularExpression.js
 *                      
 *
 *  purpose         : to replace an expression according to the given conditions.
 *
 *  @description    : to read in the following message: Hello <<name>>, We have your full
                      name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx.
                      Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
                      and to replace name, full name, Mobile#, and Date with proper value.

 *  @file           : regularExpression.js
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-03-2019
 *
 ******************************************************************************/

var util = require('../utility/utility');
var read = require('readline-sync');

function regex() {
    try {


        var name = read.question("Please enter your name ");
        if (!isNaN(name)) throw "Enter a VALID name ";
        var fullName = read.question("Enter your full name please. ");
        if (!isNaN(fullName)) throw "Enter a VALID name "
        var mobile = read.question("Enter your mobile number please. ");
        if (isNaN(mobile)) throw "Enter a VALID mobile number ";
        if (mobile.length != 10) throw "Enter a 10 digit phone number ";
        var ds = new Date();
        var date = ds.getDate() + "/" + (ds.getMonth() + 1) + "/" + ds.getFullYear();
        util.regex(name, fullName, mobile, date);
    }
    catch (err) {
        console.log("ERROR : " + err)
        regex()
    }

}

regex()


