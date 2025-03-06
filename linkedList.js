import { Node } from "./node.js";

export class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(node) {
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    at(index) {
        if (index < 0 || index >= this.size) {
            console.log('index out of range')
            return
        }
        let count = 0;
        let node = this.head;
        while (count<index) {
            node = node.next;
            count++;
        }
        return node;
    }

    toString() {
        let cur = this.head;
        let str = '';
        while (cur!=null){
            str = str.concat(`( ${cur.key},${cur.value} ) ->`);
            cur = cur.next;
        }
        str = str.concat(" null");
        return str
    }

    removeAt(index) {
        if (index >= this.size || index < 0) {
            console.log('Index out of range');
            return;
        }
        if (index == 0) {
            this.head = this.head.next;
            if (this.size == 1) this.tail = this.head;
        } else {
            const prev = this.at(index-1);
            if (!prev) return;
            const toRemove = prev.next;
            prev.next = toRemove.next;
            if (index == this.size - 1) this.tail = prev;
        }
        this.size--;
    }

    findNode(key) {
        let node = this.head;
        while (node) {
            if (node.key == key) return node;
            node = node.next;
        }
        return null;
    }

    getIndex(key) {
        let node = this.head;
        let count = 0;
        while (node) {
            if (node.key == key) return count;
            node = node.next;
            count++;
        }
        return null;
    }
}

