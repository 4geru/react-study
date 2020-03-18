package main

import "fmt"

var c, python, java bool

func main() {
	var i int
	var ruby string = "ok"
	ruby = "ruby"
	fmt.Println(i, c, python, java, ruby)

	var j, k int = 1, 2
	var rust, r, javascript = true, false, "no!"
	fmt.Println(j, k, rust, r, javascript)

	// := を使うことで暗黙的に代入することができる
	x, y, z := 1, true, "ok!"
	fmt.Println(x, y, z)
}
