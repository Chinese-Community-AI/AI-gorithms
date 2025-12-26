### Summary
Dijkstra and A* algorithms are extensions of BFS Traversal in Graphs. They can solve single source shortest path problems without negative weights.

The SPFA algorithm (queue-based Bellman-Ford algorithm) is also an extension of BFS Traversal in Graphs. It can handle single-source shortest path problems with negative weights.

The FLoyd algorithm is an application of Dynamic Programming. It can solve all-pairs (multi-source) shortest path probelms.

Beginners do not need to think graph algorithms are hard. They are just extensions of simple algorithm ideas. Once you understand basic tree leve-order traversal, you can come up with these algorithms. 

Since this is a basic knowledge chapter, no code for each algorithm is needed yet. The details will be shown in later chapters.

This article focuses on the main idea, usage scenarios, and how these advanced algorithms connect with basic knowledge. It will help you get a complete understanding od shortest path algorithms on graphs.

## Overview of Shortest Path Problems
Shortest path problems are used a lot in real life, for example, to find the minimum cost, shortest distance, or least time.

In algorithms, we usually model these probelms as finding the smallest path weight in a weighted graph. In this article, "shortest path" and "minimum path weight sum" mean the same thing.

## Single-source Shortest Path
Single-source shortest path means finding the shortest path from one starting point to all other nodes.

For example, if a graph has n ndoes labeled 0, 1, 2, ..., n - 1 and you are asked to find the shortest path from node 2 to every other node, this is a single source shortest path probelm.

The output of a single source shortest path algorithm is usually a one-dimentional array distTo, where distTo[i] means the shortest path length from the start node to node i. 

Common single-source shortest path algorithms are:
1. Dijkstra algorithm. It is basically BFS plus a greedy idea. It is efficient, but cannto handle grpahs with negative weights.
2. Queue-based Bellman-Ford algorithm. This is also based on BFS. It can handle negative weights, but is slower than Dijkstra.

## Point-to-Point Shortest Path
In many algorithm probelms, we don't need to find the shortest paths from a start node to all other nodes. We only need to find the shortest path from a start node src to a target node dst. This kind of probelm is called a point to point shortest path problem.

Usually, the point to point shortest path problem can be seen as a special case of the single source shortest path problem. You can run a single source shortest path algorithm from src, and stop early when you reach dst.

But there is an algorithm designed just for point to point problems: the A* Algorithm (A start Algorithm).

I often say that the core of algorithms is brute-force search. If you want to make brute-force more efficient, you should use as much information as possible. In point to point shortest path probelms (where both the start and end are known), you have more information than in single source shortest path probelms (where only the start is known). So, you can use this extra information to make the algorithm faster.

For example, if you know the target is to the lower right of the start, you can guess that searching towards the lower right may reach the target faster.

This is the key idea of the A* algorithm: it makes full use of the known information and searches in a certain direction to find the target faster. This kind of algorithm is called a heruistic search algorithm.

But remember, this guess is only a rule of thumb and is not always correct. For example, the lower right may be a dead end, and you might need to go around to the upper left to reach the target.

So, heuristic algorithms need to set a reasonable heuristic function. You need to balance betwwen the rule of thumb and the real situation to make sure the algorithm is still efficient even if the guess if wrong.

## All-Pairs Shortest Path
The all-pairs shortest path probelm asks you to find the shortest paths between any two nodes in a graph.

For example, if a graph has n nodes numbered from 0, 1, 2, ..., n - 1, you need to find the shortest path between every pair of nodes. This is called the all-paris shortest path probelm.

The final output of an all-pairs shortest path algorithm is a 2D array dist, wehre dist[i][j] means the shortes path length from node i to node j.

The most famous algorithm for this is the Floyd algorithm, which is actually a dynamic programming algorithm.

In theory, you can run a single-source shortest path algorithm for every ndoe to solve this probelm.

But in practice, you should choose the algorithm based on the graph's structure. Sometimes, using Floyd is more efficient. Other times, running Dijkstra multiple times is better. You will understand this when we talk about the complexity of these algorithms later.

## The Effect of Negative Weight Edges
When finding the shortest path, you must pay attention to whether the graph has negative weight edges. If it does, you must check for negative weight cycles.

Why do negative weight edges matter? Because they make the problem more complicated. Here's a simple example to help you understand:
Suppose you are at the starting node s. There are two neighbors: a nd b. The edge s -> a has weight 3, and s->b has weight 4.

If there are no negative weight edges, then it's clear that the shortest path from s to a is just s-> a with a total weight of 3. If you go from s to b first, then to a, the total weight will be at least 4 or more, neve less than 3.

But if there is a negative weight edge, thigns change. For example, if the edge b->a has weight -10, then the paht s->b->a has a total weight of -6, which is much less than 3.

For algorithms like Dijkstra that use a greedy stratedy, there is an important assumption: the total path weight always increases as you use more edges. Negatie weight edges break this assumption, and the algorithm fails.

If the graph has a negative weight cycle, the shortest path probelm has no meaning. For example, if there is a negative weight cycle on the path from s to a, you could keep goign around the cycle forever, making the total path weight smaller and smaller.

Among common shortest path algorithms, Dijkstra and A* cannot handle negative weight edges. Floyd and Bellman-Ford can handle negative weights, and Bellamn-FOrd is often used to detect negative weight cycles.

Next, let's look at the core ideas of these algorithms.

## Introduction to Dijkastra's Algorithm
The essence of Dijkstra's algorithm is the combination ofthe BFS algoirthm and a greedy approach. It is used to solve the single-source shortest path problem in graphs without negative edge weights.

You can easily derive the code for Dijkstra's algortihm by starting fro mthe standard BFS traversal. Think about standard binary tree BFS (level order) traversal and graph BFS traversal. Why can they find the shortest path?

Because in those scenarios, all the edges are unweighted, which means each edge has a weight of 1. So, the numebr of edges is euqal to the total path weight. Thanks to the layer-by-layer expansion of BFS, the path that first reaches the target will have the fewest edges, i.e., the smallest sum of edge weights.

Now, consider a weighted graph where each edge can have a different weight. The path with the fewest edge may not have the smallest weight sum, so the number of edges in the path is no longer meaningful.

First, we need to use the third implementation of graph BFS traversal, so that the BFs algorithm considers the sum of path weights rather than just the number of edges.

In addition, we need to prioritize expanding the path with the smalest weight sum. The first path to reach the traget will then have the smallest total weight. This is the greedy idea. We will provide a mathematical proof when explaining the core implementation. 

How do we prioritize expanding paths with the smallest weight sum? By using a priority queue to push paths with smaller weights at the front. The priority queue lawyas dequeus the node with the smallest weight, so the first path to reach the target will also have the smallest toatal weight.

Compared to the standard BFS algorithm, only two changes are needed to obtain Dijkstra's algorithm:
1. The standard BFS algorithm uses a regular queue, while Dijkstra's algorithm uses a priority queue.
2. The standard BFS algorithm uses a visited array to record visited ndoes and prevent infinite loops. Dijkstra's algorithm uses a distTo array to both avoid infinite loops and record the shortes paths from the start node to all other ndoes.

If those are too abstract for now, Just to know that Dijkstra's algorithm is a variation of the BFS algorithm. Detailed code implementation will be in the later chapter.


