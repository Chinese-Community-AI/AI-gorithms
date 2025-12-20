We will start by creating a simplified version of a priority queue to help you understand the core operations of a binary heap, namely sink and swim. Finally, a more complete code implementation will be introduced.

## Simplified Priority Queue

The simplified priority queue implementation has the following limitations:

1. Does not support generics; only stores integer elements.

2. No resizing; the queue capacity is fixed when created. Assum the number of inserted elements will not exeed this capacity.

3. Only implements a min-heap (the root node is the smallest value in the heap), and does not support custom comparators.

Based on these restrictions, the API of this simplified priority queue is as follows:

```python
class SimpleMinPQ:
    # create a priority queue with capacity
    def __init__(self, capacity: int):
        pass
    
    # return the number of elements in the queue
    def size(self) -> int:
        pass
    
    # insert an element into the queue
    def push(self, x: int):
        pass
    
    # return the smallest element in the queue (heap top element)
    def peek(self) -> int:
        pass
    
    # delete and return the smallest elemenet in the queue (heap top element)
    def pop(self) -> int:
        pass

```

## Key CHallenges
The main challenge of binary heaps is that when you insert or delte an element, you must maintain the heap property. 

## Insertion: push/swim Method for Adding Elements
### Core Steps
Taking a min-heap as an example, inserting a new element into the min-heap follows two steps:
1. First, append the new element to the rightmost position at the bottom layer of the binary tree to maintain the structure of a complete binary tree. At this point the parent node of this element might be larger, which does not satisfy the min-heap property. 

2. To restore the min-heap property, the new element needs to be floated up (swim) until its parent node is smaller or it reaches the root node. At this point, the entire binary tree satisfies the min-heap property.

Each node in the binary heap is a modified binary tree node. In addition to the left, right, val attributes, it also contains a parent attribute pointing to the parent node:
```js 
class HeapNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}
```

## Delete: pop/sink Method for Removing Elements
