/*****************************************************************************************
 * Execution    :   1. cmd> node queue.js
 *                   
 * 
 * Purpose      :   Queue implementation.
 * 
 * @description
 * 
 * @file        :   queueutil.js
 * @overview    :   Queue implementation enqueue dequeue and display function.
 * @author      :   Akshay K C <akshaykc27@gmail.com>
 * @version     :   1.0
 * @since       :   06-03-2019
 * 
 * *************************************************************************************/



class Queue {

    // Array is used to implement a Queue
    constructor(element) {
        this.items = [];
    }

    enqueue(element) {
        // adding element to the queue 
        this.items.push(element);
    }

    dequeue() {
        // removing element from the queue 
        // returns underflow when called  
        // on empty queue
        if (this.length === 0)
            return "underflow";
        return this.items.shift();
    }

    front() {
        // returns the Front element
        if (this.length === 0)
            return " There are no elements in the queue ";
        return this.items[0];
    }

    isEmpty() {
        // return true if the queue is empty
        return this.length === 0;
    }

    print() {
        var str = "";
        for (let i = 0; i < this.items.length; i++) {
            str = str + this.items[i] + " ";
        }
        return str;
    }

}

module.exports =
    {
        Queue
    }