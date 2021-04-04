## 01. 環境構築

- google colaboratory で開発する
- コードモード・テキストモードを選択できる

### ショートカット
- command + M + B で下にセルを追加
- command + M + A で上にセルを追加
- command + M + M でテキストモード
- command + M + Y でコードモード
- command + M +D でセル削除

### データのアップロード
- google driveとの連携も可能

### GPUの利用
どのGPUに接続されているかを確認するコマンド
```
!nvidia-smi
```

## 02. 変数
### int, float
```python
a = 3
print(a)
a # 変数だけでも出力できる
b = 1.5
type(a) # int(整数)
# => int
type(b) # float(実数)
# => float
type(a), type(b) # コンまでつなげることもできる
# => (int, float)

# - 冪乗
a ** 2
# => 9
```

### str

```python
name = '幾何学'
type(name)
# => str
```

### list

```python
array = ['dog', 'cat', 'bird', 1, 1.5]
type(array)
# => list
array[1]
# => 'cat'
array[-1]
# => 1.5
array[1:2]
# => ['cat']
array[1:3]
# => ['cat', 'bird']
trains[0:3], trains[:3] # 0を省略できる
# => ([1, 2, 3], [1, 2, 3])
trains[3:5], trains[3:] # 最後も省略できる
# => ([4, 5], [4, 5])

# リスト: 後から中の要素を書き換えることが可能
trains[0] = 0
trains
# => [0, 2, 3, 4, 5]

# リスト: 要素の追加が可能
words = []
words.append('word')
words
# => ['word']
```

### tuple

```python
animals = ('dog', 'cat', 'bird')
animals
# => ('dog', 'cat', 'bird')
type(animals)
# => tuple
```

### dict

```python
results = {'数学': 80, '英語': 50}
results
# => {'数学': 80, '英語': 50}

results['数学']
# => 80

# 辞書： 要素の追加が可能
results['国語'] = 90
# => {'国語': 90, '数学': 80, '英語': 50}
```

## 03. 基本構文
### 比較演算子

```python
1 < 2
# => true
a = 3
a < 2
# => false
a == 3
# => true
a != 3
# => false
```

### エスケープシーケンス

```python
print('i\'m 4geru. hello')
# => i'm 4geru. hello
print('i\'m 4geru.\nhello')
# => i'm 4geru.
# hello
print('i\'m 4geru.\n\thello')
# # => i'm 4geru.
# 	hello
```

## 04. 制御構文
### for文(繰り返し処理)

```python
for i in range(5):
  print(i)

# 同じ出力ができる
animals = ['cat', 'dog', 'bird']
for i in range(3):
  print(animals[i])
for i in range(len(animals)):
  print(animals[i])
for animal in animals:
  print(animal)

numbers = [1, 2, 3]
animals = ['cat', 'dog', 'bird']
for number, animal in zip(numbers, animals):
  print(number, animal)
# => 1 cat
# 2 dog
# 3 bird
```

### if文(条件分岐)

```python
number = 1
if number > 0:
  print('正の値です')
  # => 正の値です

number = -1
number = -1
if number > 0:
  print('正の値です')
elif number == 0:
  print('zeroです')
else:
  print('負の値です')
```

## 05. 関数

```python
def say_hello():
  print('hello! this is 4geru')

say_hello()
# => hello! this is 4geru

# * 引数あり
def say_hello(name):
  print(f'hello! this is {name}')
say_hello('4geru')
# => hello! this is 4geru
say_hello(name = '4geru')
# => hello! this is 4geru

def calc(a, b):
    print(a + b)
result = calc(a = 1, b = 2)
type(result)
# => NoneType

# * 返り値
def calc(a, b):
    return a + b
result = calc(a = 1, b = 2)
# => 3

# * デフォルト値
def calc(a = 2, b = 3):
    print(a + b)
result = calc()
```

### 実戦問題
絶対値を返す関数 abs を作成する

```python
def abs(val = 0):
  if (val > 0):
    return val
  else:
    return -val
print(abs(-1), abs(-5.2), abs(3), abs(0))
# => (1, 5.2, 3, 0)
```

## 05. クラスの基礎
### init 関数

```python
# * class
class Person:
  def __init__(self):
    self.name = '4geru'
    self.nationality = 'japan'
    self.age = 25

# インスタンス化
person = Person()

print(person.name)
# => 4geru

# * initalの時に引数を渡す
class Person:
  def __init__(self, name, nationality, age):
    self.name = name
    self.nationality = nationality
    self.age = age
mike = Person(name= 'mike', nationality= 'japan', age= '5')
print(make.name)
# => mike

# * classの関数
class Person:
  def __init__(self, name, nationality, age):
    self.name = name
    self.nationality = nationality
    self.age = age

  def say_hello(self, name):
    print(f'hello, {name}, this is {self.name}')

geru = Person(name= '4geru', nationality= 'japan', age= '25')
geru.say_hello('Mr.Jon')

# * call関数
class Person:
  def __init__(self, name, nationality, age):
    self.name = name
    self.nationality = nationality
    self.age = age

  def __call__(self, name):
    print(f'hello, {name}, this is {self.name}')    

  def say_hello(self, name):
    print(f'hello, {name}, this is {self.name}')

geru = Person(name= '4geru', nationality= 'japan', age= '25')
geru.__call__('Bob')
# => hello, Bob, this is 4geru
# 直接呼び出すことができる
geru('Bob')
# => hello, Bob, this is 4geru
```