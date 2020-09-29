export default class Queue {
  constructor() {
    this.queue = [];
    this.front = null;
    this.rear = null;
  }

  enqueue(element) {
    this.queue.push(element);
    this.rear = element;
    this.front = this.queue[0];
  }

  dequeue() {
    if (this.queue.length > 0) {
      if (this.queue.length === 1) {
        this.front = null;
      } else {
        this.front = this.queue[this.queue.length - 2];
      }
      return this.queue.shift();
    } else {
      throw new Error("Queue Underflow Exception: The queue is empty.");
    }
  }

  getFront() {
    if (this.queue.length === 0) {
      return null;
    }

    return this.front;
  }

  getRear() {
    if (this.queue.length === 0) {
      return null;
    }

    return this.Rear;
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}
