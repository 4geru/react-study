# 実データの演習
## 01. データの読み込み
```python
# 必要ライブラリの読み込み
import numpy as np
import pandas as pd

## step01 データの読み込み
df = pd.read_csv('/content/housing.csv')
# - データの確認
df.head(3)

df.info()
# - データ情報の確認
# <class 'pandas.core.frame.DataFrame'>
# RangeIndex: 506 entries, 0 to 505
# Data columns (total 14 columns):
#  #   Column  Non-Null Count  Dtype  

# - 統計量の算出
df.describe()
```

## 02. 分布の確認

```python
import seaborn as sns

# データを見る
sns.set()
sns.distplot(df['y'], bins=10)

# 相関係数の算出
df.corr()

# 全ての相関関係を見る
sns.pairplot(df)
```

## 03. 入力変数と出力変数の切り分け

```python
# df.iloc[行, 列]
x = df.iloc[:, :-1]
y = df['y']


# 行列を消す, axis = 縦方向
df.drop('y', axis=1)
```

## 04. モデルの構築と検討

```python
# x -> 入力変数, t -> 目標値
x = df.drop('y', axis = 1)
t = df['y']

from sklearn.linear_model import LinearRegression
# モデルのインスタンス化
model = LinearRegression()

# 学習
model.fit(x, t)

# 検証
model.score(x, t)
```

## 05. 訓練データと検証データ

例) 受験勉強　10 年分の過去問を購入
悪いケース
- 10年分の勉強(学習)
- 10年分で実力テスト(検証)

良いケース
- 5年分の勉強(学習) → 訓練データ
- 5年分で実力テスト(検証) → 検証データ


```python
from sklearn.model_selection import x_train, x_test, t_train, t_test = train_test_split(x, t, test_size=0.4, random_state=1)

# モデルの学習
model.fit(x_train, t_train)
# 検証(訓練データ)
model.score(x_train, t_train)
# => 0.7468316520140627
# 検証(検証データ)
model.score(x_test, t_test)
# => 0.7209056672661757
```

## 06. モデルの保存と読み込み

```python
# 予測をしてみる
sample = x.iloc[0, :]

y_pred = model.predict(np.array(sample).reshape(1, -1))
y_pred
# => array([29.42368847])

y_pred = model.predict([sample])
y_pred
# => array([29.42368847])

# モデルの保存
from sklearn.externals import joblib
joblib.dump(model, 'model.pkl')

# モデルの読み込み
model_new = joblib.load('/content/model.pkl')
model_new.predict([sample])
# => array([29.42368847])
```


## 07. パラメーターの確認

```python
# precision = 有効桁数・小数点以下
# suppress = 指数関数表示の禁止
np.set_printoptions(precision=3, suppress=True)
model.coef_
# => array([ -0.09 ,   0.067,   0.05 ,   2.186, -17.205,   3.636,   0.002,
#            -1.366,   0.29 ,  -0.012,  -0.835,   0.009,  -0.504])
```

重みを見るだけでは、どの変数が影響を与えているかわからない