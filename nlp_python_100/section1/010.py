import random

def shuffle_word(word):
    if len(word) >= 4:
        return word[0] + "".join(random.sample(word[1:-1], len(word) - 2)) + word[-1]
    else:
        return word

def spliter(sentence):
    shuffled_array = [shuffle_word(str) for str in sentence.split(' ')]
    return ' '.join(shuffled_array)

sentence = 'I couldn’t believe that I could actually understand what I was reading : the phenomenal power of the human mind .'
print(sentence)
print(spliter(sentence))