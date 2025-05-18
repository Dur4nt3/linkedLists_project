import { LinkedList } from './linkedLists.js';

const list = new LinkedList();

list.append(1);
list.prepend(0);
list.prepend(-1);
list.removeAt(0);
list.insertAt(2, 2);
list.append(3);
list.append(3.5);
list.removeAt(4);
list.append(5);
list.insertAt(4, 4);
list.append(5.5);
list.append(7);
list.append(7.5);
list.removeAt(6);
list.insertAt(1, 0.5);
list.removeAt(1);
list.removeAt(7);
list.insertAt(list.size() - 1, 6);
console.log(list.toString(), '\n');
console.log(`list contains 3: ${list.contains(3)}, at: ${list.find(3)}`);
console.log(`list contains 5.5: ${list.contains(5.5)}\n`);
console.log(`list size: ${list.size()}`);
console.log(
    `list head: ${list.getHead().value}, list tail: ${list.getTail().value}\n`,
);

console.log('adding 8 to the tail:');
list.append(8);
console.log(`list contains 8: ${list.contains(8)}`);
console.log('popping the tail:');
list.pop();
console.log(`list contains 8: ${list.contains(8)}`);
