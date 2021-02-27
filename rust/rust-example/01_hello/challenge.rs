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
