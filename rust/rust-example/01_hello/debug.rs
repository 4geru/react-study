#[derive(Debug)]
struct Structure(i32);

#[derive(Debug)]
struct Deep(Structure);

fn main() {
    #[derive(Debug)]
    struct DebugPrintable(i32);

    println!("{:?}", DebugPrintable(2));

    println!("==== examples ====");
    println!("{:?} month in a year", 12);
    println!("{1:?} {0:?} is the {actor:?} name.",
        "Slater",
        "Christian",
        actor="actor's"
    );

    println!("==== constructor ====");
    println!("Now {:?} will print!", Structure(3));

    println!("Now {:?} will print!", Deep(Structure(7)));

    println!("==== example ====");
    #[derive(Debug)]
    struct Person<'a> {
        name: &'a str,
        age: u8
    }

    let name = "Peter";
    let age = 27;
    let peter = Person { name, age };

    // Pretty print
    println!("{:#?}", peter);
}
