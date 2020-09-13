def filted_sentence(str):
    return ''.join(filter(lambda x: x != ',' and x != '.', str)).split()

def to_bi_gram(list):
    bi_gram = []
    for index in range(len(list) - 1):
        bi_gram += [list[index] + list[index + 1] ]

    return bi_gram

# what is nlp
# ref: https://www.pytry3g.com/entry/N-gram#%E6%96%87%E5%AD%97%E5%8D%98%E4%BD%8D%E3%81%AEN-gram
def charactor_bi_gram(sentence):
    words = list(filter(lambda x: x != ',' and x != '.' and x != ' ', sentence))
    return to_bi_gram(words)

def word_bi_gram(sentence):
    filted_words = filted_sentence(sentence)
    return to_bi_gram(filted_words)

sentence = 'I am an NLPer'
print('charactor bi gram')
print(charactor_bi_gram(sentence))

print('word bi gram')
print(word_bi_gram(sentence))