/******************************************************************************
 *  Execution       :   1. default node          : cmd> node replace.js
 *                      
 * 
 *  Purpose         : To replace String Template “Hello <<UserName>>, How are you?”
 *                    with the given user input.
 * 
 *  @description    
 * 
 *  @file           : replace.js
 *  @overview       : To replace String Template with givemn user input.
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 26-feb-2019
 *
 ******************************************************************************/

var read=require('readline-sync')       
// function replace() {

        var input = read.question(" Enter the name? ");
        if (input.length > 2) 
        {

            console.log("Hello " + input + ", How are you?");

        }
        else
            console.log("User name should be greater than two letters.");


