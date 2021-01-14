# remove duplicates from unsorted linked list
# Book solution
# Track duplicates first
# Hash table will work here.

def deleteDups(n):
    htable = set()
    previous = None
    while n != None:
        if n.data in set:
            previous.next = n.next
        else:
            htable.add(n.data)
            previous = n
        n = n.next
        