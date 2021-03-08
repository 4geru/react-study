## リンク

[Rust By Example 日本語版](https://doc.rust-jp.rs/rust-by-example-ja/custom_types.html)

## したこと

Rust でのカスタムデータ型の作成は主に以下の 2 つのキーワードを介して行われます。

- `struct`: 構造体を定義する
- `enum`: 列挙型を定義する

### struct

- タプル。（ほとんどの場合は名前付きタプル）クラシックな[C 言語スタイルの構造体。](<https://en.wikipedia.org/wiki/Struct_(C_programming_language)>)
- ユニット。これはフィールドを持たず、ジェネリック型を扱う際に有効です。

## use

変数空間を下げる →User::Name が `use crate::Use::{Name}`, `use crate::Use::*`, `use crate::Use::Name` をすると Name だけで使えるようになる

### 定数

- `const`: 不変の値（通常はこちらを使用する）
- `static`: [スタティックな](https://doc.rust-jp.rs/rust-by-example-ja/scope/lifetime/static_lifetime.html)ライフタイムを持つミュータブル(`mut`)な値 The static lifetime is inferred and does not have to be specified. Accessing or modifying a mutable static variable is `[unsafe](https://doc.rust-jp.rs/rust-by-example-ja/unsafe.html)`.

## **工夫したこと**

- 特記事項なし
  - 難しいので、1 周してから見直す
