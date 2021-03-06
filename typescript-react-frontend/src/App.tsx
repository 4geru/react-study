import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data.json'
import TestComponent from './TestComponent';
import TextForm from './TextForm';

// === type ===
const name = "hello";

let changeableName = 'hello';
changeableName = '4geru';

// 暗黙的に方を推定すること = 型の推論
// 明示的に方をしていいすること = アノテーション
let username: string = '4geru';
let dummyNumber:  number = 1;
let flag: boolean = true;

let array1: (boolean)[] = [true, false];
let array2: (string | number)[] = [1, '2'];

interface NAME {
  first: string,
  // 任意の変数の場合は ? をつける
  last?: string
}

const func1 = (x: number, y: number): number => {
  return x + y
}

let nameObj: NAME = { first: 'sakisaka', last: '4geru' };
// === type ===

// === intersection types ===
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 12,
  city: 'Tokyo',
  username: 'sato',
  password: 'password'
};
// === intersection types ===

// === union types ===
let variale: boolean | number;
variale = true;
variale = 1;
variale = false;
let union_array: (number | string)[];
union_array = [1, 'true'];
// === union types ===

let company: "Facebook" | "Google" | "Amazon"
// company = "Apple" => error
company = "Facebook"

let memory: 256 | 512;
memory = 256;

// typeof
let msg: string = 'hi';
let msg2: typeof msg;
msg = "hello";

let animal = { cat: 'small cat' };
let newAnimal: typeof animal;
newAnimal = { cat: 'raion' };

// keyof
type KYES = {
  primary: string;
  secondary: string;
}
let key: keyof KYES;
key = "primary"
// erroが発生する
// key = "hello"

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;
keySports = "soccer"

// enum
enum OS {
  Windows,
  Mac,
  Linux
}
interface PC {
  id: number;
  OSType: OS;
}

const PC1: PC = { id: 1, OSType: OS.Windows }
const PC2: PC = { id: 2, OSType: OS.Linux }

// 型の互換性
const comp1 = 'text';
let comp2: string = comp1;
let comp3: string = 'test';
// let comp4: 'test' = comp3;

let funcComp1 = (x:number) => {}
let funcComp2 = (x:string) => {}

// 引数の型が違うのでエラーになる
// funcComp1 = funcComp2

// ジェネリクス
interface GEN<T> {
  item: T;
}

const gen0: GEN<string> = { item: "hello" };
const gen1: GEN<number> = { item: 1 };
// 方を指定しないと error になる
// const gen2: GEN = { item: "hello" };

// デフォルトの型を指定できる
interface GEN1<T = string> {
  item: T;
}
const gen2: GEN1<number> = { item: 1 };

// string or numberだけ指定する
interface GEN2<T extends string | number> {
  item: T;
}
const gen3: GEN2<string> = { item: "hello" };
const gen4: GEN2<number> = { item: 1 };
// しらない型なので、errorになる
// const gen5: GEN2<boolean> = { item: true };

function funcOriginalGen<T extends string>(props: T) {
  return { item: props };
}
function funcGen<T>(props: T) {
  return { item: props };
}

const getG1 = funcOriginalGen("test");
// errorになる
// const getG2 = funcOriginalGen(1);

const getG3 = funcGen<string>("test");
const getG4 = funcGen<string | null>(null);

function funcGen1<T extends string | null>(props: T) {
  return { value: props };
}

const genG5 = funcGen1("hello");
// errorになる
// const genG6 = funcGen1(1);

interface Props {
  price: number;
}

function funcGen2<T extends Props>(props: T) {
  return { value: props.price }
}

const genG6 = funcGen2({ price: 100 });
// errorになる
// const genG7 = funcGen2({ price: '100' });

// ファンクション関数
const funcGen3 = <T extends Props>(props: T) => {
  return { value: props.price }
}
const gen8 = funcGen3({ price: 200 });

// JSON
type USERS = typeof Data;

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent
          text='mew'
        />
        <TextForm />
      </header>
    </div>
  );
}

export default App;
