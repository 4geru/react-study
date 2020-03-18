package main

import (
	"fmt"
	"math/rand"
)

func main() {
	// random value is changed by seed value
	// rand.Seed(3)
	fmt.Println("My favorite number is", rand.Intn(10))
}
