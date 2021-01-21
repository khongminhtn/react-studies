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


# Book solution
# First track duplicates
# Simple hash table will work
# Iterate through linked list and add to hash table
# When element is duplicated then remove from list
# If not buffer allowed then we use runner techniques with 2 pointers
# however this takes O(N*N) but O(1) space
