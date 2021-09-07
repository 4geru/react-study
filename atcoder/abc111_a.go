package main

import (
	"fmt"
)

func add(a float64, b int) (value int) {
	return int(a) + b
}

func main() {
	var str string
	fmt.Scan(&str)
	result := ""
	for _, word := range str {
		if word-'1' == 0 {
			result += "9"
		} else {
			result += "1"
		}
	}
	fmt.Println(result)
}
