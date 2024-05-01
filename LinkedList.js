import Node from './Node.js';

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const node = new Node();
        node.setValue(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.setNextNode(node);
            this.tail = node;
        }
    }

    prepend(value) {
        const node = new Node();
        node.setValue(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.setNextNode(this.head);
            this.head = node;
        }
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.getNextNode();
        }
        return count;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index){
        let count = 0;
        let current = this.head;
        while (current !== null) {
            if(count === index){
                return current;
            }
            count++;
            current = current.getNextNode();
        }
        return null;
    }

    pop(){
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if(current.getNextNode() === null){
                previous.setNextNode(null);
                return current;
            }
            previous = current;
            current = current.getNextNode();
        }
        return null;
    }

    contains(value){
        let current = this.head;
        while (current !== null) {
            if(current.getValue() === value){
                return true;
            }
            current = current.getNextNode();
        }
        return false;
    }

    toString(){
        let current = this.head;
        let result = '';
        while (current !== null) {
            result += current.getValue() + ' ';
            current = current.getNextNode();
        }
        return result;
    }


}