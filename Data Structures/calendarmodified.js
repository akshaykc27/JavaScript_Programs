/********************************************************************************************************
 * Execution        :    default node          : cmd> node calendarModified.js
 *                      
 * 
 *  @purpose        : To Create the Week Object having a list of WeekDay objects each storing the day
 *                    using Stack.
 * 
 * 
 *  @file           : calendarModified.js
 *  @overview       : To create an calender by accepting month and year as user input.
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-03-2019
 * 
 **********************************************************************************************************/

/**
* To require the required files.
*/

var stackAccess = require('./implementations/stackLinkedList');
var read = require('readline-sync');
var utility = require('../utility/utility');
var util = require('util');

function calendarModified() {
    try {
        var weekday = new stackAccess.StackLinkedList;
        var dates = new stackAccess.StackLinkedList;

        var month = read.questionInt("enter the month ");
        if (month <= 0 || month > 12) throw "enter a valid month";
        var year = read.questionInt("enter the year ");
        if (year < 1000 || year > 9999) throw "enter a valid year";

        var d = utility.dayOfWeek(1, month, year);

        var res = ["Sun", "Mon", "Tue", "Wed ", "Thu", "Fri", "Sat"]

        var days = utility.monthof(month);
        var leap = utility.leapYear1(year);
        if (leap) {
            if (month === 2) {
                days = 29;
            }
        }

        for (let i = 0; i < res.length; i++) {
            weekday.push(res[i]);
        }

        for (let j = 1; j <= days; j++) {
            dates.push([j]);
        }

        weekday = weekday.reverseStack();
        for (let i = 0; i < res.length; i++) {
            util.print(weekday.pop(i) + "  ");
        }
        console.log();

        for (let i = 0; i < d * 5; i++) {
            util.print(" ");
        }

        dates = dates.reverseStack();

        for (let i = 1; i <= days; i++) {
            if (i < 10)
                util.print(" " + dates.pop(i) + "   ");
            if (i > 9)
                util.print("" + dates.pop(i) + "   ");
            if ((i + d) % 7 == 0)
                console.log();
        }
        console.log("\n\n");
    }
    catch (err) {
        console.log("ERROR " + err);
    }
}
calendarModified()

