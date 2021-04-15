## 01. モデルを決める
家賃 y - (広さ x1, 距離 x2, ..., 治安 xM)
M: 入力変数の数

- 用語
$$
\hat{y} = 予測値\\
w_1, w_2, ..., w_M = 重み(weight) \\
b = バイアス = w_0 x x_0
$$

$$
\hat{y} = w_1 x_1 + w_2 x_2 + ... + w_M x_M + b\\
= (w_0, w_1, ..., w_M)\left(
    \begin{array}{c}
      x_1 \\
      x_2 \\
      \vdots \\
      x_M
    \end{array}
  \right)
= \bm{w}^{\mathrm{T}}\bm{x} \\
= (x_0, x_1, ..., x_M)\left(
    \begin{array}{c}
      w_1 \\
      w_2 \\
      \vdots \\
      w_M
    \end{array}
  \right)
= \bm{x}^{\mathrm{T}}\bm{w} \\
$$

## 02. 評価関数を決める
パラメーター: w(M個), b(1個) → m + 1個

$$
(y - \hat{y}) ^ 2 
$$
- y = 実測値, y^ = 予測値, 二乗誤差でまとめる


評価関数

$$
\bm{L} = (y_1 - \hat{y_1}) ^ 2 + (y_2 - \hat{y_2}) ^ 2 + ... + (y_M - \hat{y_M}) ^ 2 \\
= (y_1 - \hat{y_1}, y_2 - \hat{y_2}, ..., y_M - \hat{y_M})\left(
    \begin{array}{c}
      y_1 - \hat{y_1} \\
      y_2 - \hat{y_2} \\
      \vdots \\
      y_M - \hat{y_M}
    \end{array}
  \right) \\
= (\bm{y}\hat{\bm{y}})^{\mathrm{T}} (\bm{y}\hat{\bm{y}})
$$

## 03. 評価関数を「最小化」する
$$
\bm{L} = (\bm{y}\hat{\bm{y}})^{\mathrm{T}} (\bm{y}\hat{\bm{y}})\\

\hat{\bm{y}} = \left(
    \begin{array}{c}
      \hat{y_1} \\
      \hat{y_2} \\
      \vdots \\
      \hat{y_M}
    \end{array}
  \right) \\
= \left(
    \begin{array}{c}
      x_1^{\mathrm{T}} \bm{w} \\
      x_2^{\mathrm{T}} \bm{w} \\
      \vdots \\
      \hat{x_M^{\mathrm{T}} \bm{w}} \\
    \end{array}
  \right) \\
=  \left(
    \begin{array}{c}
      x_1^{\mathrm{T}} \\
      x_2^{\mathrm{T}} \\
      \vdots \\
      \hat{x_M^{\mathrm{T}}} \\
    \end{array}
  \right)
  \bm{w}\\
= \left(
    \begin{array}{c}
      x_{10}& x_{11}& x_{12}& \dots& x_{1M}\\
      x_{20}& x_{21}& x_{22}& \dots& x_{2M}\\
      \vdots&  \vdots& \vdots& \dots& \vdots \\
      x_{N0}& x_{N1}& x_{N2}& \dots& x_{NM}\\
    \end{array}
  \right)
  \bm{w}\\
\hat{\bm{y}} = \bm{X}\bm{w}
$$

$$
\bm{L} = (\bm{y}\hat{\bm{y}})^{\mathrm{T}} (\bm{y}\hat{\bm{y}})\\
= (\bm{y} - \bm{X}\bm{w})^{\mathrm{T}} (\bm{y} - \bm{X}\bm{w})\\
= \{\bm{y}^{\mathrm{T}} - (\bm{Xw})^{\mathrm{T}} \}(\bm{y} - \bm{X}\bm{w})\\
= (\bm{y}^{\mathrm{T}} - \bm{w}^{\mathrm{T}}\bm{X}^{\mathrm{T}})　(\bm{y} - \bm{X}\bm{w})\\
= \bm{y}^{\mathrm{T}}\bm{y} - \bm{y}^{\mathrm{T}}\bm{X}\bm{w} - \bm{w}^{\mathrm{T}}\bm{X}^{\mathrm{T}}\bm{X}\bm{w} + \bm{w}^{\mathrm{T}}\bm{X}^{\mathrm{T}}\bm{X}\bm{w}
$$

$$
\bm{L} = \bm{y}^{\mathrm{T}}\bm{y} - 2\bm{X}^{\mathrm{T}}\bm{y}\bm{w} + \bm{w}^{\mathrm{T}}\bm{X}^{\mathrm{T}}\bm{X}\bm{w} \\
= \bm{C} + \bm{b}^{\mathrm{T}}\bm{w} + \bm{w}^{\mathrm{T}}\bm{A}\bm{w}
$$

## 04. 最適なパラメーターwを求める

$$
\bm{L} = \bm{C} + \bm{b}^{\mathrm{T}}\bm{w} + \bm{w}^{\mathrm{T}}\bm{A}\bm{w}
$$

w1, w2 に関して2次関数になる

$$
\left(
  \begin{array}{c}
    \frac{\partial}{\partial w_0} (\bm{L})\\
    \frac{\partial}{\partial w_1} (\bm{L})\\
    \vdots \\
    \frac{\partial}{\partial w_M} (\bm{L})\\
  \end{array}
\right)
= \left(
  \begin{array}{c}
    0 \\
    0 \\
    \vdots \\
    0
  \end{array}
\right) \\

\frac{\partial}{\partial \bm{w}} (\bm{L}) = \bm{0} \\
\frac{\partial}{\partial \bm{w}} (\bm{C} + \bm{b}^{\mathrm{T}}\bm{w} + \bm{w}^{\mathrm{T}}\bm{A}\bm{w}) = \bm{0} \\
\frac{\partial}{\partial \bm{w}} (\bm{C}) +
\frac{\partial}{\partial \bm{w}} (\bm{b}^{\mathrm{T}}\bm{w}) + 
\frac{\partial}{\partial \bm{w}} (\bm{w}^{\mathrm{T}}\bm{A}\bm{w}) = \bm{0} \\

\bm{0} + \bm{b}^{\mathrm{T}} + (\bm{A}^{\mathrm{T}} + \bm{A})\bm{w} = \bm{0} \\

- 2\bm{X}^{\mathrm{T}}\bm{y} + \{\bm{X}^{\mathrm{T}}\bm{X} + (\bm{X}^{\mathrm{T}}\bm{X})^{\mathrm{T}} \} \bm{w} = \bm{0} \\

- 2\bm{X}^{\mathrm{T}}\bm{y} + (\bm{X}^{\mathrm{T}}\bm{X} + \bm{X}^{\mathrm{T}}\bm{X})\bm{w} = \bm{0} \\
- 2\bm{X}^{\mathrm{T}}\bm{y} + 2\bm{X}^{\mathrm{T}}\bm{X}\bm{w} = \bm{0} \\
2\bm{X}^{\mathrm{T}}\bm{X}\bm{w} = 2\bm{X}^{\mathrm{T}}\bm{y}

\bm{X}^{\mathrm{T}}\bm{X}\bm{w} = \bm{X}^{\mathrm{T}}\bm{y} \\

(\bm{X}^{\mathrm{T}}\bm{X})^{-1}(\bm{X}^{\mathrm{T}}\bm{X})\bm{w} = (\bm{X}^{\mathrm{T}}\bm{X})^{-1}\bm{X}^{\mathrm{T}}\bm{y} \\
\bm{Iw} = (\bm{X}^{\mathrm{T}}\bm{X})^{-1}\bm{X}^{\mathrm{T}}\bm{y} \\
\bm{w} = (\bm{X}^{\mathrm{T}}\bm{X})^{-1}\bm{X}^{\mathrm{T}}\bm{y} \\
$$

## 05. よくある質問

- 逆行列の条件 → Aが正方行列であること