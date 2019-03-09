/*****************************************************************************************
 * Execution    :   1. cmd> node deque.js
 *                   
 * 
 * Purpose      :   Deque implementation.
 * 
 * @description
 * 
 * @file        :   deque.js
 * @overview    :   deque implementation, addFront addRear removeFront removeRear functions.
 * @author      :   Akshay K C <akshaykc27@gmail.com>
 * @version     :   1.0
 * @since       :   06-03-2019
 * 
 * *************************************************************************************/

class Deque
{
    // Array is used to implement a deque
    constructor(element)
    {
        this.items=[];
    }

    addFront(element)
    {
        // adds the element to the front of the deque
        this.items.unshift(element);
    }

    addRear(element)
    {
        // adds the element to the end of the deque
        this.items.push(element);
    }

    removeFront()
    {
        // removes the Front element
        if(this.items.length === 0 )
        return "underflow";
        return this.items.shift();
    }

    removeRear()
    {
        // removes the last element 
        if(this.items.length === 0 )
        return "underflow";
        return this.items.pop();
    }

    isEmpty()
    {
        // return true if the queue is empty
        return this.items.length === 0;
    }

    size()
    {
        // return the size
        return this.items.length;
    }

    print()
    {
        // prints the deque
        var str="";
        for(let i = 0; i < this.items.length; i++)
        {
            str += this.items[i]+" ";
        }
        return str;
    }
}

module.exports = 
{
    Deque
}