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