export default class Node{
    constructor(){
        this.value = null;
        this.nextNode = null;
    }

    setValue(value){
        this.value = value;
    }

    getValue(){
        return this.value;
    }

    setNextNode(nextNode){
        this.nextNode = nextNode;
    }

    getNextNode(){
        return this.nextNode;
    }
}