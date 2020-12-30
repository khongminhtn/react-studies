# Data Structure  
 
Differences between linksts and array is array have access to indices
**Brief differences between Arrays and Linked Lists:**
![nodes](https://raw.githubusercontent.com/khongminhtn/software-engineering-studies/main/codecamp/image/algorithm.png)

**Nodes**  
- A class object.
- Consist of 2 primary attributes and other optional attributes.
    - value
        - Holds data
    - pointers
        - Points to another node object
- Consist of methods that operates on either the data or the pointer
- Also known as helper
    - Helps carry the data and points to the next node
 
![nodes](https://raw.githubusercontent.com/khongminhtn/software-engineering-studies/main/codecamp/image/nodes.png)
 
**Linked Lists**
- Comprised of nodes
- Basic data structure and is the basis to many other structure
- Nodes that are linked together in a linear way
- Head node is the node at the beginning of list
- Tail node is the end with link to None
- Common operations:
    - Adding nodes
    - Removing nodes
    - Finding a node
    - Traversing a list
- Typically contain unidirectional link (next), occasionally bidirectional (next and previous)
- Nodes in between head and tail that does not have other node linked to it, will become orphaned and removed from list.
- Wrapper, wraps all the nodes together (container)
- Only keep tracks of the first node in the list
    - Traverse requires a method that loops through the nodes
- Possible to have 2+ pointers to traverse the unidirectional list

 
**Doubly Linked Lists**
- Singly linked list has nodes that points only to the next node.
- Doubly linked list has nodes that points in both direction. (two links)
- Common Operations:
    - Adding nodes to both ends
    - Removing nodes from both ends
    - Finding/removing a node anywhere in the list
    - Traverse the list
- All operations is based on finding the right node and updating that node.
- Bidirectional = Traverse in both direction
- If there is only 1 node in a doubly linked list then that node is both the tail and head

 
**Queues**  
-  Implemented with linked list, more efficient than arrays/list
-  Odered set of Data
-  The adding prodess is called Enqueues
-  The removing process is called Dequeues
-  Peed reveals the front of the queue without removing
-  If queue has a constraint of maximum length:
    - It is a bounded Queue
    - Enqueueing to a full queue is called overflow
    - Dequeueing to an empty queue is called underflow
-  Uses linked list as underlying data structure
    - Front is Head Node
    - Back is Tail Node
-  FIFO:
    - First in First out structure
 
**Stacks**  
- Implemented with linked list, more efficient than arrays/list
- Is a linear collection of nodes that add node to the top or remove node at the top.
- Adding process is called Push.
- Removing process is called Pop.
- Looking at the first element is called peek.
- Top stack is Head node and bottom stack is tail node.
- Size can be a constraint
    - Limit resources
    - Similar overflow and under flow concept
 
 
**Hash Maps**  
- Hash maps are keys to related values
    - *maps* a key to a value
- Built on top of an array using indexing system
- A table that represents a map from a set of keys to a set of values
- Most efficient and good for store and retreiving data
- Hashing function consume data of any types then return an index as output
- Compression uses modular arithmetic to calculate array index. Consumes Hash code
    - Irreversible process
    - Compress data to smaller range
        - Might produce same hash for 2 different keys
            - This is called Collisions
                - One of the solution is called Seperate Chaining
                - The other is open addressing
- Looking up value in linked list is inefficient, hash map is the solution
- Hash code is the result of hashing the key
- Steps Taken:
    1. hash() Signature: Key => Hash Code
    2. compressor() Signarture: Hash Code => Index
    3. assign() Signature: Key, Value => Value
        - Runs compressor(hash(key)) => Index
        - Sets ```array[Index] = value``` 
    4. Common hash methods:
        - retrieve() Signature: Key => Value

**Heaps**  
- Used to maintain maximum and minimum value in dataset
- Formula to get location of child
    - Left Child: (index * 2) + 1
    - Right Child: (index * 2) + 2
    - Parent: (index - 1) / 2 #not for root
- Min - Heap
    - binary tree with at most 2 children
- Heapify
    - when Heap's essential properties is violated (unordered data structure)
    - Heapify will restore this order.
        - Moving nodes by heapify up or heapify down