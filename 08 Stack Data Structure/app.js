/*
🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟  DATA STRUCTURE - STACK  🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

👉 WHAT IS STACK ?

The stack data structure is a sequential collection of elements that follows the principle of Last In First Out(LIFO).
The last element inserted into the stack is first to be removed.

Stack is an abstact data type. It is defined by its behavior rather than being a mathematical model.


👉 The stack data structure supports two main operations

1. Push, which adds on element to the collection.

2. Pop, which removes the most recently added element from the collection.


👉 Stack Usage

➡️ Browser history tracking
➡️ Undo operation when typing
➡️ Expression conversions
➡️ Call stack in JavaScript runtime
*/


/*
👉 STACK IMPLEMENTATION USING CLASS

1. push(element) - Add an element to the top of the stack
2. pop() - Remove the top most element from the stack
3. peek() - Get the value of the top element without removing it.
4. isEmpty() - Check if the stack is empty
5. size() - Get the numbre of element in the stack
6. print() - Visualize the elemnet in the stack
*/


// Note : Assuming the stack can grow dynamically we are not considering the overflow condition. 

class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.toString())
    }
}

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);

console.log(stack.size());
console.log(stack.pop());
console.log(stack.peek());

stack.print();