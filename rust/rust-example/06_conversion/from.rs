use std::convert::From;

#[derive(Debug)]
struct Number {
    value: i32,
}

impl From<f64> for Number {
    fn from(item: f64) -> Self {
        Number { value: item as i32 }
    }
}

impl From<i32> for Number {
    fn from(item: i32) -> Self {
        Number { value: item }
    }
}

fn main() {
    let num:Number = Number::from(30.0);
    println!("My number is {:?}", num);

    let num:Number = Number::from(30);
    println!("My number is {:?}", num);
}
