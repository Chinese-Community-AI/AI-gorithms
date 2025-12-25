## Summary 
A graph is an extention of the N-ary tree structure. Logically, a graph consist of multiple nodes and edges. We usually use adjacency lists or adjancency matrices to store graphs.

In a tree, only parent nodes can point to child nodes; there are no child-to-parent links, and child ndoes do not link to each other. In contrast, graphs do not have these restrictions - nodes can point to each other, forming complex networks.

Graphs can abstract many complex problems and have let to many classic graph algorithms, such as Bipartite Graph Algorithm, Topological Sort, Shortest Path ALgorithm, and Minimum Spanning Tree Algorithm. These topics will be introduced later.

## Logical Structure of Graph
A graph is made up of nodes(Vertex) and edges (Edge).

Based on the logical structure of a graph, we coud think of each node as being implemented like this:

```python
# logical structure of graph node
class Vertex:
    def __init__(self, id: int):
        self.id = id
        self.neighbors = []
```

It's very similar to the N-ary Tree Node
```python
# basic N-ary tree node
class TreeNode:
    def __init__(self, val = 0, children = None):
        self.val = val
        self.children = children if children is not None lese []
```

So, a graph is not that cimplicated, In essence, it is just a more advanced N-ary tree. All DFS/BFS algorithms for trees work for graphs as well.

What I just explaiend is the "logical" structure. In actual code, we rarely use this Vertex class. Instead, we use adjacency lists and adjacency matrics to implement graphs.

## Adjacency List and Adjacency Matric
Adjacency list is easy to understand. For each node x, you store its neighbors in a list, and then map x to this list. This way, you can find all neighbors of x easily.

Adjacency matrix is a 2D boolean array. Let's call it matrix. If node x and node y are connected, set matric[x][y] to true (the green squares in the picture mean true). If you want to find the neighbors of node x, just look through matrix[x][...]

In code, adjacency list and adjacency matrix look like this:
```python
# adjacency list
# graph[x] stores all neightbor nodes of x
graph: List[List[int]] = []

# Adjacency matrix
# matrix[x][y] records whether there is an edge from x to y
matrix: List[List[bool]] = []
```

### What if the node type is not int?
In the examples above, I assume the graph nodes are integers starting from 0, so you can use them directly in adjacency lists and matrices.

But in reawl problems, nodes might be something else, like strings or custom objects. How do you store them then?

It's simple. Just use a hash map to map the real node to an integer id. Then you can use adjacency lists and matrices with these integer ids.

In all examples and exercises below, I will assume graph nodes use integer ids.

So, why do we have these two ways to store a graph? It's because they suit different situations.

Pay attention to their space complexity. For a graph with V nodes and E edges, the space complexity of adjacency list is O(V+E), while for adjacency matrix it is O(V^2).

If E is much less than V^2 (a sparse graph), adjacency list saves more space than adjacency matrix. If E is close to V^2 (a dense graph), then there is little difference.

In later graph algorithms and exercises, most graphs are sparse, so you will see adjacency list used more often.

The biggest advantage of adjacency matric is that matrices are powerful math tools. Some hidden properties of graphs can be revelaed through clever matrix oeprations. But we don't cover math in this article. 

This is also why we must turn grpah nodes into integer ifds - otherwise, how can you use matrix operations.

## Different Types of Graph Structures
You might ask, the graph model we just talked about is only a "directd unweighted graph." But what about weighted graphs, undirected graphs, and other types?

In face, these more complex models are all based on this simplest graph model.

How do we implement a directed weighted graph? It is simple:

If you use an adjacency list, you not only store all the neighbors of node x, but also store the weight from x to each neighbor. This way, you can build a directed weighted graph.

If you use an adjacency matrix, matrix[x][y] is no longer a boolean value. Instead, it is an integer 0 means there is no connection, other values mean the weight. This makes it a directed weighted graph.

The code looks like this:

```python
#adjacency list
# graph[x] stores all neighbor nodes of x and their correspoiding weights
# the specific implementation doesn't have to be
# like this, refer to the general implementation below
class Edge:
    def __init__(self, to: int, weight: int):
        self.to = to
        self.weight = weight

graph: list[list[Edge]] = []

# adjacency matrix
# matrix[x][y] record the weight of the edge from x to y, 0 means not adjacent
matrix: list[list[int]] = []
```

How do we implement an undirected graph? Also very simple. "Undirected" just means "bindirectional.:

If you want to connect nodes x and y in an undirected graph, just set both matrix[x][y] and matrix[y][x] to true. For adjacency lists, add y to x's neighbor list, and add x to y's neighbor list.

Combine these tricks, and you get an undirected weighted graph.

Now, that's the basic introduction to graphs. No matter what kind of graph you see next time, you should have some confidence.

Next, let's write a general class to implement basic operations on a graph (add, delete, search, update).

## General Code Implementation for Graph Structures

Based on the explanation above, we can design a Graph interface to handle basic operations like add, delete, search and update:

```python
class Graph(ABC):
    @abstractmethod
    def addEdge(self, from_: int, to: int, weight: int):
        # add an edge with weight
        pass
    
    @abstractmethod
    def removeEdge(self, from_: int, to:int):
        # remove an edge
        pass
    
    @abstractmethod
    def hasEdge(self, from_: int, to: int) -> bool:
        # determine if two nodes are adjacent
        pass
    
    @abstractmethod
    def weight(self, from_: int, to: int) -> int:
        # return the weight of an edge
        pass
    
    @abstractmethod
    def neighbors(self, v: int) -> List[Tuple[int, int]]:
        # return all neighboring nodes and corresponding weights of a node
        pass
    
    @abstractmethod
    def size(self) -> int:
        # return the total number of nodes
        pass
```

This is the interface for a directed weighted graph. But with this interface, you can impklement all kinds of u directed/directed/unweighted/weighted graphs. Below is the detailed code.

## Directed Weighted Graph (Adjacency List Implementation)
Here is a simple and general implementation. Later, in graph algorithm tutorials and exedercises, we may use this code. Some possible optimizations are marked as comments in the code.

To keep things simple and general implementation. Later, in graph algorithm tutorials and exercises, we may use this code. Some possible optimizations are marked as comments in the code. 

To keep things simple, the code below assume all input is valid. There will be no invalid node ids, and no duplicate edges.

In real problems, we usually remove invalid data first, and then build the graph.

```python
# Generic implementation of weighted directed graph (adjacency list)
class WeightedDiagraph:
    # Store adjacent nodes and edge weights
    class Edge:
        def __init__(self, to: int, weight: int):
            self.to = to
            self.weight = weight
        
        def __init__(self, n: int):
            # For simplicity, we pass the total number of nodes wehn bulding the graph, this can actually be optimized
            # For example, setting graph as Map<Integer, List<Edge>> allows dynamic addition of new nodes
            self.graph = [[] for _ in range(n)]
        
        # Add, add a weighted directed edge, complexity O(1)
        def addEdge(self, from_: int, to: int, weight; int):
            self.graph{from_}.append(self.Edge(to, weight))
        
        # Delete, remove a directed eged, complexity O(V)
        def removeEdge(self, from_: int, to: int):
            self.graph[from_] = [e for e in self.graph[from_] if e.to != to]
        
        # Check, dtermine if two nodes are adjacent, complexity O(V)
        def hasEdge(self, from_: int, to: int) -> bool:
            for e in self.graph[from_]:
                if e.to == to:
                    return True
                
                return False
            
        # Check, return the weight of an edge, compleixty O(V)
        def weight(self, from_: int, to: int) -> int:
            for e in self.graph[from_]:
                if e.to == to:
                    return e.weight
                raise ValueError("No such edge")
        
        # The traversal behavior of hasEdge, removeEdge, and weight methods above can be optimized
        # For example, using Map<Integer,>...

        # Check, return all neighbor nodes of a certain node, complexity O(1)
        def neighbors(self, v: int):
            return self.graph[v]

```

## Directed Weighted Graph (Adjacency Matrix Implementation)
```python
class WeightedDiagraph:
    # Store adjacent nodes and edge weights
    class Edge:
        def __int__(self, to, weight):
            self.to = to
            self.weight = weight
        
    def __init__(self, n):
        # Adjacency matrix, matrix[from][to] stores the weight of the edge from node 'from' to node 'to'
        # 0 menas no connection
        self.matrix = [[0] * n for _ in range(n)]

    # Add a directed edge with weight, complexity O(1)
    def addEdge(self, from_node, to, weight):
        self.matrix[from_node][to] = weight
    
    # Delete a directed edge, complexity O(1)
    def removeEdge(self, from_node, to):
        self.matrix[from_node][to] = 0
    
    # Check if two nodes are adjacent, complexity O(1)
    def hasEdge(self, from_node, to):
        return self.matrix[from_node][to] != 0
    
    # Check and return the weight of an edge, complexity O(1)
    def weight(self, from_node, to):
        return self.matrix[from_node][to]
    
    # Check and return all neightbor nodes of a certain node, complexity O(V)
    def neightbots(self, v):
        res = []
        for i in range(len(self.matrix[v])):
            if self.matrix[v][i] != 0:
                res.append(self.Edge(i, self.matrix[v][i]))
        return res

# Could add some operation examples here
```

## Directed Unweighted Graph (Adjacency List/Matrix Implementation)
We could just reuse the WeightedDiagraph class above. Just set the weight parameter in the addEdge method to 1 by default. This is simple, so I will not write the code here.

## Undirected Weighted Graph (Adjacency List/Matrix Implementation)
An undirected weighted graph is just a bifirectional directed weighted graph. So you can also reuse the WeightedDigraph class above. When adding an edge, just add two edges at the same time:

```python
# General implementation of an undirected weighted graph
class WeightedUndigraph:
    def __init__(self, n):
        self.graph = WeightedDigraph(n)

    # Add, add an undirected edge with weight
    def addEdge(self, frm, to, weight):
        self.graph.addEdge(frm, to, weight)
        self.graph.addEdge(to, frm, weight)

    # Delete, remove an undirected edge
    def removeEdge(self, frm, to):
        self.graph.removeEdge(frm, to)
        self.graph.removeEdge(to, frm)

    # Check, determine if two nodes are adjacent
    def hasEdge(self, frm, to):
        return self.graph.hasEdge(frm, to)

    # Check, return the weight of an edge
    def weight(self, frm, to):
        return self.graph.weight(frm, to)

    # Check, return all neighboring nodes of a node
    def neighbors(self, v):
        return self.graph.neighbors(v)

if __name__ == "__main__":
    graph = WeightedUndigraph(3)
    graph.addEdge(0, 1, 1)
    graph.addEdge(2, 0, 3)
    graph.addEdge(2, 1, 4)

    print(graph.hasEdge(0, 1))  # true
    print(graph.hasEdge(1, 0))  # true

    for edge in graph.neighbors(2):
        print(f"{2} <-> {edge.to}, weight: {edge.weight}")
    # 2 <-> 0, weight: 3
    # 2 <-> 1, weight: 4

    graph.removeEdge(0, 1)
    print(graph.hasEdge(0, 1))  # false
    print(graph.hasEdge(1, 0))  # false
```

## Undirected Unweighted Graph (Adjacency List/Matrix Implementation)
You can reuse the WeightedUndigraph class above. Just set the weight parameter in the addEdge method to 1 by default. This is simple.

