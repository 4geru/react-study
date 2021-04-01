## 01. 線形代数

### スカラー

- x, y , Z, M, N

※ M, N, O, P, L 以外の大文字は行列とする

### ベクトル

- **y** = [y1 y2 ... yn]

$$
x = \left( \begin{array}{cc}
x_{1} \\
x_{2} \\
x_{3} \\
\end{array} \right)
$$

転置

$$
x = \left( \begin{array}{cc}
x_{1} & x_{2} &x_{3} \\
\end{array} \right)
$$

$$
y = \left( \begin{array}{cc}
y_{1} \\
y_{2} \\
\vdots \\
y_{n} \\
\end{array} \right)
$$

### 行列

$$
x = \left( \begin{array}{cc}
x_{11} & x_{12} \\
x_{21} & x_{22} \\
x_{31} & x_{32} \\
\end{array} \right)
$$

サイズ 3 行 x 2 列

- スカラ 1 行 x 1 列
- ベクトル 1 行 x n 列
- 行列 n 行 x n 列

<table>
    <tr>
        <td></td><td>小</td><td>大</td>
    </tr>
    <tr>
        <td>細</td>
        <td>スカラー<br/>変数</td>
        <td>スカラー<br/>定数</td>
    </tr>
    <tr>
        <td>太</td>
        <td>ベクトル</td>
        <td>行列</td>
    </tr>
</table>

## 02. 行列の演算

### 足し算

$$
\left( \begin{array}{cc}
1 \\
2 \\
3 \\
\end{array} \right) +
\left( \begin{array}{cc}
4 \\
5 \\
6 \\
\end{array} \right) =
\left( \begin{array}{cc}
1 + 4\\
2 + 5\\
3 + 6\\
\end{array} \right) =
\left( \begin{array}{cc}
5 \\
7 \\
9 \\
\end{array} \right)
$$

### 引き算

$$
\left( \begin{array}{cc}
1 \\
2 \\
3 \\
\end{array} \right) -
\left( \begin{array}{cc}
4 \\
5 \\
6 \\
\end{array} \right) =
\left( \begin{array}{cc}
1 - 6\\
2 - 5\\
3 - 4\\
\end{array} \right) =
\left( \begin{array}{cc}
-5 \\
-3 \\
-1 \\
\end{array} \right)
$$

<font color='red'>ポイント：</font> サイズが同じであることが条件

### かけ算（行列積）

$$
\left( \begin{array}{cc}
1 & 2\\
3 & 4 \\
\end{array} \right) +
\left( \begin{array}{cc}
5 & 6 \\
7 & 8 \\
\end{array} \right) =
\left( \begin{array}{cc}
5 + 14 & 6 + 16 \\
15 + 28 & 18 + 32 \\
\end{array} \right) =
\left( \begin{array}{cc}
19 & 22 \\
43 & 50 \\
\end{array} \right)
$$

<font color='red'>ポイント：</font> [A][b] = [C]
サイズ A(N x M), B(O x P) = C(N x P)
N = O となることが条件

## 03. 練習問題

## 04. サイズ

- (1) 横ベクトル x 縦ベクトル = スカラー
- (2) 行列 x ベクトル = ベクトル
- (3) ベクトル x 行列 x ベクトル = スカラー

$$
\bm{x}^{\mathrm{T}} \bm{y} = スカラー \\
\bm{X} \bm{y} = ベクトル \\
\bm{x}^{\mathrm{T}} \bm{A} \bm{y} = スカラー
$$

## 05. 転置

$$
\bm{x} = \left( \begin{array}{cc}
1 \\
2 \\
3 \\
\end{array} \right)
\\
\bm{x}^{\mathrm{T}} = \left( \begin{array}{cc}
1 & 2 & 3 \\
\end{array} \right)
$$

$$
\bm{X} = \left( \begin{array}{cc}
1 & 4\\
2 & 5\\
3 & 6\\
\end{array} \right)
\\
\bm{X}^{\mathrm{T}} = \left( \begin{array}{cc}
1 & 2 & 3 \\
4 & 5 & 6
\end{array} \right)
$$

### 公式

$$
\left( \begin{array}{c}
\bm{A}^{\mathrm{T}}
\end{array} \right) ^{\mathrm{T}} = \bm{A}
$$

$$
\left( \begin{array}{c}
\bm{A}\bm{B}
\end{array} \right) ^{\mathrm{T}} = \bm{B} ^{\mathrm{T}} \bm{A} ^{\mathrm{T}}
$$

$$
\left( \begin{array}{c}
\bm{A}\bm{B}\bm{C}
\end{array} \right) ^{\mathrm{T}} = \bm{C} ^{\mathrm{T}} \bm{B} ^{\mathrm{T}} \bm{A} ^{\mathrm{T}}
$$

## 06. 単位行列・逆行列

- 単位行列
  スカラーの 1 に対応

$$
\bm{A}\bm{I} = \bm{A} \\
\bm{I}\bm{A} = \bm{A}
$$

- 逆行列
  2 x (1/2) = 1 スカラーの逆数に対応(今回は 1/2)

$$
\bm{A}\bm{A}^{-1} = \bm{I} \\
\bm{A}^{-1}\bm{A} = \bm{I}
$$

条件： A が正方行列であること(最低限)

## 07. ベクトルで微分

- ゼロベクトル

$$
\bm{0} = \left( \begin{array}{cc}
0 \\
0
\end{array} \right)
$$

- ベクトルで微分の公式

$$
\frac{\partial}{\partial\bm{x}} (\bm{c}) = \bm{0}
$$

$$
\frac{\partial}{\partial\bm{b}} (\bm{b}^{\mathrm{T}}\bm{x}) = \bm{a}
$$

$$
\frac{\partial}{\partial\bm{b}} (\bm{x}^{\mathrm{T}}\bm{A}\bm{x}) = (\bm{A} + \bm{A}^{\mathrm{T}}) \bm{x}
$$
