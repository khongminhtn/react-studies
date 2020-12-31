# Algorithm 
 
### Searching Arrays Algorithm:
**Linear Search**  
- Loops through a list, checking each value to match the search value
- Not the most efficient search algorithm
- Good for expected search value to be at the beginning of list
- Good for small list
- Good for unsorted list 
- Best Case:
    - First in List O(1)
- Worst Case: 
    - Last in list O(n)
    - Not in List

**Binary Search**  
- Specialised for sorted arrays
- Time Complexity is O(log N).
- Splitting list in half
    - Upon splitting, do not include the mid value
- Uses Recursive approach
    - Think of the problem in 2 ways:
        1. Base Case (has to be met, responsible for termination)
            - Found value and return index (First element of list)
            - We didntn find any value because list is empty (Empty List)
        2. Recursive steps (Rest of List)
    - Recursive function calls usually located in return "trust the recursive process that it will return the result"
![nodes](https://raw.githubusercontent.com/khongminhtn/software-engineering-studies/main/codecamp/image/binary-search-tree.png)

**Recursion**  
- Elegance of code with the price of stack overflow if input is large
- Function call itself within itself
- Used in problems that are iterative and sort algos
- Binary Search Tree is a recursive data structure
    - Makes sorted list easier to search
- Base Cases:
    - Has to be met at some point
    - Terminates recursion
    - Operates on first element of input
- Recursive steps:
    - Takes in the rest of the list
    - Exclude the first element in the list 
        - Base case was already performed on the first element.
- Call Stack:
    - A data structure typically abstracted away from us which stores function calls in programs.
    - A recursive function that does not have base case will cause stack overflow
- Execution context:
    - Contains variable within each recursive call

### Sorting Algorithm  
- 4 most common sort algorithms
    1. Bubble Sort
    2. Merge Sort
    3. Quick Sort
    4. Radix Sort
![nodes](https://raw.githubusercontent.com/khongminhtn/software-engineering-studies/main/codecamp/image/sorting-algo.png)  
 
**Bubble Sort**  
- 2 Pointers
- Swaps elements if element on left is larger than on right
- Uses temp variable to store swap data
- Algo Analysis:
    - O(N^2)


**Merge Sort**  
- O(N*log(N))
- Sometimes called divide and conquer algo
- Splitting data into runs
    - Divide the input in half
    - Recursively call the sort on each of those half
    - Continues until list contain only single element
    - Then merging begins

**Quick Sort**  
- Worst case is O(N^2)
- Average case is O(N*log(N))
- Efficient Recursive algo for sorting lists/arrays
    - Comparison sorts
    - Ordered using > or <
    - Uses divide and conquer strategy
- Partition process:
    1. Select first element as pivot
    2. iterate through the rest of the list and place it in Lesser than or Greater than sub arrays in comparison to the pivot
    3. This process repeats with the rest of the list until the sub arrays are 1 or 0
 
**Radix Sort**
- Sorted number with its radix position
- O(N)
- 2832 where 8 = 800
- Non comparison sort
- Has 2 variants: MSD and LSD
 
 
### CORE ALGOS FOR: Graphs and Graph Traversals  
1. Important to add vertices to a list "visited" to avoid an infinite loop
**Depth-First Search**
- Continues down the path until it reaches the end
- Determines if a path exists between two vertices
 
**Breadth-First Search**
- Checks all values of all neighbouring value before moving into another level of depth
- Incredible inefficient to find any path between 2 vertices
- Execellent for finding shortest path between 2 vertices
 
**Dijkstra's Algorithm**  
- Find the shortest path from any given point to any other point in a weighted graph
- Common application is to find the quickest route from one destination to another
 
**A* Algorithm**
- Find the shortest path from a specific given point to another specific point
- Saving time on looking for other irrelevant paths