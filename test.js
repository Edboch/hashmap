import { HashMap } from "./hashmap.js"


const test = new HashMap() // or HashMap() if using a factory

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('grape', 'WNUFHE')
test.set('lion', 'golden')
test.set('moon', 'silver')

test.set('hat', 'BLAKC')
test.set('ice cream', 'WHITE')

console.log(test.get('grape'));
console.log(test.has('moon'));
test.remove('dog');
test.remove('apple');

//test.clear();

console.log(test.entries())

console.log(test.buckets,test.capacity,test.length());
