### Summary
A binary search tree is a special kind of binary tree. Its main use is to implement TreeMap and TreeSet.

In the previous article Common Types of Binary Trees, we introduced binary search trees. Next, I will show you how to implement a tructure like Java's TreeMap and TreeSet. This will help you understand both the theory and practice.

Tree needs a lot of effort to mastering, so don't feel discouraged. We will master the binary tree first before moving to more advanced trees like tree map and tree set.

## Advantages of Binary Search Trees
The main feature of a binary search tree (BST): the left child is smaller, the right child is bigger.

For every node in the tree, all nodes in its left subtree have smaller values, and all nodes in its right subtree have larger values.

This "left smaller, right bigger' feature helps us quickly find a node or all nodes in a certain range. This is the advantage of a BST.

You should have already learned about binary tree traversal. Next, I will use standard traversal functions and visual panels to compare BSt and normal binary tree operations.

Thanks to the BST property, we can quickly locate the target node. The best time complexity is the height of the tree, O(logN). For a normal binary tree, you need O(N) time to check all ndoes.

For other operations like add, delete, and upate, you also need to find the traget node first. These oeprations just change pointers, so their time complexity is also O(logN).

## How TreeMap/TreeSet work

From the name TreeMap, you can see that it is similar to HashMap. Both store key-value pairs. HashMap stores them in an array called table, while TreeMap stores them in the nodes of a binary search tree. 

As for TreeSet, its relationship with TreeMap is just like the realtionship between Hashset and HashMap. In simple terms, TreeSet is a wrapper around TreeMap. So here, I will mainly explain how TreeMap works.

The classic TreeNode strucute in LeetCode looks like this:

```python
class TreeNode:
    def __init__(self, val = 0, left = None, right = None):
        self.val = val
        self.left = left
        self.right = right
```

If we change this classic TreeNode structure a little, we can use it  for TreeMap:

```python
class TreeNode:
    def __init__(self, key: K, val: V):
        self.key = key
        self.value = value
        self.left = None
        self.right = None
```

## How TreeMap/TreeSet Work
From the name TreeMap, you can see that it is similar to HashMap. Both Store key-value pairs. HashMap stores them in an array called table, while TreeMap stores them in the nodes of a binary search tree.

As for TreeSet, its relationship with TreeMap is just like the relationship between HashSet and HashMap. In simple terms, TreeSet is a wrapper around TreeMap. So here, I will mainly explain how TreeMap works.

The classic TreeNode structure in LeetCode looks like this:

```python
class TreeNode:
    def __init__(self, val = 0, left = None, right = None):
        self.val = val
        self.left = left
        self.right = right
```
If we change this classic TreeNode structure a little, we can use it for TreeMap:

```python
class TreeNode:
    def __init__(self, key: K, value: V:
        self.key = key
        self.val = value
        self.left = None
        self.right = None
```

The TreeMap we will impleent has some APIs like: Add/Update, Get, Check, Find the smallest key/largest key, Find the largest key less than or equal to the given key, etc.

In addition to the standard methods for adding, deleting, searching and modifying such get, put, remove, containKey, TreeMap offers many additional methods, primarily related to the size of keys

Hash tables are praactical, but they can't effectively handle the size relationship between keys. The LinkedHashMap implemented in the previous article strengthening Hash Tables with Linked Lists only arranges keys in the hash table by "insertion order" and still cannot arrange them by "size order."

Here is a simple intro to how each method of TreeMap works. The detailed code will be explained later.

### Basic Operations: Add, Delete, Find, Update

First, the get method is similar to finding a node above. Comapring the target key with the current node's key, then decide to go left or right. This way, you can skip half of the nodes at each step. Then decide to go left or right. This way, we can skip half of the nodes at each step. The time complexity is O(logN).

For put, remove, and containsKey, you also first use the get method to find the node with the target key, then do some poiter changes. The time complexity is also O(logN). 

The floorKey and ceilingKey methods are used to find the maximum key less than or equal to, or the minimum key greater than or equal to, a given key. Their implementation is similar to get. The only difference is: if the target key is not found, get returns null, but ceiling key and floorKey return the key closest to the target, like lower bound and upper bound.

The rangeKeys method takes a [low, hi] interval and returns all keys in this range. This method also uses the properties of BST to improve search efficiency:

If the current node's key is less than low, then all nodes in the left subtree are less than low and can be skipped. If the current node's key is greater than hi, then all nodes in the right subtree are greater than hi and can also be skipped.

## firstKey and lastKey Methods
The firstKey method finds the smallest keyk, and the lastKey method finds the largest key. Thanks to the property of BST(left is smaller, right is bigger), these are easy to implement:

Start from the root of the BST and keep going left. The last non-empty node you reach is the smallest node. Similarly, keep going right to find the largest.

## keys Method
The keys method returns all the keys in order. This uses the property that BST's in-order traversal gives sorted result.

## selectKey and rank Methods
These two methods are intersting. The selectKey method finds the key ranked at position k (from smallest to largest, staring from 1). The rank method finds the rank of a given key.

For example, in the BST below, selectKey(3) return 5 because 5 is the third smallest element.

selectKey Method, a approach is to leverage the ordered nature of the in-order traversal result of a BST. By recording the k-th node travrsed during the inorder traversal, you can identify the node with rank k.

However, this approach has a time complexity of O(k), as you need to traverse at least k nodes in-order traversal.

A more ingenious method is to add more fields to the binary tree nodes to record additional information:

## Performance Issues:
Earlier we said the complexty is the height of the tree, O(logN), where N is the total number of nodes. But this is only true when the binary search tree is "balanced", that is the height difference between the left and right subtree is not too big.

But if a tree in the worst scenario has one side, it "becomes" a linked list, so the complexity becomes O(N).

So, the performance of a binary search tree depends on its height, and the height depends on how balanced it is. Therefore, in real applications, tings like TreeMap need to keep the tree balanced automatically, to avoid performance problems.

How to keep the tree balanced? This is a bit complex. When you insert or delete nodes, you need to do some local rotations on the tree. 

The well-known Red-Black Tree is a kind of self-balancing binary search tree. Its balance performance is very good, but the implementation is more complicated. This is the price for perfect performance. 

