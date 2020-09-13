def cipher(str):
    return_str = ''
    for char in str:
        if 'a' <= char and char <= 'z':
            return_str += chr((219 - ord(char)))
        else:
            return_str += char

    return return_str

def decripter(str):
    return_str = ''
    for char in str:
        if 'a' <= char and char <= 'z':
            return_str += chr((219 - ord(char)))
        else:
            return_str += char

    return return_str

cipher_message = cipher('hello')
print(cipher_message)
print(decripter(cipher_message))