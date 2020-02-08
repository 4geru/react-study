print('List >>')
primes = [2, 3, 5, 7]
planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

hands = [
    ['J', 'Q', 'K'],
    ['2', '2', '2'],
    ['6', 'A', 'K'], # (Comma after the last element is optional)
]
# (I could also have written this on one line, but it can get hard to read)
hands = [['J', 'Q', 'K'], ['2', '2', '2'], ['6', 'A', 'K']]

print(hands)

my_favourite_things = [32, 'raindrops on roses', help]

print(my_favourite_things)

print('\nIndexing >>')
print(planets[0])
print(planets[1])
print(planets[-1])

print('\nSlicing>>')
print(planets[0:3])
print(planets[:3])
print(planets[3:])
print(planets[1:-1])
print(planets)


print('\nChanging lists >>')
print('before', planets)
planets[3] = 'Malacandra'
print("change planets[3] = 'Malacandra'")
print('after', planets)

planets[:3] = ['Mur', 'Vee', 'Ur']
print(planets)
# insert data when over the count.
planets[:3] = ['Mur', 'Vee', 'Ur', 'Mal']
print(planets)

print('\nList functions >>')
print(len(planets))
print(sorted(planets))
# return a-z sorted max value when use max method in string values
print(max(planets))

primes = [2, 3, 5, 7]
print(sum(primes))
print(max(primes))

print('\nInterlude: objects >>')
x = 12
# x is a real number, so its imaginary part is 0.
print(x.imag)
# Here's how to make a complex number, in case you've ever been curious:
c = 12 + 3j
print(c.imag)
print('bit length is', x.bit_length())

print('\nList methods >>')
planets.append('Pluto')
print("planets.append('Pluto')")
print(planets)
planets.pop()
print("planets.pop()")
print(planets)

print('\nSearching lists >>')
planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
print("planets.index('Earth')")
print(planets.index('Earth'))

print('"Earth" in planets', "Earth" in planets)
print('"Calbefraques" in planets', "Calbefraques" in planets)

print('\nTuples >>')
t = (1, 2, 3)
print(t)


print('\nRaw swap')
a = 1
b = 0
a, b = b, a
print(a, b)