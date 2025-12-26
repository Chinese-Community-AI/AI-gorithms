Summary
The "one-stroke" game is about finding eulerian paths or eulerian circuits. You can decided if such paths exist by looking at the degree of each node.

The Hierholzer algorithm is a classic way to find Eulerian paths or circuits. It is an extension of the DFS algorithm for graphs.

An Eulerian graph is a classic topic in graph theory, first found in the famous Königsberg Bridge Problem. This problem is important in math history and has many uses in computer science today, such as route planning and circuit design.

This article will focus on the definition of Eulerian graphs, the classic bridge problem, the concepts of Eulerian path and circuit, and tips for finding Eulerian paths. You can also try these ideas inthe related one-stoke puzzle game on this website.

## One-Storke Puzzle
I remember playing the "one-storek" puzzle as a kid. The rule is: draw a line through all points and edges in one stroke. You can visit a ndoe more than once, but each edge must be used exactly once and cannot reused.

This puzzle is an example of a classic graph theory algorithm, and there are clear methods to solve it.

Here are simple rules to solve this puzzle:
- If all nodes ahve even degrees, you must start from one of these nodes to finish the puzzle.
- If exactly two ndoes have odd degrees, you must start from one of these nodes to finish the puzzle.
- If neither of the above is true, you cannot finish the puzzle.

Now let's talk about the graph theory behind this puzzle Eulerian graphs.

## The Bridge Problem
Eulerian graphs come from the famous Königsberg Bridge Problem in the 18th century. At that time, the city of Königsberg (now Kaliningrad) had a river splitting it into north and south. There were also two small islands, with seven bridges connecting the north, south, east island, and west island.

The question was: can you design a path that starts anywhere, crosses every bridge exactly once, and returns to the starting point?

We can turn this into a graph probelm:
In this graph:
- Each region is a node
- Each bridge is an edge
- The probelm is: is there a path that goes through every edge exactly once and ends up at the starting point

Euler finally proved by math that the bridge problem cannot be solved. This was famous result. 

## Terminologies
Based on the beidge problem, let's introduce a few graph theory terms:

Eulerian Path: A path in a graph that passes through every edge exactly once.
Eulerian Circuit: A spacial Eulerian Path that starts and ends at the same node.
Based on these, we can classify graphs into three types:
- Eulerian Graph: A graph that has an Eulerian Circuit.
- Semi-Eulerian Graph: A graph that has an Eulerian Path but no Eulerian Circuit.
- Non-Eulerian Graph: A graph that has neither an Euleritan Path nor an Eulerian Circuit.

## How to Tell If a Graph is Eulerian
### Undreicted Graph
For an undirected connected graph:
A graph has an Eulerian Circuit if all of its nodes have even degree.
A graph has an Eulerian Path if exactly two nodes have odd degree.

Why is this? Node degree's evenness or oddness tell us if every "enter' has a matching "exit" at that node

In an Eulerian Path, except for the start end end nodes, each middle node must have even degree because for every time you enter, you must also exit.

The start and end nodes are special, they can have odd degree. The start can have one more "exit", and the end can have one more "entry"

If the start and end are the same node, then all nodes have even degree. This is just an Eulerian Circuit, which is a special Eulerian Path.

## Directed Graph
For directed graphs, you need to check indegree and outdegree:
A graph has an Eulerian Circuit if every node's indegree equals its ourderee.
A graph has an Eulerian Path if one node's outdegree is one more than its indegree, and one node's indegree is one more than its outdegree, and all other nodes have qual indegree and outdegree.

The reason is similar. The start can have one more "exit", and the end can have one more "entry". All other nodes must be balanced.

If the start and end are the same node, that means every node's indegree and out degree are equal. You then have an Eulerian Circuit.

## How to Find an EUlerian Path
The classic way to find an Eulerian Path is the Hierholzer algorithm. The code and example problems can be found in the graph section later.

But let's try another way, using the knowledge we already have. Can we use brute force to write an algorihtm to find an Eulerian Path?

Actually, we can reuse graph traversal algorithms (DFS/BFS). When we talked about DFS, we noted the difference between "traverse all nodes", "traverse all edges" and "traverse all paths"

Finding an Eulerian Path means finding a path that goes through every edge once. We can find the start and end by checking node degrees. So the simplest steps are:
1. Calculate the degree of every node. Find the start and end of the Eulerian Path.
2. Use the "traverse all paths" DFS algorithmto search from the start. When you reach the end, check the onPath array: if all edges are visited, you have found an Euleriean Path. 

This method will work. If we try every path, we will find an Eulerian Path if it exists. But the time complexity is high, because we may visit some edges many times. If there are E edges, the time will be more than O(E).

Hierholzer's algorithm is like a reverse postorder DFS and takes O(E) time.

Basically, you do a postorder DFS that covers every edge, then reverse the result to get the Eulerian Path.

