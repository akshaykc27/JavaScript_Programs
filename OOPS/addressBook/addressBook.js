/******************************************************************************
 *  Execution       :   1. default node          : cmd> node addressBook.js
 *                      
 *
 *  purpose         : A program that can be used to maintain an address book. 
 *
 *  @description    : An address book holds a collection of entries, each recording a person's first and last names, address, city, state, zip, and
                      phone number.
 *
 *  @file           : addressBook.js
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-03-2019
 *
 ******************************************************************************/



var util = require('../utility/utility');
var fs = require('fs');
try {
    var file = fs.readFileSync("address.json", "utf8");
    var object = JSON.parse(file);
    util.personAddressBook(object);
}
catch (err) {
    console.log("ERROR : " + err);
}

