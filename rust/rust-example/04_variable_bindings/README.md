## リンク

[https://doc.rust-jp.rs/rust-by-example-ja/variable_bindings.html](https://doc.rust-jp.rs/rust-by-example-ja/variable_bindings.html)

## したこと

### 宣言

- 宣言だけ先に行い、あとで使うこともできる
- 限られたスコープの中で、使うこともできる

```rust
let mew;

mew = "sample";
println!("{}", mew);
```

## **工夫したこと**

### 再代入と再束縛

```rust
fn main() {
    // 再代入
    let mut variable1 = 32i32;
    println!("{}", variable1);
    variable1 = 64i32;
    println!("{}", variable1);

    // 再束縛
    let variable2 = 32i32;
    println!("{}", variable2);
    let variable2 = 64i32;
    println!("{}", variable2);
}
```

ref: [https://qiita.com/padawan_e15/items/63b0c728514907c9faaa](https://qiita.com/padawan_e15/items/63b0c728514907c9faaa)
