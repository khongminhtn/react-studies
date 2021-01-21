# delete middle node
# not exactly middle but nodes in between head and tail
# singly linked list

# Issue:
# no access to previous node of the input node

# Book solution:
# copy data from next node to current node.
def deleteNode(n):
    if n == None or n.next == None:
        return False
    next = n.next
    n.data = next.data
    n.next = next.next
    return True
