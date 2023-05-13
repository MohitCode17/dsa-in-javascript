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


class Stack{
    constructor(capacity){
        this.capacity = capacity
        this.stack = [];
        this.top = -1;  // Indicate empty stack
    }

    push(element){
        // Condition to check overflow stack
        if(this.isFull()){
            console.log('Stack Overflow');
            return;
        }
        this.top++;
        this.stack[this.top] = element;
    }

    pop(){
        if(this.isEmpty()){
            console.log('Stack Underflow');
            return;
        }
        const poppedElement = this.stack[this.top];
        this.stack.splice(this.top, 1);
        this.top--;
        return poppedElement;
    }

    peek(){
        if(this.isEmpty()){
            console.log("Stack is Empty");
            return;
        }
        return this.stack[this.top];
    }

    isFull(){
        return this.top === this.capacity - 1;
    }

    isEmpty(){
        return this.top === -1;
    }

    size(){
        return this.stack.length;
    }

    print(){
        console.log(this.stack.toString())
    }
}

// Create a new stack with capacity of 10
const stack = new Stack(10);

// Push some elements onto the stack
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);
stack.push(70);
stack.push(80);
stack.push(90);
stack.push(100);

// Try pushing an element when the stack is full (should log "Stack Overflow")
// stack.push(110);

// Peek element of the stack
// console.log(stack.peek());

// Pop some elements off the stack
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

// Check if the stack is empty
console.log(stack.isEmpty());

// Check if the stack is full
console.log(stack.isFull());

// Check the size of stack
console.log(stack.size())

// Print stack elements
stack.print();

console.log(stack);