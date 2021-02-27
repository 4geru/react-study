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
