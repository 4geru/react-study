# リスト

udemy: https://www.udemy.com/course/typescript-react-frontend/

# 学んだこと

object の方を使いたい場合は interface を使う。任意の値を受け取る場合は ? を指定する

```javascript
interface NAME {
  first: string | null;
  // 任意の変数の場合は ? をつける
  last?: string;
}
```

### intersection types

- type をくっつけることができる

### union types

- a or b の方を受け付ける

```javascript
let variale: boolean | number;
variale = true;
let union_array: (number | string)[];
union_array = [1, true];
```

### typeof

```javascript
let animal = { cat: "small cat" };
let newAnimal: typeof animal;
newAnimal = { cat: "raion" };
```

### keyof

- 変数に入る値を指定することができる
- keyof と typeof は併用できる

```javascript
type KYES = {
  primary: string;
  secondary: string;
}
let key: keyof KYES;
key = "primary"
// erroが発生する
// key = "hello"
```

### enum

- enum で設定した値を数字と紐づけてくれる

### Generics

```javascript
// デフォルトの型を指定できる
interface GEN<T = string> {
  item: T;
}
const gen1: GEN = { item: "hello" };
const gen2: GEN<number> = { item: 1 }; // 関数先でも指定できる

// string or numberだけ指定する
interface GEN2<T extends string | number> {
  item: T;
}
const gen3: GEN2<string> = { item: "hello" };
const gen4: GEN2<number> = { item: 1 };
```

```javascript
// 関数の場合
interface Props {
  price: number;
}

function funcGen1<T extends Props>(props: T) {
  return { value: props.price }
}
const genFunc1 = funcGen2({ price: 100 });
// ファンクション関数
const funcGen2 = <T extends Props>(props: T) => {
  return { value: props.price }
}
const genFunc2 = funcGen2({ price: 200 });
```

### JSON

JSON のデータから新たに型を指定することができる

```
type xxx = typeof JSON
```

### React Hooks Props

- rfc → テンプレートクラスコンポーネントを追加できる
- rfce → テンプレートのファンクションコンポーネントを追加できる

- props も型定義ができる

```javascript
import React from "react";

interface Props {
  text: string;
}

const TestComponent: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default TestComponent;
```

### React Hooks useState

- useState でも型を使うことができる

```javascript
const [count, setCount] = (useState < number) | (string > "click here");
const countUp = () => {
  typeof count === "string" ? setCount(1) : setCount(count + 1);
};

interface UseData {
  id: number | null;
  name: string;
}
const [user, setUser] = useState < UseData > { id: 1, name: "4geru" };
```
