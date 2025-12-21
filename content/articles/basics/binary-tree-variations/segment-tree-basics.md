## Segment Tree Basics 

A segment tree is a derivative of the binary tree structure used to efficiently solve problems of interval queries and dynamic modifications in arrays.

A segment tree can query the aggregated value of interval elements of any length with a time complexity of O(logN), and perform dynamic modifications on interval elements of any length with a time complexity of O(logN), where N is the number of elements in the array.

Firstly, the basic segement tree includs interval query query and single point update update methods.

Segement Tree is a binary tree data structure for storing intervals/segments, enabling efficient range queries and updates.

Core Concept
Instead of querying a range [L,E] in O(n) time, segment tree do it in O(logn) by preprocessing the array into a tree where:
- Each node represetns an interval
- Leaf nodes represetn single elemnts
- Internal nodes represetn merged information from children

