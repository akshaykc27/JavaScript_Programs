/*****************************************************************************************
 * Execution    :   1. cmd> node stack.js
 *                   
 * 
 * Purpose      :   Stack implementation.
 * 
 * @description
 * 
 * @file        :   queueutil.js
 * @overview    :   Stack implementation push pop and peek function.
 * @author      :   Akshay K C <akshaykc27@gmail.com>
 * @version     :   1.0
 * @since       :   06-03-2019
 * 
 * *************************************************************************************/

class Stack
{
        // Array is used to implement stack
    constructor()
    {
        this.items=[];
    }

    push(element)
    {
        // push element into the item
        return this.items.push(element);
    }

    pop()
    {
        // return top most element in the stack 
        // and removes it from the stack 
        // Underflow if stack is empty 
        if(this.items.length===0)
        return "underflow";
        return this.items.pop();
    }

    peek()
    {
        // return the top most element from the stack 
        // but does not delete it. 
        return this.items[this.items-1];
    }

    isEmpty()
    {
        // returns true if the stack is empty
        return this.items.length===0;    
    }

    print()
    {
        // to print the stack
        var str="";
        for(var i=0;i<this.items.length;i++)
        {
            str=this.items[i]+"";
        }
        return str;
    }

    getSize()
    {
        // returns the length of the stack
        return this.items.length;
    }

    
}

module.exports=
{
    Stack
}