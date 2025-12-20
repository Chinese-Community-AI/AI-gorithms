## Summary in One Sentence
A Tries tree (prefix tree) is an extension of a multi-way tree structure an is a specially optimized data structure for handling strings.

Trie trees offer many advantages in string operations, such as saving memory space for common string prefixes, facilitating prefix operations, and supporting wildcard matching.

## Main Use Cases of Tries Trees
Trie is a data structure specially optimized for strings. This is why it is also called a "dictionary tree". Trie has several advantages when dealing with strings, which we will list below.

## Saving Storage Space
Remember how a hash table works: the key-value pairs are stored in a table array. So, it really creates the three strings "apple", "app", and "appl", which takes up 12 characters of memory.

Notice that these three strings have a common prefix. The prefix "app" is stored three times, and "l" is stored twice.

If you use a TrieMap instead:
The Trie does not store the common prefixes multiple tims, So it only needs 5 characters of memory to store these keys.

## Easy to Handle Prefix Operations
Except for the keysWithPrefix method, whose complexity depends on the number of returned results, other prefix operations have a time complexity of O(L), where L is the length of the prefix string.

Think about is, can you do these operations easily with HashMap or TreeMap? Usually, you would have to check every key and compare prefixes one by one, which is very slow.

## WildCard Support
With wildcard matching, you can do keyword matching like a search engine. This is something HashMap or TreeMap can't do.

## Kye Traversal in Order
TreeMap can also do this, so its a tie between TreeMap and Trie. But HashMap can't do it. We've seen some special features of Trie. Now let's see how it works.

## Basic Structure of Trie
A Trie is actually a kind of multi-way tree, simialr to a binary tree but with more branches.

A binary tree node looks like this:

```python
# basic binary tree node
class TreeNode:
    def __init__(self):
        self.val = None
        self.left = None
        self.right = None
```

Here, left and right are pointers to the two child nodes. 

A multi-way tree ndoe looks like this:

```python
# basic multi-way tree node
class TreeNode:
    def __init__(self, val: int):
        self.val = val
        self.children = []
```

Here, the children array stores poitners to child nodes. 

In TrieMap, the tree node TrieNode is implemented like this:

```python
# Implementatin of Trie tree node
class TrieNode():
    def __init__(self):
        self.val = None
        self.children = [None] * 256

```

The val field stores the value for a key. The children array stores pointers to child nodes.

But unlike a normal multi-way tree, the children array index in TrieNode has special meaning - it represents a character in the key.

For example, if children[97] is not null, it means there is a child for the character 'a', because the ASCII code of 'a' is 97.

We only consider ASCII characters, so the children array size is set to 256. You can adjst this for other problems.

