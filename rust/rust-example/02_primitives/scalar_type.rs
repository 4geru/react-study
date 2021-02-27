fn main() {
    // Variables can be type annotated.
    // 変数に型を指定
    let logical: bool = true;

    let a_float: f64 = 1.0;  // Regular annotation
                             // 通常の型指定
    let an_integer   = 5i32; // Suffix annotation
                             // サフィックスによる型指定

    println!("{}, {}, {}", logical, a_float, an_integer);
    // Or a default will be used.
    // サフィックスを指定しない場合、デフォルトを選択
    let default_float   = 3.0; // `f64`
    let default_integer = 7;   // `i32`

    println!("{:?}, {:?}", default_float, default_integer);
    // A type can also be inferred from context 
    let mut inferred_type = 12; // Type i64 is inferred from another line
    println!("{}", inferred_type);
    inferred_type = 4294967296i64;
    println!("{}", inferred_type);
    
    // A mutable variable's value can be changed.
    let mut mutable = 12; // Mutable `i32`
                          // ミュータブルな `i32`.
    println!("{}", mutable);
    mutable = 21;
    println!("{}", mutable);
    
    // Error! The type of a variable can't be changed.
    // エラー！ ミュータブルな変数でも型は不変
    // mutable = true;

    // Variables can be overwritten with shadowing.
    let mutable = true;
    println!("{}", mutable);
}
