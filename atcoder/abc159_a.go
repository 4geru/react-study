package main

import "fmt"

func C(n int, r int) int {
	up := 1
	down := 1
	for i := 0; i < r; i++ {
		up *= (n - i)
		down *= i + 1
	}

	return up / down
}

func main() {
	var odd, even int
	fmt.Scan(&even, &odd)

	sum := 0
	// 偶数 + 偶数 = 偶数
	sum += C(even, 2)
	// 奇数 + 奇数 = 偶数
	sum += C(odd, 2)
	// 奇数 + 偶数, 偶数 + 奇数 = 奇数
	fmt.Println(sum)
}
