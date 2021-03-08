fn main() {
    // 再代入
    let mut variable1 = 32i32;
    println!("variable1 is {}", variable1);
    variable1 = 64i32;
    println!("variable1 is {}", variable1);
    // errorが発生する
    // variable1 = "string";

    // 再束縛
    let variable2 = 32i32;
    println!("variable2 is {}", variable2);
    let variable2 = 64i32;
    println!("variable2 is {}", variable2);
    let variable2 = "string";
    println!("variable2 is {}", variable2);
}
