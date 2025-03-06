import { LinkedList } from "./linkedList.js";
import { Node } from "./node.js";


export class HashSet {

    constructor() {
        this.buckets = Array.from({length:16}, () => new LinkedList());
        this.loadFactor = 0.75;
        this.capacity = 16;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber =  31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode % this.capacity; 
    }

    set(key) {
        let index = this.hash(key);
        let node = this.buckets[index].findNode(key)
        if (node) return;

        this.buckets[index].append(new Node(key,null));

        // check size of the map and if it exceeds load factor
        if (this.length() > Math.floor(this.capacity*this.loadFactor)) {
            let oldBuckets = this.buckets;
            this.capacity *= 2;
            this.clear();

            oldBuckets.forEach((bucket) => {
                let current = bucket.head;
                while (current) {
                    this.set(current.key,null);
                    current = current.next;
                }
            });
        }
    }

    get(key) {
        const index = this.hash(key);
        let node = this.buckets[index].findNode(key)
        return node
    }

    has(key) {
        return Boolean(this.get(key));
    }

    remove(key) {
        const bucketIndex = this.hash(key);
        const index = this.buckets[bucketIndex].getIndex(key);
        if (index != null) {
            this.buckets[bucketIndex].removeAt(index);
            return true;
        }
        return false;
    }

    length() {
        let count = 0
        this.buckets.forEach((bucket) => {
            count += bucket.size;
        })
        return count;
    }

    clear() {
        this.buckets = Array.from({length: this.capacity} , () => new LinkedList());
    }

    keys() {
        return this.collect((node) => node.key);
    }

    entries() {
        return this.collect((node) => [node.key]);
    }

    collect(cb) {
        let res = [];
        this.buckets.forEach((bucket) => {
            let node = bucket.head;
            while (node) {
                res.push(cb(node));
                node = node.next
            }
        })
        return res;
    }
}

const test = new HashSet() // or HashMap() if using a factory

test.set('apple')
test.set('banana')
test.set('carrot')
test.set('dog')
test.set('elephant')
test.set('frog')
test.set('grape')
test.set('hat')
test.set('ice cream')
test.set('jacket')
test.set('kite')
test.set('grape')
test.set('lion')
test.set('moon')

console.log(test.buckets);