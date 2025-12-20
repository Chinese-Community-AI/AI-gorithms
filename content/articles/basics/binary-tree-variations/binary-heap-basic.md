## Sumary
A binary heap is a data structure capable of dynamically sorting, extenging from the bianry tree structure.

The main operations of a binary heap are twofold: sink (downward adjustment) and swim (upward adjustment), which are used to maintain the properties of the binary heap.

The primary applications of a binary heap are twofold: firstly, as as a very useful data structure known as a priority queue, and secondly, as a sorting method called heap sort.

## Properties of Binary Heap
A binary heap is a data structure that can sort data dynamically. Dynamic sorting means we can keep adding or removing elements, and the structure will automatically adjust so we can always get elements in order. Regular sorting algorithms cannot do this.

There are mainly two data structures that support dynamic sorting: the priority queue (usually implemented with a binary heap) and the binary search tree. Binary search trees are more general and can do everything a priority queue can. But the API and code for prioerity queues are simpler, so if a problem cam be sovled with a priority queue, we usually don't use a binary search tree.

How does a bianry heap achieve dynamic sorting? This is becasue ot its special properties.

## Properties of Binary Heap
You can think of a binary heap as a special kind of binary tree. For any node, its value must be greater than or equal t (or less than or equal to) all the values in its left and right subtrees. If it is greater than or equal to, we call it a "max heap." If it is less than or equal to, we call it a "min heap"

In a min heap, all nodes below any node have values greater than it. So, the root of the tree is the smallest value. In a max heap, the root is the largest value. This makes it easy to find the maximum or minimum value quickly

Another property: the left and right subtrees of a binary heap are also binary heaps.This property is mainly used in heap sort optimization. 

## The most common Use: priority Queue

```python
class MyPriorityQueue:
    # Insert and element at the top of the binary heap, time complexity O(logN)
    # N is the current number of elements in the binary heap
    def push(self, x: int):
        pass
    # Return the top element of the heap, time complexity O(1)
    # The top element is the maximum or minimum value in the binary heap
    def push(self, x: int):
        pass
    
    # Return the top element of the heap, time complexity O(1)
    # The top element is the maximum or minimum value in the binary heap, depending on whether it is a max heap or min heap
    def peek(self) -> int:
        pass
    
    # Delete the top element of the heap, time complexity O(logN)
    def pop(self) -> int:
        pass
    
    # Return the number of elements in the heap, time complexity O(1)
    def size(self) -> int:
        pass
    
    # Different programming languages may use differnt API names, but their effects and how they work are similar.

```

Of course, automatic sorting has a cost. Pay attention to the time complexity of the priority queue APIs. The time complexity for adding or removing elements is O(logN), where N is the number of elements in the binary heap. When you use this structure in algorithm problems, you should know how to calculate the toal time complexity.

### Why Is It Called a "Priotity Queue"?
This is because the APIs of this data structure are very similar to the standard queue APIs we talked about before. A standard queue uses first-in-first-out order, while a binary heap is like a queue that sorts itself. So, calling it priority queue is quite fitting.

But you must also understan that although its APIs look like a queue, its underlying priciple is realted to binary trees, not queues.

## Another Use: Heap Sort
Just put all elements of an unsorted array into a binary heap (priority queue) with push, then use pop to take them out one by one. In the end, you get a sorted array:

Normally, the code for heap sort does not depend on a priority queue, and its space complexity is O(1). That's because the logic for push and pop is writeen directly in the code, and the heap is built directly on the array, so no extra space is needed.

But the key idea of heap srt is still to use the properites of a binary heap  to sort elements. 
