//class for creating nodes
class Node {
    //constuctor to establish node value and pointer
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//class to contain all of linked list
class LinkedList {
    //constructor for linked list to establish tail, head and size
    constructor() {
        this.tail = null;
        this.head = null;
        this.size = 0;
    }

    //function to add node to end of list
    append(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    //function to add node to start of list
    prepend(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    //function to remove last node from list
    pop() {
        //check that head exists
        if(!this.head) {
            return;
        }
        //establish variables for current and previous
        let current = this.head;
        let previous = null;

        while(current) {
            if(current === this.tail) {
                this.tail = previous;
                previous.next = null;
                this.size--;
                break
            }
            previous = current;
            current = current.next;
        }
    }

    //function to see if a value is in a list
    contains(value) {
        let current = this.head;

        if(!this.head) {
            return false;
        }
        while(current) {
            if (value === current.value) {
                return true
            } else if (current.next === null) {
                return false
            }
            current = current.next;
        }
    }

    //function to print list
    toString() {
        //establish variables for current and the empty list
        let current = this.head;
        let printedList = '';

        //while loop to add current value to list, then go to next node
        while(current) {
            printedList += `${current.value} -> `;
            current = current.next;
        }
        //prints list, and adds null to the end
        return `${printedList} null`
    }

    //function that returns value of certain index in list
    at(index) {
        //establish variables for current node and index
        let current = this.head;
        let currentIndex = 0;

        //condition to check for improper inputs
        if (index > (this.size - 1) || index < 0) {
            return `Indexes in this list range from 0 to ${this.size - 1}`
        }

        //while loop to iterate through list until it returns value at index
        while(currentIndex < this.size) {
            if (currentIndex === index) {
                return current.value
            }
            current = current.next;
            currentIndex++;
        }
    }

    //function that returns value in list
    find(value) {
        //establish variables for current node and index
        let current = this.head;
        let currentIndex = 0;

        //check to see if value is in list
        if(!this.contains(value)) {
            return 'Value not found in list.';
        } else {
            //while loop to find value in list
            while(current) {
                if (current.value === value) {
                    return `Value found at index ${currentIndex}`;
                }
                current = current.next;
                currentIndex++;
            }
        }
    }

}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend('Paco');