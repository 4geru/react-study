fn main() {
    println!("{} days", 31);
    println!("{0}, this is, {1}. {1}, this is {0}", "Alice", "Bob");
    println!("{subject} {verb} {object}", 
        object="the lazy dog",
        subject="the quick brown fox",
        verb="jump over"
    );
    println!("My name is {0}, {1} {0}", "Bond", "James");

    #[allow(dead_code)]
    struct Structure(i32);

    // println!("This struct `{}` won't print...", Structure(3));
    let pi = 3.141592;
    println!("{:.3}", pi);
}
