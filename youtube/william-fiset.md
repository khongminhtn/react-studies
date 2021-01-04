# Data Structure and Introduction  
 
### Data Structure  
- Organizing data so that it can be used efficiently
- Essential ingredients to create fast and powerful algorithm
- Make code cleaner and easier to understand

**Abstract Data Types**
- List
    - Linked List
    - Dynamic Array
- Queue
    - Linked List based queue
    - Array Based...
    - Stack based...

**Big O Notation**
- Deals with worst case scenario
![nodes](https://raw.githubusercontent.com/khongminhtn/software-engineering-studies/main/youtube/image/big-o-notation.png)  
- Binary Search Tree
    - Splits the list in half each time
    - this becomes O(log2(N)) => o(log(n))
 
**Dynamic and Static Arrays**
- Static Array
    - Indenxible fixed size array
    - Used everywhere
        - Temporarily store objects
        - Storing and accessing sequential data
        - Look up tables (because of index)
        - Used in dynamic programming
- Dynamic Array
    - Grows and shrink in size
![nodes](https://raw.githubusercontent.com/khongminhtn/software-engineering-studies/main/youtube/image/dynamic-static-array.png)  
 
**Singly Linked List and Doubly List**
- Sequential of nodes connected to eachother
- Implementation
    - Queue and Stack
    - Creating Circular List
    - Easily model real world objects
    - Hash Table
        - Used in Seperate chaining to deal with hash collision
- Contains
    - Head
    - Tail
    - Node
    - Pointers
    - Size
- Pros and Cons
- Singly
    - Less Memory
    - Cannot access previous elements
- Doubly
    - Can traverse backwards
    - Take 2x memory
 
**Stack**
- Last in First Out
- Imitate stack concept
- Linked list general starts with head -> null
    - Then we push or pop data and set it as a new head

**Queues**
- First in First Out
- Enqueue and Dequeue.
- Methods:
    - size
    - isEmpty
    - Peek
    - Enqueue
    - Dequeue
- PQ (Priority Queues)
    - Abstract data structure
    - Uses heap to implement
    - A queue that prioritise larger numbers first or smaller numbers first (ordered/sorted)

**Heap**

- Heap is an ordered tree either low to high or high to low
- Methods
    - binary heap construction
    - polling
    - peeking
    - adding
    - removing  
    - bubble up
    - bubble down
- Types
    - Binary Heap
        - essentially a binary tree with heap invariant
        - Binary tree every node has exactly 2 children
    - Fibonacci Heap
    - Binoial Heap
    - Pairing Heap
    - Many more

**Union Find (Disjoint Set)**
- Find which node is belong to eachother to prevent a cycle in the structure
- Data structure that keeps track of elements which are split into one or more disjoint sets
- it has 2 primary operations
    - find
        - find the groups
    - union
        - merge the the groups
- Kruskal's algorithm uses the Union Find
- Uses:
    - Kruskal's minimum spanning tree algorithm
    - Grid Percolation
    - Network connectivity
    - Least common ancestors in trees
    - Images processing
- Methods:
    - Construction O(n)
    - find O(n)
        - finds the root of the node
    - Union O(n)
        - unify 2 root nodes together
    - Get component size O(n)
    - Check if connected O(n)
    - Count component O(n)
- 3 Steps process:
    1. Sort edges by ascending edge weight
    2. Compare 2 nodes that the edge belongs, if nodes are of same group, ignore. Else include it and unify the nodes
    3. Algorithm terminates when all edges are processed and vertices are unified
- Path Compression:
    - find the root node
    - all child nodes points to the node highest in the tree.
 
**Binary Trees and Binary Search Trees**  
- Outcomes:
    - How to insert/remove nodes into a BST
    - Binary tree traversals
        - Preorder (print statements)
            - prints before recursive calls
        - Inorder (print statements)
            - prints between recursive calls
        - Post order (print statements)
            - prints after recursive calls
        - Level order
            - prints 1 level at a time
            - Uses BFS (breadth first search)
            - Queue of nodes
            - Iteratively not recursively because of queue not stack.
        - traversals
- Trees:
    - Undirected graphs
    - Acyclic (no cycles)
    - A connected graph with N nodes and N-1 edges.
    - A graph in which any two vertices are connected by exactly 1 path
    - Tree Nodes definitions:
        - root node's parent is root node
        - typically a node has a parent node and a child node
        - childless node are the leaf node
- Binary Trees:
    - A tree in which every node has maximum 2 child nodes
    - must be Acyclic, no cycles

- Binary Search Tree:
    - A Binary tree that satifies the BST invariant
    - Invariant:
        - Left subtree has smaller elements than right
        - Right subtree has larger elements than left
    - Typically Only unique data
    - Not only numbers, can be alphabetical
    - Usage:
        - Implementation of some map and set ADTs
        - Red Black Trees
        - AVL Trees
        - Splay trees
        - Implementation of binary heaps
        - Syntax trees (used by complier and calculators)
        - Treap - Probabilistic DS
    - Methods:
        - Insert
        - Delete
        - Remove
        - Search
    - Complexity
        - Typically or mostly has the complexity of O(log(n))
        - Rare case worst scenario O(n)
            - due to Linear behaviour