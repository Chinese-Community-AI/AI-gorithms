N-ary Tree Recursive Level Traversal 

This article will resolve
429. N-ary Tree Level Order Traversal
589. N-ary Tree Preorder Traversal
590. N-ary Tree Postorder Traversal 

### In One Sentence
A multi-way tree is an extension of the binary tree. A binary tree is a special type of multi-way tree.

Traversal of a multi-way tree is an extension of binary tree traversal.

A forest is a collection of multiple multi-way trees. A single multi-way tree is a special kind of forest 

A node in a binary tree looks like this. Each node has two children:

```python
class TreeNode:
    def __init-_(self, val = 0, left=None, right = None):
        self.val = val
        self.left = left
        self.right = right
```

A node in a multi-way tree looks liek this. Each node can have any number of children:

```python
class Node:
    def __init-_(self,val: int):
        self.val = val
        self.children = []
```
That's the only difference. 

Forest
Let me explain what "forest" means. Later, when we talk about the Union Find algorith, this concept will be useful.

As the name suggests, a forest is a colelction of multi-way trees(even a single tree is a special kind of forest). In code, it is just a list of the root nodes of several multi-way trees, like this:

List<Node> forest;

You just need to run DFS or BFS on each root node, and you will visit all the nodes in the forest.

In the uniion-find algorithm, we often keep the root nodees of severeal multi-way trees. These toots together form a forest.

Now, let's talk baout traversal of a multi-way tree. Just like a bianry tree, there are only two types: recursive traversal (DFS) and level order traversal (BFS).

## Recursive Traversal (DFS)
Comparing the frameworks for traversing binary trees and multi-way trees:

```python
def traverse_binary_tree(root):
    if root is None:
        return 
    # pre-order position: process node before children
    print(f"Pre: {root.val}")

    traverse_binary_tree(root.left)

    # in-order position: process node between left and right
    print(f"In: {{root.val}}")

    traverse_binary_tree(root.right)

    # post-order position: process node after children
    print(f"Post: {root.val}")
```
Complete n-ary tree example:
```python
def traverse_n_ary_tree(root):
    if root is None:
        return
    # pre-order position: process node before children
    print(f"Pre: {root.val}")

    for child in root.children:
        traverse_n_ary_tree(child)
    
    # post-order position: process node after children
    print(f"Post: {root.val})
    
```

Key observations:
- N-ary trees have no "in-order" position (in-order only makes sense for binary trees with exactly left/right children)
- The framework shows the 3 key momemtns you can act on a node
- You'd add actual logic (printing, calculating, collecting results) at those postions

The only difference is that an N-ary tree does not have an inorder position, as there can be multiple nodes, making the concept of inorder postion meaningless.

## Level Order Traversal (BFS)
The level order traversal of an N-ary tree is similar to binary tree level order traversal, using a queue. The difference is replacing the left and right child nodes of a binary tree with all the child nodes of an N-ary tree. There are three ways to peform level order traversal for an N-ary tree, listed below.

Method One
The first method of level order traversal does not record node depth:

```python
from collections import deque

def level_order_traverse(root):
    if root is None:
        return 
    q = deque()
    q.append(root)

    while q:
        cur = q.popleft()
        # visit the cur ndoe
        print(cur.val)

        # add all child nodes of cur to the queue
        for child in cur.children:
            q.append(child)           
```

## Mehotd Two 
The second method of level order traversal can record node depth:
```python
from collections import deque

def levelOrderTraverse(root)
    if root is None:
        return 
    q = deque()
    q.append(root)
    # record the current level being traversed (root node is considered level 1)
    depth = 1

    while q:
        sz = len(q)
        for i in range(sz):
            cur = q.popleft()
            # visit the cur node and know the level it is on
            print(f"depth = {depth}, val = {cur.val}")

            for child in cur.children:
                q.append(child)
        depth += 1
```

## Method Three
The third method can accommodate edges with different weights:

```python
# Level-order traversal of a multi-way tree
# Each node maintains its own State class to record depth and other information

class State:
    def __init__(self, node, depth):
        self.node = node
        self.depth = depth
    
    def levelOrderTraverse(root):
        if root is None:
            return
        q = deque()
        # Record the current level being traversed (root node is considered as level 1)
        q.append(State(root, 1))

        while q:
            state = q.popleft()
            cur = state.node
            depth = state.depth
            # Visist the cur ndoe while knowning its level
            print(f"depth = {depth}, val = {cur.val}")

            for child in cur.children:
                q.append(State(child, depth + 1))


```