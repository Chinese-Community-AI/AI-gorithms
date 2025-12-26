# Summary
Graph traversal is an extension of N-ary tree traversal. The main methods are still depth first search and breadth first search. DFS, BFS.

The only difference is that trees do not have cycles, but graphs may have cycles. So we neeed to mark visited nodes to avoid infinite loops in cycles.

Because graphs are more complex, we usually have three scenarios: traversing "nodes", "edges" and "paths". Each scenario needs slightly different code.

When traversing "nodes" or "edges", use a visited array to mark nodes before recursion to avoid repeats. When traversing "paths", use an onPath array to mark nodes before recursion and remove the mark after recursion. 

## Depth-First Search (DFS)
In the previous article, we mentions that we usually don't use a Vertex class to store a graph. But here, I will use this class for now, so we could compare graph traversal with muti way tree traversal. Later, code examples based on adjacency list and adjacency matrix will be given.

Traverse All Nodes (visited Array)
Comparing the multi way tree traversal fromework with the graph traversal framework:

```python
# N-ary tree node
class Node:
    def __init__(self, val=0, children=None):
        self.val = val
        self.children = children if children is not None else []

# Traversal frmaework for N-ary tree
def traverse(root):
    # base case
    if root is None:
        return 
    # pre-order position
    print(f"visit {root.val}")
    for child in root.children:
        traverse(child)
    # post-order position

# Graph node
class Vertex:
    def __init__(self, id = 0, neighbors = None):
        self.id = id
        self.neighbors = neighbors if neightbors is not None else []

# Traversal framework for graph
# Need a visited array to record visited nodes 
# Avoid going backwardds and falling into infinite loop
def traverse_graph(s: Vertex, visted: List[bool]):
    # base case 
    if s is None:
        return
    if visited[s.id]:
        # Prevent infinite loop
        return
    # pre-order position
    visited[s.id] = True
    print(f"visit {s.id}")
    for neighbor in s.neighbors:
        traverse_graph(neighbor, visited)
    # post-order position
```

Graph traversal uses an extra visited array compared to multi-way tree traversal. This array keeps track of visited nodes to avoid infinite loops when there are cycles.

### Why do cycles cause infinite loops?
Here is a simple example. There is an edge from 1 -> 2, and another edge from 2 -> 1. Nodes 1 and 2 from a cycle:

1 <=> 2

If we don't mark visited ndoes, starting from 1, we go to 2, then back to 1, then 2 again, then 1 again, and so on: 1 -> 2 -> 1 -> 2 -> ... forever.

With a visited array, the first time we visit 1, we mark it as visited. If we see 1 -> 2 -> 1, we find that 1 is already visited, so we return immediately. This stops the recursion and avoids an infinite loop.

With this understanding, we can werite graph traversal code using adjacency list or adjacency matrix. Although their storage is different, they both provide the same API, so you can use the Graph interface from Graph.

```python
# traverse all nodes of the graph
def traverse(graph, s, visited):
    # base case 
    if s < 0 or s >= len(graph):
        return
    
    if visited[s]:
        # prevent infinite loop
        return
    
    # pre-order position
    visited[s] = True
    print("visit", s)
    for e in graph.neighbors(s):
        traverse(graph, e.to, visited)
    # post-order position
```

Because of the visited array, this functio will visit every node once and try to visit every edge once. So the time complexity is O(E + V), where E is the number of edges and V is the number of nodes.


### Why is the time complexity O(E + V)?
When we talked about Binary Tree Traversal, we said the time complexity is O(N), where N is the number of nodes.

Since a graph is like an extension of a tree, why is the time complexity of graph traversal O(E + V), not just O(V)?

This is a good question. THink about it for two minutes. The answer is below.
Actually, for binary trees or multi-way trees, you should also count the edges. But in trees, the number of edges and nodes is about the same, so the total is O(N + N) = O(N).

In a tree, each edge goes from a parent to a child. Ecvept for the root, every node pairs with the edge from its parent, so the number of edges is almost the same as the number of nodes.

But in graphs, any two nodes can be connected. The number of edges and nodes can be very different. That's why graph traversal is O(E + V).

## Traverse All Edges (2D visited Array)
In graphs, traversing all edges is not common. It is mainly used when Finding Eulerian Path, will be introduced with more details later.

In the previosu code, a 1D visited array ensures every node is visited once. The simpelst way to ensure every edge is visited once is to use a 2D visited array (where visited[u][v] means the edge u -> v has been visited)

Comparing with multi way tree traversal

```python
# N-ary tree node
class Node:
    def __init__(self, val=0, children=None):
        self.val = val
        self.children = children if children is not None else []

# Traverse the branches of an N-ary tree
def traverse_branch(root):
    # base case
    if root is None:
        return
    for child in root.children:
        print(f"visit branch: {root.val} -> {child.val}")
        traverse_branch(child)

# Graph node
class Vertex:
    def __init__(self, id=0, neighbors=None):
        self.id = id
        self.neighbors = neighbors if neighbors is not None else []

# Traverse the edges of a graph
# Need a 2D visited array to record visited edges,
# visited[u][v] indicates that edge u->v has been visited
def traverse_edges(s, visited):
    # base case
    if s is None:
        return
    for neighbor in s.neighbors:
        # if the edge has been visited, skip it
        if visited[s.id][neighbor.id]:
            continue
        # mark and visit the edge
        visited[s.id][neighbor.id] = True
        print(f"visit edge: {s.id} -> {neighbor.id}")
        traverse_edges(neighbor, visited)
```

Also use the Graph interface from Graph Basics:
```python
# traverse all edges of the graph starting from vertex s
def traverse_edges(graph, s, visited):
    # base case
    if s < 0 or s >= len(graph):
        return
    for e in graph.neighbors(s):
        # if the edge has been visited, skip it
        if visited[s][e.to]:
            continue
        # mark and visit the edge
        visited[s][e.to] = True
        print(f"visit edge: {s} -> {e.to}")
        traverse_edges(graph, e.to, visited)
```

Obviously, using a 2D visited array is not very efficient, because it needs to create a 2D array. The time complexity is O(E + V^2) and the space complexity is O(V^2), where E is the number of edges and V is the number of nodes.

When we talk about Hierholzer's Algorithm for Euler Path, we will show a simple way to avoid using a 2D visited array, We will not go into details here.

Traverse All Paths (onPath Array)
For trees, traversing all "paths" is almost the same as traversing all "nodes". But for graphs, there is a differnce between traversing all "paths" and all "nodes".

In trees, each edges goes form parent to child. So from the root root to any node targetNode, there is only one path. In other words, after visiting all nodes once, you have already foudn the only path from root to targetNode:

```python
# Traversal framework of a multi-way tree, finding
# the path from the root node to the target node
path = []

def traverse(root, targetNode):
    # base case
    if root is None:
        return
    if root.val == targetNode.val:
        # find target node
        print(f"find path: {'->'.join(path))}->{targetNode}")
        return
    # Preorder position
    path.append(root)
    for child in root.children:
        traverse(child, targetNode)
    # Postorder position
    path.pop()
```

For graphs, there can be more than one path from the start node src to the target node dest. We need an onPath array. When entering a node(preorder), we mark it as being visited. When leveing the node(postorder), we remove the mark. This way, we can go through all pahts in the graph and find all paths from src to dest:

```python
# The following algorithm can traverse all paths
# in the graph, finding all paths from src to dest

# onPath and path record nodes on the current recursive path
on_path = [False] * len(graph)
path = []

def traverse(graph, src, dest):
    # base case
    if src < 0 or src >= len(graph):
        return
    if on_path[src]:
        # prevent infinite loop (cycle)
        return
    if src == dest:
        # find target node
        print(f"find path: {'->'.join(map(str, path))}->{dest}")
        return

    # pre-order position
    on_path[src] = True
    path.append(src)
    for e in graph.neighbors(src):
        traverse(graph, e.to, dest)
    # post-order position
    path.pop()
    on_path[src] = False
```

### Key difference: Remove Mark in Postorder
Whe don't we remove the visited mark in the previous node traversal code, but here we remove the onPath mark in postorder?

In the previous code, the visited array makes sure each node is visited only once.
But for finding all paths in graph, we may visit the same node many times. This is the key difference.

Because the onPath array removed the mark in postorder, this function may visit nodes and edges many times. The time complexity is usually high (factorial or exponential). The total time depends on the sum of the lengths of all paths and the structure of the graph.

## Using Both visted and onPath Arrays
As explaiend above, visited is used for visiting all nodes, while onPath is for all paths. Can we use both at the same time? Yes.

Finding all paths is slow. In most cases, we don't need to list all paths, just find one that meets some condition. In this case, we can use the visited array to "prune" and skip some paths, making the algorithm faster.

For example, in TOpological Sort, we need to check if a graph has a cycle. We use both visited and onPath arrays to prune the search.

WQhen checking for cycles, if a node s is already marked as visited, it means all paths starting from s have been checked. If we did not find a cycle before, we wont' find one now, so we can skip node s .

## Notr Using visited or onPath Arrays
Are there cases where we don't need visited or onPath arrays? Yes.

The main purpose of visited and onPath is to handle cycles and avoid infinite loops. If the problem gurantees the graph has no cycles, we don't need to worry about this.

For example:
797. All Paths From Soure to Target
Given a directed acyclic graph (DAG) of n nodes labled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

The graph is given as follow: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from ndoe i to node graphp[i][j]).
...

This probelm gives you an adjacency list and promises there are no cycles. So you don't need visited or onPath, just run DFS

## Breadth-FIrst Search (BFS)
BFS on grpahs is just like level order traversal of an N-ary tree. The only difference is that you need a visited array to avoid visiting the same node more than once.

In theory, BFS can be used to find all "ndoes" or all "paths". But in practice, BFS is usually used to find the shortest path, not all paths.

Of course, BFS can also find all paths, but we usually use DFS to find all paths. I explained why in Binary Tree Traversal.

If we only need the shortest path, we only need to go through "nodes". Because BFS spreads our level by level, the first time we reach the target node, that path is the shortest.

Just like in N-ary Tree level Order Traversal, there are three main BFS code patterns for graphs. I wil write the graph BFS code next to the N-ary tree code for comparison. 

Pattern 1
The first pattern does not record the number of steps:
Level order traversal for an N-ary tree looks like this:

```python
from collections import deque

def level_order_traverse(root):
    if root is None:
        return
    
    q = deuqe()
    q.append(root)

    while q:
        cur = q.popleft()
        # visit the cur node
        print(cur.val)

        # add all child nodes of cur to the queue
        dor child in cur.children:
            q.append(child)
```
BFS for a graph is similar:

```python
# BFS traversal fo a graph starting from node s
def bfs(graph, s):
    visited = [False] * len(graph)
    from collections import deque
    q = deque([s])
    visited[s] = True

    while q:
        cur = q.popleft()
        print(f"visite {cur}")
        for e in graph.neighbors(cur):
            if visited[e.to]:
                continue
            q.append(e.to)
            visited[e.to] = True
```

Pattern 2
The second patter ncan record the number of steps.
Level order traversal for an N-ary tree:
```python
from collections import deque

def levelOrderTraverse(root):
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

BFS for a graph:
```python
from collections import deque

# BFS traversal of the graph starting from s, and record the steps
def bfs(graph, s):
    visited = [False] * len(graph) 
    q = deque([s])
    visited[s] = True
    # record the number of steps taken from s to the current node taken
    step = 0
    
    while q:
        sz = len(q)
        for i in range(sz):
            cur = q.popleft()
            print(f"visit {cur} at step {step}")
            for e in graph.neighbors(cur):
                if visited[e.to]: 
                    continue
                q.append(e.to)
                visited[e.to] = True
        step += 1
```

Pattern 3
The third pattern works for graphs with weighted edges.
Level order traversal for an N-ary tree:
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
        # Visit the cur node while knowing its level
        print(f"depth = {depth}, val = {cur.val}")

        for child in cur.children:
            q.append(State(child, depth + 1))

```

BFS for a graph:
```python
# BFS traversal of a graph structure, starting BFS from node s and recording the
# number of steps (the number of edges from the start node s to the current node)
# Each node maintains its own State class, recording the number of steps from s
class State:
    def __init__(self, node, step):
        # Current node ID
        self.node = node
        # Number of steps from the start node s to the current node
        self.step = step


def bfs(graph, s):
    visited = [False] * len(graph)
    from collections import deque

    q = deque([State(s, 0)])
    visited[s] = True

    while q:
        state = q.popleft()
        cur = state.node
        step = state.step
        print(f"visit {cur} with step {step}")
        for e in graph.neighbors(cur):
            if visited[e.to]:  
                continue
            q.append(State(e.to, step + 1))
            visited[e.to] = True
```

In the code above, the State.step variable records the minimum number of steps (edges) from the start node s to the current node.

But in a weighted graph, each edge can have a different weight. Usually, the problem asks for the path from src to dest with the smallest total weight. In this case, the step value (edge count) is not enough, and this code will node work.

We will cover how to find the shortest path in weighted graphs in Graph Shortest Path Algorithms. You will see that with small changes to this BFS, you can get Dijkstra's algorithm for weighted graphs.

