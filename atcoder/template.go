package main
import (
	"fmt"
	"math"
)

func add(a float64, b int) (value int) {
	return int(a) + b
}

func main(){
	var n, input int
	var a = make([]int, 3)
	for _, v := range a {
		if (v >= now) {
			result += 1
		}
	}

	fmt.Scan(&n)
	sum := 0
	for i := 0 ; i < n ; i ++ {
		fmt.Scan(&input)
		if (input > 10) {
			sum += input - 10
		}
	}
	fmt.Println(sum)

	fmt.Println(add(64, 64))
}
