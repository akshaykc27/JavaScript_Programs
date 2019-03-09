/******************************************************************************************************
 * Execution        :    default node          : cmd> node calendar.js
 *                      
 * 
 *  @purpose        :  To implement a Calender that takes the month and year as command-line 
 *                     arguments and prints the Calendar of the month.
 * 
 * 
 *  @file           :  calendar.js
 *  @overview       :  To creat an Calender by accepting month and year from user input.
 *  @author         :  Akshay K C <akshaykc27@gmail.com>
 *  @version        :  1.0
 *  @since          :  08-03-2019
 * 
 ******************************************************************************************************/

/**
* To require the required files.
*/

var take = require('util');
var Utility = require('../utility/utility');
var readline = require('readline-sync');

function calender() {
    try {
        var month = readline.questionInt("enter the month ");
        if (month <= 0 || month > 12) throw " enter a valid month ";
        var year = readline.questionInt("enter the year ");
        console.log("\n");
        if (year < 1000 || year > 9999) throw "enter a 4 digit year ";
        var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];

        var day = Utility.dayOfWeek(1, month, year);
        //console.log(day);
        var leap = Utility.leapYear1(year);
        if (leap = true) {

            dates[2] = 29;
        }

        console.log(Utility.month(month) + "  " + year);
        console.log();

        for (var i = 0; i < week.length; i++) {
            take.print(week[i] + "  ");
        }
        console.log();
        for (var i = 0; i < (day * 5); i++) {
            take.print(" ");
        }


        for (var i = 1; i <= dates[month]; i++) {
            if (i < 10) {
                take.print(" " + i + "   ");
            }

            if (i > 9) {
                take.print("" + i + "   ")
            }
            if ((i + day) % 7 == 0) {
                console.log();
            }

        }

        console.log("\n\n");
    }
    catch (err) {
        console.log("ERROR: " + err);
    };


}
calender();