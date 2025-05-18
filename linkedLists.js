class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add to end
    append(value) {
        // List is empty create the first node
        if (this.head === null) {
            this.head = new Node(value);
            return;
        }

        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(value);
    }

    // Add to start
    prepend(value) {
        // List is empty create the first node
        if (this.head === null) {
            this.head = new Node(value);
            return;
        }

        const newHead = new Node(value);
        newHead.next = this.head;
        this.head = newHead;
    }

    // Returns a string representing
    toString() {
        let current = this.head;
        let outputString = '';
        while (current !== null) {
            outputString += `(${current.value}) -> `;
            current = current.next;
        }
        outputString += '(null)';
        return outputString;
    }

    // Returns the size of list
    size() {
        if (this.head === null) {
            return 0;
        }
        let current = this.head;
        let count = 0;
        while (current !== null) {
            count += 1;
            current = current.next;
        }
        return count;
    }

    // Returns the head of the list
    getHead() {
        return this.head;
    }

    // Returns the tail of the list
    getTail() {
        if (this.head === null) {
            return null;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        return current;
    }

    // Returns the node at the specified index (beginning from 0)
    // Returns null if the index is out of range
    at(index) {
        if (index < 0) {
            return null;
        }

        let current = this.head;
        let counter = 0;
        while (current !== null && counter < index) {
            current = current.next;
            counter += 1;
        }
        return current;
    }

    pop() {
        // Can't pop from an empty list
        if (this.head === null) {
            return;
        }
        // Point the head to null if there is only one node
        if (this.head.next === null) {
            this.head = null;
            return;
        }

        let parent = this.head;
        let child = this.head.next;

        while (child.next !== null) {
            parent = parent.next;
            child = child.next;
        }
        parent.next = null;
    }

    // Check whether or not the list contains the specified value
    contains(value) {
        // Empty lists contain no values
        if (this.head === null) {
            return false;
        }

        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Return the index of the specified value within the list
    // Return null if the value doesn't exist
    // Return the first index if there is more than one occurrence of the specified value
    find(value) {
        // Empty lists contain no values
        if (this.head === null) {
            return null;
        }

        let current = this.head;
        let count = 0;
        while (current !== null) {
            if (current.value === value) {
                return count;
            }
            current = current.next;
            count += 1;
        }
        return null;
    }

    // Insert a node at the specified index
    // Cannot insert a node at an index where (index - 1) isn't an already existing node
    insertAt(index, value) {
        if (index === 0) {
            this.prepend(value);
            return;
        }

        const previousNode = this.at(index - 1);
        // If the node before the index doesn't exist => cannot create a node at the selected index
        if (previousNode === null) {
            return;
        }
        // If the selected index is to be the new tail, simply add it as the 'next' of 'previousNode'
        if (previousNode.next === null) {
            previousNode.next = new Node(value);
            return;
        }

        // Else, the selected index is between two nodes
        // Rearrange the nodes to fit the new in between them
        const inBetween = new Node(value);
        inBetween.next = previousNode.next;
        previousNode.next = inBetween;
    }

    // remove a node at the specified index
    // Cannot remove a node at an index where (index - 1) isn't an already existing node
    removeAt(index) {
        if (index === 0) {
            if (this.head === null) {
                return;
            }

            if (this.head.next === null) {
                this.head = null;
            } else {
                const newVal = this.head.next.value;
                const newNext = this.head.next.next;
                this.head = null;
                this.head = new Node(newVal);
                this.head.next = newNext;
            }
        }

        const previousNode = this.at(index - 1);

        // In both cases there is nothing to remove
        if (previousNode === null || previousNode.next === null) {
            return;
        }

        const selectedNode = previousNode.next;

        // If 'selected.next === null' previousNode becomes the new tail
        // If 'selected.next !== null' override 'previousNode.next'
        // This will sever the only reference to the selectedNode removing it from the list
        previousNode.next = selectedNode.next;
    }
}
