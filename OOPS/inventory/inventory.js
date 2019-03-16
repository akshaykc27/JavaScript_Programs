/******************************************************************************
 *  Execution       :   1. default node          : cmd> node inventory.js
 *                      
 *
 *  purpose         : To create inventory object from JSON and to calculate the value for every inventory.
 *
 *  @description    : To create a JSON file having Inventory Details for Rice, Pulses and
 *                    Wheat with properties name, weight, price per kg.
 *
 *  @file           : inventory.js
 *  @overview       : To calculate the total cost of each object in inventory for given quantity.
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-03-2019
 *
 ******************************************************************************/

var util = require("../utility/utility");
var fs = require('fs');
var flag = true;

try {
    var data = fs.readFileSync("iventoryData.json");

    var object = JSON.parse(data);
}
catch (err) {
    console.log("file not found !.");
    flag = false;
}

function inventory() {
    if (flag) util.inventory(object);
}
inventory();
