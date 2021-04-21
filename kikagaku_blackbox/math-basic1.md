# 数学の基礎 step1

## 01. 本講座で登場する関数と記号

$$
\bm{x}: 変数 \\
\bm{X}: 定数
$$

### 総和（足し算） と 総乗（かけ算）

$$
1 + 2 + 3 + 4 + 5 = \sum_{i=1}^5 i \\
x_1 + x_2 + ... + x_n = \sum_{i=1}^Nx_n \\
1 \times 2 \times 3 \times 4 \times 5 = \prod_{i-1}^5 x_n
$$

### 指数関数 と 対数関数

- 指数関数

$$
y = a^x \\
e = ネイピア数 = exp(x) \\
\\
a^0 = 1 \\
a^{-n} =  \frac{1}{a^n}
$$

- 対数関数

$$
指数関数: a ^y = x \\
対数関数: y = \log_a x
\\
\log_e x = \log x = \ln{x} \\
$$

$$
a ^ 0 = 1 \\
0 = \log_a 1 \\

a ^ 1 = a \\
1 = \log_a a \\

\log_a a^M = M \log_a a \\
\log x_1 x_2 = \log x_1 + \log x_2 \\
\log (\frac{x_2}{x_1}) = \log x_2 - \log x_1 \\
$$

### 極限

$$
f, h \rightarrow a \\

\lim_{h \to a} f(x)\\
$$

## 02. 微分とは

### 微分が必要な理由

- 微分 → 接戦の傾きがわかる
傾き a を求める

- 2点について
$$
ax + b \\
a = \frac{f(x)の増加量}{xの増加量} = \frac{f(x_2) - f(x_1)}{x_2 - x_1}
$$

- 1点について

$$
a = \lim_{h \to 0} \frac{f(x + h) - f(x)}{(x + h) - x} \\
\lim_{h \to 0} \frac{f(x + h) - f(x)}{h}
$$

- 導関数

$$
\lim_{h \to 0} \frac{f(x + h) - f(x)}{h} \\
= f'(x) \\
= \frac{df(x)}{dx} \\
= \frac{d}{dx} f(x)
$$

お試し

$$
f(x) = x \\

f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h} \\
= \lim_{h \to 0} \frac{x + h - x}{h} \\
= \lim_{h \to 0} \frac{h}{h} \\
= \lim_{h \to 0} 1 \\
= 1
$$

## 03. 微分の公式

### 主要な関数の微分

$$
(1)' = 0 \\
(x)' = 1 \\
(x^2)' = 2x \\
(x^n)' = nx^{n - 1} \\

(e^{ax})' = ae^{ax} \\
(e^x)' = e^x, (e^{-x})' = -e^{-x} \\

(logx)' = \frac{1}{x}
$$

### 線形性

- 単一項
$$
(3x)' = 3 \times (x)' = 3\\

(cf(x))' = cf'(x) \\
$$

- 足し算
$$
(2x^2 + 4x + 5)' = (3x^2)' + (4x)' + (5)' = 6x + 4\\

(f(x) + g(x))' = f'(x) + g'(x) \\
$$

- かけ算
$$
(f(x)g(x))' = f(x)'g(x) + f(x)g(x)'
$$

## 04. 合成関数の微分

$$
f(x) = \{ (3x + 4)^2 \}' \\

u = 3x + 4 \\
f(x) = u^2
$$

連鎖律(チェインルール)

$$
\frac{df(x)}{dx} = \frac{{df(x)}}{du} \frac{du}{dx}\\
= (u^2)' (u)' \\
= 2u x 3 \\
= 6u \\
= 6(3x + 4) \\
$$

## 05. 偏微分

- 複数変数がある関数 = 多変数関数

$$
\frac{\partial}{\partial_M} f(x_1, x2, ..., x_M)
$$

$$
\frac{\partial}{\partial_{x_1}}(3 x_1 + 4 x_2) = \frac{\partial}{\partial_{x_1}}(3x_1) + \frac{\partial}{\partial_{x_1}}(4x_2) \\
= 3 \frac{\partial}{\partial_{x_1}}(x_1) + 4x_2 \frac{\partial}{\partial_{x_1}}(1) \\
= 3 \times 1 + 4 \times 0 \\
= 3
$$

## 06. 単回帰分析の問題設定と数理モデル

### 機械学習の全体像

- 教師あり学習
  - x, t → 問題, 答えが与えられる
- 教師なし学習
  - 答えがない
  - データの関係を見つける
- 強化学習
  - データが与えられない状態でも見つけられる

#### 「訓練」と「推論」

- training, inference

#### 教師あり学習の流れ

1. モデルを決める
2. 目的関数を決める
3. 最適なパラメータを求める

#### 1. モデルを決める

部屋の広さ x → 家賃 y

y = wx + b
w: 重み(weight)
b: バイアス(bias)

w, b パラメータと呼ぶ

#### 前処理・データの中心化

y = wx + b

$y_c = y - \bar{y}, x_c = x - \bar{x}$

前処理をした済みのデータを扱う

$y_c = wx_c$

### 07. 目的関数

#### 2. 目的関数
t: 実際の値
y: 予測した値

$(t - y) ^ 2$

$$
\bm{L} = (t_1 - y_1) ^ 2 + (t_2 - y_2) ^ 2 + ... + (t_N - y_N) ^ 2 \\
= \sum_{n=1}^{N} (t_n - y_n) ^ 2 \\
= \sum_{n=1}^{N} (t_n - wx_n) ^ 2 \\
$$

- 二乗誤差
- 平均二乗誤差: MSE(mean sguared error)

### 08. パラメータを求める

#### 3. パラメータを求める

$$
y = wx \\
\bm{L} = \sum_{n=1}^{N} (t_n - y_n) ^ 2 \\
\sum_{n=1}^{N} (t_n - wx_n) ^ 2 \\
$$

$$
\frac{\partial\bm{L}}{\partial{w}} = \frac{\partial}{\partial{w}} \{ \sum_{n = 1}^N (t_n = w x_n) ^ 2 \} \\
$$

偏微分していく

$$
\left\{
    \begin{aligned}
        f(w) = u^2 \\
        u = t_n - wx_n
    \end{aligned}
\right. \\

\frac{\partial{f}}{\partial{w}} = \frac{\partial{f}}{\partial{u}}\frac{\partial{u}}{\partial{w}} \\
\frac{\partial{f}}{\partial{u}} = \frac{\partial}{\partial{u}}(u^2) = 2u \\
\frac{\partial{u}}{\partial{x}} = \frac{\partial}{\partial{w}}(t_n - wx_n) \\
= \frac{\partial}{\partial{w}}(t_n) - \frac{\partial}{\partial{w}}(wx_n) \\
= t_n \times \frac{\partial}{\partial{w}}(1) - x_n \times \frac{\partial}{\partial{w}}(w) \\
= t_n \times 0 - x_n \times 1 \\
= x_n \\
$$

元の式に入れる

$$
\frac{\partial\bm{L}}{\partial{w}} = \frac{\partial}{\partial{w}} \{ \sum_{n = 1}^N (t_n = w x_n) ^ 2 \} \\
= \sum_{n=1}^{N} \frac{\partial}{\partial{w}} (t_n - wx_n) ^ 2 \\
= -2 \sum_{n=1}^{N} \{ x_n (t_n - wx_n) \} \\
$$

0を代入していく

$$
\frac{\partial\bm{L}}{\partial{w}} = 0 \\
-2 \sum_{n=1}^{N} \{ x_n (t_n - wx_n) \} = 0 \\
\sum_{n=1}^{N} \{ x_n (t_n - wx_n) \} = 0 \\
\sum_{n=1}^{N} (x_n t_n) - \sum_{n=1}^{N}(wx_n^2) = 0 \\
\sum_{n=1}^{N} (x_n t_n) = \sum_{n=1}^{N}(wx_n^2) \\
\sum_{n=1}^{N} (x_n t_n) = w \sum_{n=1}^{N}(x_n^2) \\
w = \frac{\sum_{n=1}^{N} (x_n t_n)}{\sum_{n=1}^{N}(x_n^2)} \\
$$

## 09. pythonで実装

```python
import numpy as np

# データのセット
x = np.array([20, 40, 60])
t = np.array([60000, 115000, 155000])

# 平均値
x_mean = x.mean()
t_mean = t.mean()

# 中心化
xc = x - x_mean
tc = t - t_mean
```

最適なパラメータ

$$
w = \dfrac{\sum_{n=1}^N x_n t_n}{\sum_{n=1}^N x_n^2}
$$

```python
# - まずは分子を求める
# 要素ごとの積の総和
(xc * tc).sum()

# - 分母を求める
(xc * xc).sum()

# - 最適なパラメーター
w = ((xc * tc).sum()) / ((xc * xc).sum())
w
# => 2375.0
```

パラーメーターを用いて $x = 50$ の場合の予測値 $y$ を求める

$$
y_c = w x_c \\
y - \bar{t} = w (x - \bar{x}) \\
y = w(x - \bar{x}) + \bar{t}
$$

```python
x = 50
y = w * (x - x_mean) + t_mean
y
```