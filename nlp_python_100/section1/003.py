def join_two_strings(str1, str2):
    return_str = ''
    for i in range(max(len(str1), len(str2))):
        if (i < len(str1)):
            return_str += str1[i]
        if (i < len(str2)):
            return_str += str2[i]

    return return_str

print(join_two_strings('パトカー', 'タクシー'))