package main

import "fmt"

// func add(x int, y int) int {
// 	return x + y
// }
// 型をまとめることもできる
func add(x, y int) int {
	return x + y
}

func swap(x, y string) (string, string) {
	return y, x
}

func split(sum int) (x, y int) {
	// 返り値を先に宣言しておくと return だけで、変数が返る
	x = sum * 4 / 9
	y = sum - x
	return
}

func main() {
	fmt.Println(add(42, 13))

	c, d := swap("hello", "world")
	fmt.Println(c, d)

	fmt.Println(split(17))
}
