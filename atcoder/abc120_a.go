package main

import "fmt"

func solve(a int, b int, c int) (value int) {
	if a > b {
		return 0
	}
	if b > a*c {
		return c
	}
	return b / a
}

func main() {
	var a, b, c int
	fmt.Scan(&a, &b, &c)

	fmt.Println(solve(a, b, c))
}
