## 01. 単回帰分析の実装 - NumPy 速習 -

```python
# ライブラリのインポート
import numpy as np

# ベクトルを定義
x = np.array([[1, 2, 3]])

# * データの中心化
# 平均の算出 .mean()
x.mean()

# データの中心化
xc = x - x.mean()
yc = y - x.mean()

# * aの計算
# 要素積
xx = xc * xc
xy = xc * yc

# 合計 .sum()
xx.sum()
xy.sum()

# a を算出
a =  xy.sum() / xx.sum()
a
```


## 02. pandas, matplotlib
### pandas
```python
# pandasの読み込み
import pandas as pd
# CSVの読み込み
df = pd.read_csv('/content/sample.csv')

type(df)
# => pandas.core.frame.DataFrame

# 頭からn行
df.head(3)
# 後ろからn行
df.tail(3)

# n行目から欲しい場合
df[10:]

# .iloc[行, 列]
df.iloc[1, 1]
# => 132500.0

df.iloc[0, 1]
# => 137500.0

# x行の列を複数欲しい場合
df.iloc[:10, 1]

df.iloc[:5, :]

# x行だけ欲しい場合
df['x']

x = df['x']
y = df['y']

# x行だけのデータ
type(x)
# => pandas.core.series.Series
```

### matplotlib

```python
import matplotlib.pyplot as plt

# 散布図: scatter
plt.scatter(x, y)
plt.show()

# * 追加
fig = plt.figure(figsize=(8, 8))
ax = fig.add_subplot(1, 1, 1)

ax.scatter(x, y);
# 色の変更
ax.scatter(x, y, c='red');
# titleを追加
ax.set_title('first scatter');
# 軸を表示
ax.set_xlabel('x');
ax.set_ylabel('y');
```

## 03. 単回帰分析

```python
# 必要ライブラリのインポート
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# CSVの読み込み
df = pd.read_csv('sample.csv')

# ファイルの確認
df.head(3)

# 必要なデータを一覧で確認
df.describe()

# 中心化
df_c = df - df.mean()
df_c.describe()

# グラフ化
x = df_c['x']
y = df_c['y']
plt.scatter(x, y)

# *演習パラメーターの計算
xx = x * x
xy = x * y
a = xy.sum() / xx.sum()

plt.scatter(x, y, label='y') # 実数値
plt.plot(x, a * x, c='red', label='y_hat') # 予測値
plt.legend() # 凡例の表示


# * 予測
# 40平米の家賃はいくらか
x_new = 40

mean = df.mean()
# x_newを中心化する
xc_new = x_new - mean['x']
xc_new

# 中心化された予測値を求める
yc = a * xc_new

# 中心化前の状態に戻す
y_hat = yc + mean['y']
y_hat
```

### 予測値を算出する関数を作成

```python
def predict(x):
  # 定数項
  a = 10069.022519284063
  xm = 37.62222
  ym = 121065.0
  # 中心化
  xc = x - xm
  # 予測値
  y_hat = a * xc + ym
  return y_hat
  
predict(40)
# => 145006.92036590326
predict(30)
# => 44316.695173062646
predict(20)
# => -56373.53001977797
  # => 外装のデータ
```