## Hello python
spam_amount = 0
print(spam_amount)

# Ordering Spam, egg, Spam, Spam, bacon and Spam (4 more servings of Spam)
spam_amount = spam_amount + 4

if spam_amount > 0:
    print("But I don't want ANY spam!")

viking_song = "Spam " * spam_amount
print(viking_song)

## Type
def print_type(value):
  print("type: {} => value: {}".format(value, type(value)))

print_type(0)
print_type(19.95)

## calculation
def print_calculation(string):
  print("'{}' is return {}".format(string, eval(string)))

print_calculation('5 / 2')
print_calculation('6 / 2')
print_calculation('5 // 2')
print_calculation('6 // 2')
