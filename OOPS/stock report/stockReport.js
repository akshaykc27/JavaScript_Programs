/******************************************************************************
 *  Execution       :   1. default node          : cmd> node stockReport.js
 *                      
 *
 *  purpose         : Program to read in Stock Names, Number of Share, Share Price. 
 *                    Print a Stock Report with total value of each Stock and the total value of Stock.
 *
 *  @description    : Calculate the value of each stock and the total value.
 *  @file           : stockReport.js
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 12-03-2019
 *
 ******************************************************************************/

var util = require('../utility/utility');
var file = require('fs');


try {
    var str = file.readFileSync("stock.json", "utf8");
    var data = JSON.parse(str);

}
catch (err) {
    console.log("ERROR : " + err);
}

function stockReport() {

    util.stockReport(data);

}

stockReport()