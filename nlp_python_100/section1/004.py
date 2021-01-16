def filted_words(str):
    return ''.join(filter(lambda x: x != ',' and x != '.', str))

def count_same_words(sentence):
    filted_sentence = filted_words(sentence)
    words = filted_sentence.split()

    return words

sentence = 'Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.'
print(count_same_words(sentence))