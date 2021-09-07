package main

import (
	"fmt"
)

func main() {
	var s string

	fmt.Scan(&s)
	sum := 700
	for i := 0; i < len(s); i++ {
		if s[i] == 'o' {
			sum += 100
		}
	}
	fmt.Println((sum))
}
