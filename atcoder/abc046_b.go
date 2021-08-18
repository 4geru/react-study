package main

import (
	"fmt"
)

func add(a float64, b int) (value int) {
	return int(a) + b
}

func main() {
	var n, k int

	fmt.Scan(&n, &k)
	var sum int = k
	for i := 1; i < n; i++ {
		sum = sum * (k - 1)
	}
	fmt.Println(sum)
}
