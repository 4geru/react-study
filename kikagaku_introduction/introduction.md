## 01. 概念の紹介

- 人工知能(AI) > 機械学習 > ディープラーニング

<table>
    <tbody>
        <tr>
            <td>input</td>
            <td>データ</td>
            <td rowspan=5>数値</td>
            <td rowspan=5>機械学習</td>
        </tr>
        <tr>
            <td>目</td>
            <td>画像</td>
        </tr>
        <tr>
            <td>耳</td>
            <td>音声(時系列)</td>
        </tr>
        <tr>
            <td>口</td>
            <td>自然言語(word2vec)</td>
        </tr>
        <tr>
            <td></td>
            <td>センサ</td>
        </tr>
    </tbody>
</table>

入力 x → 機械学習 → 出力 y

- 入力 x と出力 y の関係性を見つける
- 判断を下す部分が機械学習

- 機械学習の一つとして、ディープラーニング・SVM・単回帰分析などが存在する

## 02. 機械学習に必要な数学

- 微分・積分
- 線形代数
- 確率統計

## 03. 機械学習の 3 大トピック

- 教師あり学習： <font color='red'>入力 x と 出力 y</font>
  - 回帰
    - 「数値」を予測する
  - 分類
    - 「カテゴリー」を予測する
- 教師なし学習： <font color='red'>入力 x</font>
  - クラスタリング
  - 次元削除
- 強化学習： <font color='red'>データがない・ほとんどなくても動く</font>

## 04. 内挿・外挿

<table>
    <tr>
        <td>x</td>
        <td>1</td>
        <td>2</td>
        <td><font color="red">3</font></td>
        <td>4</td>
        <td><font color="red">5</font></td>
    </tr>
    <tr>
        <td>y</td>
        <td>2</td>
        <td>4</td>
        <td><font color="red">6</font></td>
        <td>8</td>
        <td><font color="red">10</font></td>
    </tr>
</table>

y = ax(a = 2)

- 3 はできる
  - 1-4 の中の範囲(内挿)
- 5 はできない
  - 1-4 の外の範囲(外挿)
