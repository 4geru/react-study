package main

import (
	"fmt"
)

func add(a float64, b int) (value int) {
	return int(a) + b
}

func main() {
	var n, x int

	fmt.Scan(&n, &x)
	var a = make([]int, x)
	for i := 0; i < n; i++ {
		fmt.Scan(&a[i])
	}
	count := 1
	now := 0
	for i := 0; i < n; i++ {
		now += a[i]
		if now <= x {
			count++
		}
		// fmt.Println(now, count)
	}

	fmt.Println(count)
}
