# def compression(string):
#     count = 1
#     compressed = string[0]
#     i = 0
#     while i < len(string):
#         if i + 1 == len(string) - 1:
#             if string[i] == string[i + i]:
#                 compressed += f"{i}{count}"
#                 return compressed
#             else:
#                 compressed += f"{i}1"
#         elif string[i] == string[i + 1]:
#             count += 1
#         else:
#             compressed += f"{i}{count}"
#             count = 1
#         i += 1
#
#
# compression("aabcccccaaa")


# book solution
def compress_string(string):
    compressed = []
    counter = 0

    for i in range(len(string)):
        if i != 0 and string[i] != string[i - 1]:
            compressed.append(string[i-1] + str(counter))
            counter = 0
        counter += 1

    if counter:
        compressed.append(string[-1] + str(counter))

    return min(string, "".join(compressed), key=len)


print(compress_string("aabcccccaaa"))