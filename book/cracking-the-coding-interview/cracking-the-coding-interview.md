# Introduction  
**Interview Process**  
Interview Performance Based:  
1. Analystical Skills:
    - Required lots of assistance ?
    - Solutions Optimised ? 
    - Time took for solution
    - Architect/design solution well structured ? 
2. Coding Skills:
    - Translate algorithm to code efficiently
    - Clean Code ? 
    - Potential Errors ?
    - Used good styles ?
3. Technical Knowledge / CS Fundamentals:
    - Strong knowledge in CS Fundamentals ?
4. Experience:
    - Shown determination ?
    - Built challenging projects ?
5. Culture Fit/ Communication Skills:
    - Personality fit for company and team ? 
    - Communicate well with interviewer ?

**Preparation**  
- "Why do you want work for us"
- "Scalability and System Designs"
- "Know the products that youre working on"
 
**Big O**
Understanding the efficiency of an algorithm
- O(1) Performs 1 operation
- O(N) Perform N operation where N is length of input
- O(2N) When input is multiplied
- O(log(N)) When input is divided
- O(N^2) when input is exponential (nested arrays)
Recursion that makes multiple call has complexity of O(branches^depth)  
 
**Technical Questions**
- Though intimidating, there are logical ways to approach technical questions.  
- How To prepare (for all problems):
    1. Solve problem on your own. Think about Time & Space complexity when solving
    2. Code on Paper to slow down the process of coding
    3. Test code on paper with all possible cases
    4. Type code into IDE the same as on paper and keep track of all errors made.
- Baseline Knowledge (Data Structure, Algorithm and Concepts):
    - Data Structure:
        - Linked Lists
        - Trees, Tries & Graphs
        - Stacks & Queues
        - Heaps
        - Vectors/ArrayLists
        - Hash tables
    - Algorithms:
        - Breadth-First Search
        - Depth-First Search
        - Binary Search
        - Merge Sort
        - Quick Sort
    - Concepts
        - Bit Manipulation
        - Memory (Stack Vs Heaps)
        - Recursion
        - Dynamic Programming
        - Big O Time & Space
- Baseline Knowledge (Powers of 2 Table)
    - 2^7,8,10,16,20,30,32,40 = Bytes

- Walking Through a Problem:
    1. Listen
        - Pay close attention to ALL information
        - BUD Optimization
            - Bottlenecks
            - Unnecessary Wrok
            - Duplicated Work
    2. Example
        - Debug examples, look for special cases
    3. Brute Force
        - Get a brute force solution as soon as possible then optimize from there
    4. Optimize
        1. Look for unused info
        2. Solve it manually on an example, then reverse engineer your thought process. How did u solve it ?
        3. Solve it "incorrectly" and the nthink about why the alogrithm fails
        4. Make time vs space tradeoff. Hash tables are useful.
    5. Walk through
        - Walk through the approach in detail. Understand each detail before you start coding
    6. Implement
        - Write beautiful code
        - Modularize the code
        - refractor to clean up
 
**Optimize & Solve Technique #1: Look for BUD**
- BUD
- DIY (DO IT YOURSELF)
- Simplify and Generalize
- Base case and build
- Data structure Brainstorm
- Best Conceivable runtime

**Hash Tables**  
- Procedure
    1. First compute the key's hash code, which will usually be an int or long. 2 difference keys could have same hash codes
    2. Then, map the hash code to an index in the array. Two different hash codes could map to same index
    3. At this index, there is a linked list of keys and values, store the key and value in this index.
        - Must use linked list because of collisions
        - 2 Different keys to same hash code 
        - 2 Different hash code to same index
    
**Arrays Tables**  
- Resizable
- Grow as you append items
- Double size when it is full
- When an array is full a new array with double size to its previous array is created and all the elements in the old array is copied over.