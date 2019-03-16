/******************************************************************************
 *  Execution       :   1. default node          : cmd> node inventoryManagement.js
 *                      
 *
 *  purpose         : InventoryManager to manage the Inventory. The Inventory Manager will use InventoryFactory to create Inventory
                      Object from JSON.
 *
 *  @description    : The InventoryManager will call each Inventory Object in its list to calculate the Inventory Price and then call the Inventory Object to return the
                      JSON String. The main program will be with InventoryManager
 *
 *  @file           : inventoryManagement.js
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 12-03-2019
 *
 ******************************************************************************/


var util = require('../utility/utility');
var file = require('fs');
try {
    var str = file.readFileSync("inventoryFile.json", "utf8");
    var data = JSON.parse(str);

    function inventoryManagement() {
        util.inventoryManagement(data);
    }
}
catch (err) {
    console.log("ERROR " + err);
}

inventoryManagement()
