package main

import (
	"fmt"
)

func add(a float64, b int) (value int) {
	return int(a) + b
}

func main() {
	var a, b, c, d int
	fmt.Scan(&a, &b, &c, &d)
	sum := 0
	if a < b {
		sum += a
	} else {
		sum += b
	}

	if c < d {
		sum += c
	} else {
		sum += d
	}

	fmt.Println(sum)
}
