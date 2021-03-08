## リンク

[Rust By Example 日本語版](https://doc.rust-jp.rs/rust-by-example-ja/types.html)

## したこと

キャストの仕方を学んだ

```rust
fn main() {
    let mew = 32;
    let words = mew as f64;
    println!("{}, {}", mew, words);
}
```

## **工夫したこと**

次のコードが動かなかった

```rust
fn main() {
    let mew = 32;
    let words = mew as String;
    println!("{}, {}", mew, words);
}
```
