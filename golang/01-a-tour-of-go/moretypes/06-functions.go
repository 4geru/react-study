package main

import (
	"fmt"
	"math"
)

func compute(fn func(float64, float64) float64) float64 {
	return fn(3, 4)
}

func adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}

func fibonacci() func(int) int {
	return func(x int) int {
		if x == 0 {
			return 0
		}

		preprev, prev := 0, 1
		for i:= 0; i < x-1; i ++ {
			prev, preprev = preprev + prev, prev
		}

		return prev
	}
}

func main() {
	fmt.Println(" === Function values ===")
	hypot := func(x, y float64) float64 {
		return math.Sqrt(x*x + y*y)
	}
	fmt.Println(hypot(5, 12))

	fmt.Println(compute(hypot))
	fmt.Println(compute(math.Pow))

	fmt.Println(" === Function closures ===")
	pos, neg := adder(), adder()
	for i := 0; i < 10; i++ {
		fmt.Println(
			i,
			pos(i),
			neg(-2*i),
		)
	}

	fmt.Println(" === Fibonacci closures ===")
	f := fibonacci()
	for i := 0; i < 10; i++ {
		fmt.Println(f(i))
	}
}
