package main

import "fmt"

func main() {
	fmt.Println("counting")

	for i := 0; i < 10; i++ {
		defer fmt.Println(i)
	}

	fmt.Println("done")

	defer fmt.Println("first")
	defer fmt.Println("world")
	defer fmt.Println("second")
	fmt.Println("hello")
}
