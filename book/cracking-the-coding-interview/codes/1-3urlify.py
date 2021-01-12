# URLify
# Hint 53: Easiest to modify string from end to beginning

# Replace all string with %20
# String has sufficient space at the end
# Given True length

# Input = "Mr John Smith   "
#          <----------->
#           True length
# 2 scan approach, calculate the space in a string and
# then create a new string with a new set of chars


def urlify(string, true_length):
    # First Scan (Prep Work)
    space_count = 0
    for char in range(true_length):
        if string[char] == " ":
            space_count += 1

    # Second Scan
    new_string = ""
    for char in range(true_length):
        if string[char] == " " and space_count != 0:
            new_string += "%20"
            space_count -= 1
        else:
            new_string += string[char]
    return

print(urlify("Mr John Smith    ", 13))