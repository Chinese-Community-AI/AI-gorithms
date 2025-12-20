We will start by creating a simplified version of a priority queue to help you understand the core operations of a binary heap, namely sink and swim. Finally, a more complete code implementation will be introduced.

## Simplified Priority Queue

The simplified priority queue implementation has the following limitations:

1. Does not support generics; only stores integer elements.

2. No resizing; the queue capacity is fixed when created. Assum the number of inserted elements will not exeed this capacity.

3. Only implements a min-heap (the root node is the smallest value in the heap), and does not support custom comparators.

Based on these restrictions, the API of this simplified priority queue is as follows:
