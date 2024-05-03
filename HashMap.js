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

  has(key) {
    const index = this.hash(key) % this.size;

    if (!this.map[index]) {
      return false;
    }

    let current = this.map[index].head;
    while (current) {
      if (current.value.key === key) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key) % this.size;

    if (!this.map[index]) {
      return false;
    }

    let current = this.map[index].head;
    while (current) {
      if (current.value.key === key) {
        this.map[index].delete(current.value);
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  length() {  
    let count = 0;
    for (let i = 0; i < this.size; i++) {
      if (this.map[i]) {
        let current = this.map[i].head;
        while (current) {
          count++;
          current = current.nextNode;
        }
      }
    }

    return count;
  }

  clear() {
    this.map = new Array(this.size);
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.size; i++) {
      if (this.map[i]) {
        let current = this.map[i].head;
        while (current) {
          keys.push(current.value.key);
          current = current.nextNode;
        }
      }
    }

    return keys;
  }

  values() {
    const values = [];
    for (let i = 0; i < this.size; i++) {
      if (this.map[i]) {
        let current = this.map[i].head;
        while (current) {
          values.push(current.value.value);
          current = current.nextNode;
        }
      }
    }

    return values;
  }

  entries() {
    const entries = [];
    for (let i = 0; i < this.size; i++) {
      if (this.map[i]) {
        let current = this.map[i].head;
        while (current) {
          entries.push(current.getValue().value);
          current = current.nextNode;
        }
      }
    }

    return entries;
  }


}