package main

import (
	"fmt"
)

func scanValue() (count int, stringHash map[string]int) {
	var input string
	fmt.Scan(&count, &input)
	for i := 0; i < count; i++ {
		fmt.Scan(&input)
		stringHash[input]++
	}
	return count, stringHash
}

func main() {
	_, nmap := scanValue()
	_, mmap := scanValue()

	sum := 0
	for k, v := range nmap {
		lsum := v - mmap[k]
		if lsum > sum {
			sum = lsum
		}
	}

	fmt.Println(sum)
}
