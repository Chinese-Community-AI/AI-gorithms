A graph is made up of several nodes (Vertex) and edges (Edge):
- Each node has a unique ID.
- Edges can be directed (Directed Graph) or undirected (Undirected Graph).
- Edges can have weights (Weighted Graph) or no weights (Unweighted Graph).

## Edge Weight and Direction
If there is a directed edge from node 1 to node 3, so you can go directly from node 1 to node 3. But since there is no edge from node 3 to node 1, you cannot go from 3 to 1 directly. 

If there is an undrected edge between node 1 and node 3, you can go from 1 to 3 and also from 3 to 1.

You can think of an undrected graph as a "two-way graph". In code, we often use two directred edges to simulate an undirected edge.

Weighted graphs are very common. For example, in map apps, the edge weight can be the distance between two locations. In a logistics network, the edge weight can be the shipping cost.

There are many important algorithms based on weighted graphs, like finding the shortest path, minimum spanning tree and so on. 


## Degree
Each node in a graph has a degree.

In undirected graphs, the degree is the number of edges connected to a node.

In drected graphs, because edges have directions, each node has indegree and outdegree.

## Number of Edges and Nodes
Usually, we talk about simple graphs: graphs without self-loops and without multiple edges.

In a simple graph with V nodes and E edges, what is the possible range of E?

The minimum E is 0. That means there are just isolated nodes, no edges.

For the maximum E, every node can connect to V - 1 other nodes, so the maximum number of edges is E = V (V - 1) / 2 ~= V^2

If almost every pair of nodes has an edge (so E is close to V^2), this is called a dense graph. If there are few edges (E much less than V^2),this is a sparse graph. 

## Subgraphs
In graph theory, the subgraph is an important concept.

Subgraph: If all nodes and edges of graph G' are in graph G, then G' is a subgraph of G. In short, a subgraph is made by removing some nodes or edges from the original grpah. 

Spanning Subgraph: This subgraph keeps all the nodes of the original graph, but includes only some edges.

Induced Subgraph: Select some nodes from the original graph, and include all edges between those ndoes as in the original graph.

The idea of subgraph is often used in graph problenms. For example, when we try to find a minimum spanning tree, we are looing for a spanning subgraph with all nodes and smallest total weight.

## Connectivity
Connextivity is a key concept in graph theory. It means whether there is a path between nodes.

## Connectivity in Undirected Graphs
Conneted Graph: If there is a path between any two nodes in the undirected graph, the graph is connected.

Connected Components: For an undirected grpah that is not fully connected, its conencted parts are called connectded components. A graph can have more than one connected component.

## Connectivity in Drected Graphs
The idea of connectivity in directed graphs is a bit more complex. Because of edge directions, there are two types: strong and weak connectivity.

Strongly Connected Graph: If there is a directed path between every pair of nodes, the directed graph is strongly conencted.

Weakly Connected Graph: If you ignore edge directions, and the graph becomes connected, then the directed graph is wekaly connected.

Strongly Connected Components(SCC): In a directed graph, the biggest strongly connected subgraphs are called strongly connected components.

Weakly Connected Component (WCC): If you turn all directed edges in a directed graph to undirected edges, the connected components you get are called weakly connected components.

There are many other complex terms in graph theory, but the concepts above are enough for learnign data structures and algorithms. 