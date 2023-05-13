/*
🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟  DATA STRUCTURE - QUEUE  🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

👉 WHAT IS QUEUE ?

The queue data structure is a sequential collection of elements that follows the principle of First In First Out(FIFO).

A queue of people. People enter the queue at one end (rear/tail) and leave the queue from the other end (front/head).

Queue is an abstact data type. It is defined by its behavior rather than being a mathematical model.


👉 The Queue data structure supports two main operations

1. Enqueue, which adds on element to the collection.

2. Dequeue, which removes an element from the front/head of the collection.


👉 Stack Usage

➡️ Printers
➡️ CPU task scheduling
➡️ Callback queue in JavaScript runtime
*/


/*
👉 QUEUE IMPLEMENTATION USING CLASS

1. enqueue(element), adds an element to the queue.
2. dequeue(), removes the oldest element from the queue.
3. front() - Get the value at the front of the queue without removing it.
4. isEmpty() - Check if the queue is empty
5. size() - Get the numbre of element in the queue
6. print() - Visualize the elemnet in the queue
*/


class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(element){
        this.queue.push(element);
    }

    dequeue(){
        if(this.isEmpty()){
            return "Underflow";
        }
        return this.queue.shift();
    }

    front(){
        if(this.isEmpty()){
            return "No element in queue"
        }
        return this.queue[0];
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    size(){
        return this.queue.length;
    }

    printQueue(){
        console.log(this.queue.toString())
    }
}

// Create a new Queue
const queue = new Queue();

console.log(queue);

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.printQueue();
console.log(queue.front());
console.log(queue.dequeue());
queue.printQueue();

console.log(queue);