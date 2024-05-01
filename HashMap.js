import LinkedList from './LinkedList.js';

export default class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key) % this.size;
    console.log(`HashMap.js - set - index: ${index}`);
    if (!this.map[index]) {
      this.map[index] = new LinkedList();
    }

    this.map[index].append({ key, value });
  
  }

  get(key) {
    const index = this.hash(key) % this.size;

    if (!this.map[index]) {
      return null;
    }

    let current = this.map[index].head;
    while (current) {
      if (current.value.key === key) {
        return current.value.value;
      }
      current = current.nextNode;
    }

    return null;
  }
}