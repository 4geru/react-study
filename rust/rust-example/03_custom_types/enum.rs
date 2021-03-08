// Create an `enum` to classify a web event. Note how both
// names and type information together specify the variant:
// `PageLoad != PageUnload` and `KeyPress(char) != Paste(String)`.
// Each is different and independent.
enum WebEvent {
    // An `enum` may either be `unit-like`,
    PageLoad,
    PageUnload,
    // like tuple structs,
    KeyPress(char),
    Paste(String),
    // or c-like structures.
    Click { x: i64, y: i64 },
}

// A function which takes a `WebEvent` enum as an argument and
// returns nothing.
fn inspect(event: WebEvent) {
    match event {
        WebEvent::PageLoad => println!("page loaded"),
        WebEvent::PageUnload => println!("page unloaded"),
        // Destructure `c` from inside the `enum`.
        WebEvent::KeyPress(c) => println!("pressed '{}'.", c),
        WebEvent::Paste(s) => println!("pasted \"{}\".", s),
        // Destructure `Click` into `x` and `y`.
        WebEvent::Click { x, y } => {
            println!("clicked at x={}, y={}.", x, y);
        },
    }
}

#[derive(Debug)]
enum Literal {
    Nan,
    I8(i8),
    I32 { num: i32 },
    I64([i64; 5]),
    I128 { num: i32, index: String },
}

fn to_s(literal: Literal) {
    println!("{:?}", literal);

    match literal {
        Literal::Nan => println!("num is 'Nan'."),
        Literal::I8( num ) => println!("num is '{}'.", num),
        Literal::I32 { num } => println!("num is '{}'.", num),
        Literal::I64(num) => println!("first num is '{}'.", num[0]),
        Literal::I128 { num, .. }=> println!("num is '{}'.", num),
    }
}

fn main() {
    let pressed = WebEvent::KeyPress('x');
    // `to_owned()` creates an owned `String` from a string slice.
    let pasted  = WebEvent::Paste("my text".to_owned());
    let click   = WebEvent::Click { x: 20, y: 80 };
    let load    = WebEvent::PageLoad;
    let unload  = WebEvent::PageUnload;

    inspect(pressed);
    inspect(pasted);
    inspect(click);
    inspect(load);
    inspect(unload);

    // === example ===
    let literal = Literal::Nan;
    to_s(literal);

    let literal = Literal::I8(3);
    to_s(literal);

    let literal = Literal::I32 { num: 1 };
    to_s(literal);

    let literal = Literal::I64([1, 2, 3, 4, 5]);
    to_s(literal);

    let literal = Literal::I128{ num: 123456, index: "34".to_string() };
    to_s(literal);
}
