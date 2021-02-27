## リンク
[Rust By Example 日本語版](https://doc.rust-jp.rs/rust-by-example-ja/primitives.html)

## したこと
### 型について
### [Scalar Types](https://doc.rust-jp.rs/rust-by-example-ja/primitives.html#scalar-types)

- 符号付き整数: `i8`, `i16`, `i32`, `i64`, `i128`, `isize`（ポインタのサイズ）
- 符号無し整数: `u8`, `u16`, `u32`, `u64`, `u128`, `usize`（ポインタのサイズ）
- 浮動小数点: `f32`, `f64`
- `char`: `'a'`, `'α'`, `'∞'`などのUnicodeのスカラー
- `bool`: `true`または`false`
- unit型: `()`が唯一の値

### [Compound Types](https://doc.rust-jp.rs/rust-by-example-ja/primitives.html#compound-types)

- 配列: e.g. `[1, 2, 3]`など
- タプル: e.g. (1, true)

### 初期値について
整数→ i32
少数→f63

### ミュータブルとイミュータブル
基本的にはイミュータブルな値になる
let mut variable_name でミュータブルな値に設定することができる

## **工夫したこと**
### float型の加算をしたら少数は打ち切られた

```rust
println!("1 + 2.0 = {:.2}", 1f32 + 2.0);
// => 3.00
println!("1 + 2.0 = {:}", 1f32 + 2.0);
// => 3
```

### unsigned型の挙動でマイナスはできない

```rust
println!("1 - 2 = {}", 1u32 - 2);
// => コンパイルエラーになる
```

### fnで遊んでみた

```rust
fn count_up_i32(num: i32) -> i32 {
    num + 1
}

fn count_up_f64(num: f64) -> f64 {
    num + 1.0
}

fn main() {
    println!("1 is count up to {:.2}", count_up_i32(1));
    println!("1 is count up to {:.2}", count_up_f64(1.0));
}
```

### arrayはtupleみたいにアクセスできない

```rust
let xs: [i32; 5] = [1, 2, 3, 4, 5];
println!("first element of the array: {}", xs.0);
// => コンパイルエラーになる
```
