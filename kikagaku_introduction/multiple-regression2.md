## 01. データの読み込み

```python
# 定義
import numpy as np
import pandas as pd
import seaborn as sns
%matplotlib inline

df = pd.read_csv('/content/housing.csv')
df.head(3)
```

## 02. 外れ値の除去( $3\sigma$ 法)

```python
sns.set()
sns.displot(df['x6'])

col = 'x6'
# 平均
mean = df.mean()[col]
# 標準偏差
sigma = df.std()[col]

low = mean - 3 * sigma
high = mean + 3 * sigma

# のぞいてみる
df2 = df[(df[col] >= low) & (df[col] <= high)]
len(df), len(df2)
# => (506, 498)
```

## 03. 外れ値除去（全変数）

```python
# 平均
mean = df.mean()
# 標準偏差
sigma = df.std()
cols = df.columns
_df = df
for col in cols:
  # 3 \sigma 法の上下限値の設定
  low = mean[col] - 3 * sigma[col]
  high = mean[col] + 3 * sigma[col]

  _df = _df[(_df[col] >= low) & (_df[col] <= high)]

# 外れ値の除去
len(df), len(_df)
# => (506, 415)
```

対処法
- 外れ値は取り除く
- 外れ値を平均, 中央値で補完する
- 主成分分析を使って、潜在変数に変換後、 3 \sigmaを適用する

## 04. モデルの構築

```python
# 入力変数と出力変数の切り分け
x = _df.drop('y', axis=1)
t = _df['y']

# 訓練データ・検証データに分割
from sklearn.model_selection import train_test_split

x_train, x_test, t_train, t_test = train_test_split(x, t, test_size=0.4, random_state=1)

# 重回帰分析
from sklearn.linear_model import LinearRegression
model = LinearRegression().fit(x_train, t_train)
# 訓練データ
model.score(x_train, t_train)
# => 0.7972109224535133
# 検証データ
model.score(x_test, t_test)
# => 0.6253776004329598
```

## 05. スケーリング・パラメータの確認

```python
from sklearn.preprocessing import StandardScaler

# インスタンス化
scaler = StandardScaler()
# scaler の学習（平均と標準偏差の算出）
scaler.fit(x_train)

# スケーリング
x_train2 = scaler.transform(x_train)
x_test2 = scaler.transform(x_test)

model = LinearRegression().fit(x_train2, t_train)

model.score(x_train2, t_train)
# => 0.7972109224535133
model.score(x_test2, t_test)
# => 0.6253776004329598

# 確認
model.coef_

sns.barplot(x = x.columns, y = model.coef_)
# - x6, x8 は差が大きいので影響している
# - x4 は差が小さいので影響していない
```