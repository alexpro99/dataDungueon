const LinkedListNode = require("./LinkedListNode");

module.exports.LinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;


    }

    add(value) {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            return this;
        }

    }

    preppend(value) {
        const newNode = new LinkedListNode(value);

        newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode
        }
        return this;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }


    }

    find(head, value) {
        if (!this.head) {
            return null;
        }

        let node = head;
        while (node) {
            if (node.value == value) {
                return node;
            }
            node = node.next;
        }

        return null;

    }

    toString() {
        
    }
}