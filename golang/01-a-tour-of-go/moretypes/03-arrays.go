package main

import (
	"fmt"
	"strings"
)

func main() {
	var a [2]string
	a[0] = "Hello"
	a[1] = "World"
	fmt.Println(a[0], a[1])
	fmt.Println(a)

	primes := [6]int{2, 3, 5, 7, 11, 13}
	fmt.Println(primes)

	fmt.Println(" === slice ===")
	var s []int = primes[1:4]
	fmt.Println(s)

	fmt.Println(" === slice and change value ===")
	names := [4]string{
		"John",
		"Paul",
		"George",
		"Ringo",
	}
	fmt.Println(names)

	b := names[0:2]
	c := names[1:3]
	fmt.Println(b, c)

	c[0] = "XXX"
	fmt.Println(b, c)
	fmt.Println(names)

	fmt.Println(" === slice literal ===")
	q := []int{2, 3, 5, 7, 11, 13}
	fmt.Println(q)

	r := []bool{true, false, true, true, false, true}
	fmt.Println(r)

	str := []struct {
		i int
		bo bool
	}{
		{2, true},
		{3, false},
		{5, true},
		{7, true},
		{11, false},
		{13, true},
	}
	fmt.Println(str)

	fmt.Println(" === slice bounds ===")
	s = []int{2, 3, 5, 7, 11, 13}

	s = s[1:4]
	fmt.Println(s)

	s = s[:2]
	fmt.Println(s)

	s = s[1:]
	fmt.Println(s)

	fmt.Println(" === slice length and capacity ===")
	s = []int{2, 3, 5, 7, 11, 13}
	printIntArraySlice(s)

	// Slice the slice to give it zero length.
	s = s[:0]
	printIntArraySlice(s)

	// Extend its length.
	s = s[:4]
	printIntArraySlice(s)

	// Drop its first two values.
	s = s[2:]
	printIntArraySlice(s)

	fmt.Println(" === slice is nil ===")
	var n []int
	printIntArraySlice(n)
	if n == nil {
		fmt.Println("nil!")
	}

	fmt.Println(" === slice with make ===")
	sa := make([]int, 5)
  printStringSlice("sa", sa)

  sb := make([]int, 0, 5)
  printStringSlice("sb", sb)

  sc := sb[:2]
  printStringSlice("sc", sc)

  sd := sc[2:5]
  printStringSlice("sd", sd)

	fmt.Println(" === slice of slice ===")
  // Create a tic-tac-toe board.
	board := [][]string{
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
	}

	// The players take turns.
	board[0][0] = "X"
	board[2][2] = "O"
	board[1][2] = "X"
	board[1][0] = "O"
	board[0][2] = "X"

	for i := 0; i < len(board); i++ {
		fmt.Printf("%s\n", strings.Join(board[i], " "))
	}

	fmt.Println(" === appending to a slice ===")
  s = nil
	printIntArraySlice(s)

	// append works on nil slices.
	s = append(s, 0)
	printIntArraySlice(s)

	// The slice grows as needed.
	s = append(s, 1)
	printIntArraySlice(s)

	// We can add more than one element at a time.
	s = append(s, 2, 3, 4)
	printIntArraySlice(s)
}

func printIntArraySlice(s []int) {
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}

func printStringSlice(s string, x []int) {
	fmt.Printf("%s len=%d cap=%d %v\n",
		s, len(x), cap(x), x)
}