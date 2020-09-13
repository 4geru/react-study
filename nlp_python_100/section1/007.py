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

def include_word(word, sets)
    return_sets = {}
    for words in sets:
        if word.include(words)

word_a = "paraparaparadise"
bi_gram_a = set(charactor_bi_gram(word_a))

word_b = "paragraph"
bi_gram_b = set(charactor_bi_gram(word_b))

print("or")
print(bi_gram_a | bi_gram_b)

print("and")
print(bi_gram_a & bi_gram_b)

print("a - b")
print(bi_gram_a - bi_gram_b)

print("b - a")
print(bi_gram_b - bi_gram_a)