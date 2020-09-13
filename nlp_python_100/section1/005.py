def filted_sentence(str):
    return ''.join(filter(lambda x: x != ',' and x != '.', str)).split()

def create_original_map(sentence, indexs):
    filted_words = filted_sentence(sentence)

    return_hash = {}
    for i in range(len(filted_words)):
        if i + 1 in indexs:
            return_hash[i + 1] = filted_words[i][0]
        else:
            return_hash[i + 1] = filted_words[i][1]

    return return_hash

sentence = 'Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.'
indexs = [1, 5, 6, 7, 8, 9, 15, 16, 19]
print(create_original_map(sentence, indexs))