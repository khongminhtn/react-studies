# Data Structure  
### Nodes  
- A class object.
- Consist of 2 primary attributes and other optional attributes.
    - value
        - Holds data
    - pointers
        - Points to another node object
- Consist of methods that operates on either the data or the pointer
- Also known as helper
 
![nodes](https://raw.githubusercontent.com/khongminhtn/software-engineering-studies/main/codecamp/image/nodes.png)
 
**Linked Lists**
- Comprised of nodes
- Basic data structure and is the basis to many other structure
- Nodes that are linked together in a linear way
- Head node is the node at the beginning of list
- Tail node is the end with link to None
- Common operations
    - Adding nodes
    - Removing nodes
    - Finding a node
    - Traversing a list
- Typically contain unidirectional link (next), occasionally bidirectional (next and previous)
- Nodes in between head and tail that does not have other node linked to it, will become orphaned and removed from list.

 
**Doubly Linked Lists**
- Singly linked list has nodes that points only to the next node.
- Doubly linked list has nodes that points in both direction.
 
**Queues**
-  Is a Linear collection of nodes that can add node to the tail and remove node from the head
-  The adding process is called Enqueues
-  The removing process is called Dequeues
 
**Stacks**
- Is a linear collection of nodes that add node to the top or remove node at the top.
- Adding process is called Push.
- Removing process is called Pop.
 
