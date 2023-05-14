/*
👉 OPTIMIZED WAY TO IMPLEMENTATION OF QUEUE

1. enqueue(element), adds an element to the queue.
2. dequeue(), removes the oldest element from the queue.
3. peek() - Get the value at the front of the queue without removing it.
4. isEmpty() - Check if the queue is empty
5. size() - Get the numbre of element in the queue
6. print() - Visualize the elemnet in the queue
*/


class Queue{
    constructor(){
        this.queue = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(element){
        this.queue[this.rear] = element;
        this.rear++;
    }

    dequeue(){
        if(this.isEmpty()){
            return 'Queue Underflow';
        }
        const item = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return item;
    }

    size(){
        return this.rear - this.front;
    }

    isEmpty(){
        return this.size() === 0;
    }

    peek(){
        if(this.isEmpty()){
            return 'No element in queue';
        }
        return this.queue[this.front];
    }

    printQueue(){
        console.log(this.queue.toString())
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log(queue.size());
console.log(queue.peek());

queue.dequeue();


console.log(queue);