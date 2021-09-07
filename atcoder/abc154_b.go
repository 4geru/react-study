package main

import (
	"fmt"
)

func main() {
	var word string
	fmt.Scan(&word)

	for i := 0; i < len(word); i++ {

		fmt.Print("x")
	}
	fmt.Println()
}
