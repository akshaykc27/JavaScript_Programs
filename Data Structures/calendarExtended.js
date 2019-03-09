/********************************************************************************************************
 * Execution        :    default node          : cmd> node calendarExtended.js
 *                      
 * 
 *  @purpose        : To Create the Week Object having a list of WeekDay objects each storing the day
 *                    using Queue.
 * 
 * 
 *  @file           : calendarExtended.js
 *  @overview       : To create an calender by accepting month and year as user input.
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-03-2019
 * 
 **********************************************************************************************************/

 /**
* To require the required files.
*/

var queueAccess = require('../Data Structures/implementations/queueLinkedList');
var utility = require('../utility/utility');
var util = require('util');
var read = require('readline-sync');

function calendarExtended() {
    try {
        var weekdays = new queueAccess.QueueLinkedList;
        var dateq = new queueAccess.QueueLinkedList;
        var month = read.questionInt("enter the month : ");
        if (month < 0 || month > 12) throw " enter a valid month ";
        var year = read.questionInt("enter the year : ");
        if (year < 1000 || year > 9999) throw "enter a 4 digit year ";
        var d = utility.dayOfWeek(1, month, year)
        //console.log(d)
        var res = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
        // if (d <= res.length) {
        //     console.log("The day falls on :" + res[d])
        // }
        var days = utility.monthof(month)
        var t1 = utility.leapYear1(year)
        if (t1) {
            if (month == 2) {
                days = 29;
            }
        }
        for (let i = 0; i < res.length; i++) {
            weekdays.enqueue(res[i])
        }

        for (let i = 1; i <= days; i++) {
            dateq.enqueue(i)
        }
        for (let i = 0; i < res.length; i++) {
            util.print(weekdays.dequeue() + "  ")
        }
        console.log()
        for (let i = 0; i < (d * 5); i++) {
            util.print(" ")
        }
        for (let i = 1; i <= days; i++) {

            if (i < 10) {
                util.print(" " + dateq.dequeue() + "   ")
            }
            if (i > 9) {
                util.print("" + dateq.dequeue() + "   ")
            }
            if ((d + i) % 7 == 0) {
                console.log()
            }
        }
        console.log("\n\n");
    }
    catch (err) {
        console.log("ERROR : " + err)
    }
}

calendarExtended()