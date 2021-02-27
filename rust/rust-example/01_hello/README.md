## リンク
### 環境構築

[The Rust Programming Language 日本語版](https://doc.rust-jp.rs/book-ja/ch01-01-installation.html)

### 教材ページ

[Rust By Example 日本語版](https://doc.rust-jp.rs/rust-by-example-ja/hello.html)

### 参考ページ

[std::fmt - Rust](https://doc.rust-lang.org/std/fmt/)

## したこと
### 構造体の出力

```jsx
#[derive(Debug)]
struct Structure(i32);

#[derive(Debug)]
struct Deep(Structure);

fn main() {
    println!("{:?}", Deep(Structure(3)));
    // Deep(Structure(3))
    println!("{:#?}", Deep(Structure(3)));
    // Deep(
    //     Structure(
    //         3,
    //     ),
    // )
}
```

## **工夫したこと**

- testを追加で書いてみた

```jsx
fn main() {
    assert_eq!(1 + 1, 2);
    assert_eq!(format!("hello world"), "hello world");
    assert_eq!(format!("hello {}", 100), "hello 100");
}
```