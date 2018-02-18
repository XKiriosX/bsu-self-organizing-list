class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(data) {
        var node = new Node(data);
        var curr = this.head;
        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }
        this.tail = node;
    }

    size() {
        var i = 0;
        var node = this.head;
        if (node == null) {
            return 0;
        }
        while (node != null) {
            i++;
            node = node.next;
        }
        return i;
    }

    at(index) {
        var counter = 0;
        var node = this.head;
        
        if (this.head == null) {
            return null;
        }
        while (counter != index) {
            if (node.next == null) {
                return null;
            }
            node = node.next;
            counter++;
        }
        return node.data;
    }

    findNode(data) {
        var node = this.head;
        if (node == null) {
            return null;
        }
        while (node != null) {
            if (node.data === data) {
                return node;
            }
            node = node.next;
        }
        return null;
    }

    toArray() {
        var arr = [];
        var node = this.head;
        while(node != null) {
            arr.push(node.data);
            node = node.next;
        }
        return arr;
    }

    removeAt(index) {
        if (this.head == null) {
            return;
        }
        var curr = this.head;
        if (index == 0) {
            this.head = curr.next;
            curr = null;
            return;
        }
        var flag = 0;
        while (curr != null && flag < index - 1) {
            curr = curr.next;
            if (curr == null) {
                break;
            }
            flag++;
        }
        if (curr == null || curr.next == null) {
            return;
        }
        var nxt = curr.next.next;
        curr.next = null;
        curr.next = nxt;
    }

    moveToFront(node) {
        var curr = this.head;
        var prev = null;
        while (curr != null) {
            if (curr.data == node.data) {
                if (prev != null) {
                    prev.next = curr.next;
                    curr.next = this.head;
                    this.head = curr;
                }
                return;
            }
            prev = curr;
            curr = curr.next;
        }
        return;
    }

    reorganize(data) {

    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
