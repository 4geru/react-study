def select_string(str, odd_or_even='odd'):
    skip_index = (1 if odd_or_even == 'odd' else 0)
    return_str = ''
    for i in range(len(str)):
        if i % 2 == skip_index:
            continue

        return_str += str[i]

    return return_str    

str = 'パタトクカシーー'
print(select_string(str, 'odd'))