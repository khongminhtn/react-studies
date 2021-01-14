# Working with palindrome, if you put a line in the middle of a word
# does both sides mirror each other ?
# if so then it is a palindrome
# if word is even, then abstract mirror is applied
# if work is odd, the middle character will be the mirror

# examples
# even = toot    to | ot
# odd  = toaot   to a ot
# "taco cat" "tacocat" "tac o cat"

# 1) scan to create new string without spaces and check odd or even
# 2) remove odd char
# 3) compare both halves

# O(N)
# Prep work were done.

def palindrome(input): #=> boolean
    # Create new string without spaces and check odd or even
    new_string = ""
    for char in input.lower():
        if char != " ":
            new_string += char

    # Check if string is odd or even
    even = False
    if len(new_string) % 2 == 0:
        even = True

    # If even then reverse first half of string
    first_half = ""
    half_length = len(new_string) // 2
    if even:
        while half_length:
            first_half += new_string[half_length - 1]
            half_length -= 1
        if first_half == new_string[len(new_string)//2:]:
            return True
        else:
            return False
    else:
        while half_length:
            first_half += new_string[half_length - 1]
            half_length -= 1
        if first_half == new_string[(len(new_string) + 1) // 2:]:
            return True
        else:
            return False


print(palindrome("Never Odd Or even"))

# ==== BOOK SOLUTION ======


print(is_palindrome_permutation("Never Odd Or Even"))