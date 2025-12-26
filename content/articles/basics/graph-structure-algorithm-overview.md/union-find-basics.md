## Summary
The union find (Disjoint Set) data structure comes from the Binary Tree Structure. It is used to quickly solve connectivity problems in undirected graphs.
- You can merge two connected components in O(1) time
- You can check if two nodes are connected in O(1) time
- You can find the number of connected components in O(1) time.

There are several ways to optimize the Union Find algorithm. 
This article will introduce the concept of the dynamic connectivity problem in graphs and explains why the Union Find algorithm is an efficient solution for this problem.

## Dynamic Connectivity and Terminology
Graph theory algorithms involve many technical terms. 

Consider the following example with 10 nodes labeled from 0 to 9. Although there are no edges, it still constitutes a graph structure:

In this graph structure, we can say there are 10 "connected components", with each node being its own connected component, as the yare isolated without connections to other nodes.

Now let's perform some "union operations" on some nodes, such as connecting nodes 0, 1 and 1, 2:
At this point, nodes 0, 1, 2 in the graph are connected, forming a single connected component. We can say these three nodes are "connected."

Additionally, the number of connected components in this graph structure has decreased from 10 to 8, as the union operation merged three connected components (0,1, 2) into one.

### Peroperties of Connectivity
1. Reflexivity: Node p is connected to itself.
2. Symmetry: If node p is connected to q, then q is connected to p. 
3. Transitivity: If node p is connected to q, and q is connect to r, then p is connected ro r.
Juding this "equivalence relation" is very practical, such as in compilers determining different variable refrences to the same memory object, or calculating friend circles in social networks.

The dynamic connectivity problem asks you to input a graph structure, perform several "union operations,", and possibly query whether any two nodes are "connected," or how many "connected components" are currently in the graph.

Our goal is to design a data structure that completes union and query operations with the smallest possible time complexity. 

### Why We Need the Union-Find Algorithm
The Union-Find structure provides the following API:

This is in Java:

```java
class UF {
    // Initialize Union Find with n nodes, time complexity O(n)
    public UF(int n);

    // Connect node p and node q, time complexity O(1)
    public void union(int p, int q);

    // Check if node p and node q are connected (in the
    // same connected component), time complexity O(1)
    public boolean connected(int p, int q);

    // Get the total number of connected components, time complexity O(1)
    public int count();
}
```

The union method is used to connect two nodes, the connected method is for checking if two nodes are connected, and the count method is for querying the number of connected components in the current graph. All these operations can be completed in O(1) time.

The time complexity of O(1) is the most efficient. If you havn't learned the union-find algorithm, how woud you implement these methods?

There are some ways, for instance, the Graph Structure Basics and General Code Implementation section introduces the adjacency list/matrix implementation of graph structures. The union method is essentially adding an undirected edge to the graph, which can also be achieved in O(1) time complexity. 

How to implement the connected method? Are you thinking of checking the adjacency list/matrix to see if these two nodes are connected?

That's incorrect. Do not forget the "transitive" property mentioned above: if node p is connected to q, and q is connected to r, then p is also connected to r.

Simply checking the adjacency list/matrix only determines if two nodes are directly conneted, and cannot handle this transitive connection.

Therefore, to implement connected (a, b), we must use the DFS/BFS Traveral Algorithm for graph structures. Start from node a and traverse all reachable nodes to see if node b is among them, therevby determining whether ndoes a and b are connected.

In this case, the worst time complexity for the connected method is the complexity of graph traversal, which is O(V + E), where V is the number of nodes and E is the number of edges.

Next, how to implement the count method?

Again, it relies on the DFS/BFS Traversal Algorithm for graph structures, but it's more complicated. 

You need to use BFS/DFS to traverse the entire grpah, classify all nodes into different connected components, and finally count the number of connected components. This process has a time compoleity of O(V + E).

Therefore, the union-find algoritm is very ingenious. It not only completes the above operations in O(1) time but also does not need to construct a graph structure using an adjacency list/matrix, only an array is needed. 

## Core Principles of Union-Find
The essence of a union-find is an extension of tree structues.

Think about it, for a tree, do all the nodes share the same root node?

If we find a way to place all nodes of the same connected component into a single tree, using the root node ofthis tree as the representative of the connected component, we can efficiently perform the operations above.

The underlying structure of a union-find is essentially a forest (several multi-way trees), with each tree representing a connected component:
- connected(p, q): Simply check the root nodes of the multi-way trees contianing p and q. If they are the same, the p and q are in the same tree, meaning they are connected; otheriwse, they are not connected.
- count(): Just count the total number of trees, which gives the number of connected components.
- union(p, q): Connect the root node of the tree contianing p to the root node of the tree. Note that this is not merging the nodes p and q, but merging the root nodes of the two trees. Once p and q are connected, their respective connected components merge into a larger one.

In summary, each node in a union-find doese not care about its child nodes but only about its root node, so a union-find node is similar to the following:

```java
class UFNode {
    // Node id
    int id;

    // Pointer to parent node
    // The parent pointer of the root node is null
    UFNode parent;
}
```

In this way, for any given node, we can follow the parent pointer all the way to find its root node. The implementation ideas for the union, connected, and count methods are as follows:

```java
// Connect node p and node q
void union(UFNode p, UFNode q) {
    // Find the root node of node p and node q
    // Connect the tree where node p is located to the tree where node q is located
    find(p).parent = find(q);
}

// Check if node p and node q are connected (in the same connected component)
boolean connected(UFNode p, UFNode q) {
    return find(p).id == find(q).id;
}

// Find the root node of node node, time complexity depends on the height of the tree
UFNode find(UFNode node) {
    while (node.parent != null) {
        node = node.parent;
    }
    return node;
}
```

The time complexity of both the union and connected methods depends on the find method, and the time complexity of the find method is determined by the height of the tree.

Therefore, the ultimate goal of the union-find algorithm is to minimize the height of three as much as possible. If the tree height can be maintianed at a constant, then the complexity of the above methods would be O(1).
