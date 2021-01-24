- Math.round で四捨五入することができる
  - Math.round →　四捨五入
  - Math.floor → 切り捨て
  - Math.ceil →　切り上げ

## 公式のMathをみてみる
### 2値間にある整数の乱数を返す
ref: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math#returning_a_random_integer_between_two_bounds

```javascript
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

random(1, 10);
```

### 角度とラジアンの間の変換
ref: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math#converting_between_degrees_and_radians

```javascript
function degToRad(degrees) {
  return degrees * (Math.PI / 180);
};

function radToDeg(rad) {
  return rad / (Math.PI / 180);
};
```

- text-shadowについて
  - offset-x, offset-y, blur-radius(ぼかし), color
  - カンマでつなげるとができる
  - https://developer.mozilla.org/ja/docs/Web/CSS/text-shadow