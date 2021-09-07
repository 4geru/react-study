package main

import (
	"fmt"
)

func add(a float64, b int) (value int) {
	return int(a) + b
}

func main() {
	var a, b, c int
	fmt.Scan(&a, &b, &c)
	i := a

	for ; i%b-c != 0; i += a {
		if i >= 10000 {
			fmt.Println("NO")
			return
		}
	}
	fmt.Println("YES")
}
